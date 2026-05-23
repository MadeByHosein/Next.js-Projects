export type userReviewData = {
    id: number ;
    name: string;
    profession:string;
    userImage:string;
    review:string;
}

export const userReviewData : userReviewData[] = [
    {
      id: 1,
      name: "Emily Clark",
      profession: "Interior Designer",
      userImage: "/images/u4.jpg",
      review:
        "Fantastic range of properties with clear details. The best platform for home and design inspiration.",
    },
    {
      id: 2,
      name: "Daniel Smith",
      profession: "Architect",
      userImage: "/images/u2.jpg",
      review:
        "Very intuitive interface and high-quality listings. It helps me find inspiration for modern projects.",
    },
    {
      id: 3,
      name: "Sophia Johnson",
      profession: "Real Estate Agent",
      userImage: "/images/u3.jpg",
      review:
        "A reliable platform with accurate property information. It makes client recommendations much easier.",
    },
    {
      id: 4,
      name: "Michael Brown",
      profession: "Home Buyer",
      userImage: "/images/u1.jpg",
      review:
        "Great experience overall. The search filters are powerful and saved me a lot of time.",
    },
  ];