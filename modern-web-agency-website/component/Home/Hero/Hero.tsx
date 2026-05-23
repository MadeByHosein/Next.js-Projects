'use client'

import Link from "next/link";
import { useEffect, useRef } from "react"
import { BiSolidArrowToRight } from "react-icons/bi";
import { GiSparkles } from 'react-icons/gi'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        // اطمینان از این که کانواس و کانتکست وجود داشته باشه و ارر نده
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');    /* محیط کار دو بعدی */
        if (!ctx) return;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
        }> = [];

        const createParticles = () => {
            particles.length = 0;

            // تولید 100 ذره
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * window.innerWidth,  /*  موقعیت عرضی فعلی ذره داخل عرض صفحه */
                    y: Math.random() * window.innerHeight, /* موقعیت ارتفاع فعلی ذره داخل ارتفاع صفحه */
                    size: Math.random() * 3 + 1,           /* شعاع ذره بین 1 تا 4 پیکسل */
                    speedX: (Math.random() - 0.5) * 0.5,   /*  سرعت آهسته در جهت افقی x و -x */
                    speedY: (Math.random() - 0.5) * 0.5,   /* سرعت آهسته در جهت عمودی y و -y */
                    opacity: (Math.random() * 0.5 + 0.2)   /*  شفافیت بین 0.2 تا 0.7*/
                })
            }
        }

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1 /* از dpr برای بهینه سازی نمایش ذرات */

            canvas.width = window.innerWidth * dpr;         /* عرض داخلی */
            canvas.height = window.innerHeight * dpr;       /* ارتفاع داخلی */

            canvas.style.width = `${window.innerWidth}px`;  /* عرض ظاهری */
            canvas.style.height = `${window.innerHeight}px`; /* ارتفاع ظاهری */

            // ❗ مهم: جلوگیری از accumulation transform
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            // فقط یک بار scale درست
            ctx.scale(dpr, dpr);
        }

        const init = () => {
            setCanvasSize();
            createParticles();
        }

        init();

        let animationId: number

        function animate() {
            if (!canvas || !ctx) return;

            // ❗ مهم: clear بر اساس اندازه واقعی viewport
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            particles.forEach((particle) => {
                ctx.beginPath();                                                       /* شروع یک شکل جدید */
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);       /* دایره */
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`           /* رنگ */
                ctx.fill()                                                            /* رسم */

                particle.x += particle.speedX;   /* حرکت افقی */
                particle.y += particle.speedY;   /* حرکت عمودی */

                // برخورد با لبه‌ها
                if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1
                if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1
            })

            animationId = requestAnimationFrame(animate) /* loop */
        }

        animate();

        const handleResize = () => { /* وقتی کاربر پنجره رو تغییر اندازه بده */
            setCanvasSize();
            createParticles(); // جلوگیری از بهم‌ریختگی بعد resize
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize) /* جلوگیری از memory leak */
            cancelAnimationFrame(animationId)
        }

    }, [])

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div>
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
                        <GiSparkles className="h-5 w-5 text-yellow-400" />
                        <span className="text-white font-medium ">Welcome to webwarriors</span>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
                    <TypeAnimation
                        sequence={[
                            'We Create Magic',
                            2000,
                            'We Build Dreams',
                            2000,
                            'We design Future',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                {/* description */}
                <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quas recusandae. Debitis quo sunt porro!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                    <Link
                        href={'#'}
                        className="group inline-flex items-center justify-center space-x-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl "
                    >
                        <span>Get Started</span>
                        <BiSolidArrowToRight className="w-5 h-5 group-hover:translate-x-1 transition-transform " />
                    </Link>

                    <Link
                        href={'#contact'}
                        className="inline-flex items-center justify-center text-white dark:text-white px-8 py-4 border rounded-full border-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl "
                    >
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>

            {/* animated scroll */}
            <div className="absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce ">
                <div className="w-4 h-6 sm:w-6 sm:h-10 sm:p-2 border-2 border-white rounded-full flex justify-center items-center">
                    <div className="w-0.5 h-2 bg-white rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero