import Event from "@/database/event.model";
import connectDB from "@/lib/mangodb";
import { NextRequest, NextResponse } from "next/server"; 
  

// export async function POST(request: NextRequest) {
//     try {
//       // await connectDB(); // موقتاً کامنت شود

//       const formData = await request.formData();
//       const eventData: Record<string, any> = {};
//       for (const [key, value] of formData.entries()) {
//         if (eventData[key]) {
//           if (Array.isArray(eventData[key])) {
//             eventData[key].push(value);
//           } else {
//             eventData[key] = [eventData[key], value];
//           }
//         } else {
//           eventData[key] = value;
//         }
//       }

//       // const createdEvent = await Event.create(eventData); // موقتاً کامنت شود

//       return NextResponse.json({
//         message: 'Data processed (DB part skipped for debugging)',
//         receivedFormData: eventData
//       }, { status: 201 });

//     } catch (error) {
//       console.error("Processing failed:", error);
//       // ... (بخش مدیریت خطا)
//       let errorMessage = "Unknown error occurred";
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       } else if (typeof error === 'string') {
//         errorMessage = error;
//       }
//       return NextResponse.json(
//         { message: "Processing failed", error: errorMessage },
//         { status: 500 }
//       );
//     }
//   }
//   // ... (سایر متدها)




export async function POST(req: NextRequest){
    try {

        await connectDB() ;

        const formData = await req.formData() ;

        let event ;

        try {
            event = Object.fromEntries(formData.entries())
        } catch (e) {
            return NextResponse.json({message: 'Invalid JSON data format'},{status: 400})
        }

        const createdEvent = await Event.create(event)

        return NextResponse.json({message: 'Event created successfuly', event : createdEvent},{status: 201})

    } catch(e) {
        console.log(e)
        return NextResponse.json({message: "Event creation failed", error: e instanceof Error ? e.message : "Unknown"},{status: 500})
    }
}