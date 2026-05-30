import { Schema, model, models, Document, Types } from "mongoose";
import Event from "./event.model";

export interface IBooking extends Document {
    eventId: Types.ObjectId;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
            required: [true, 'Event Id is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            validate: {
                validator: function (email: string) {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailRegex.test(email);
                },
                message: 'please provide a valid email address'
            }
        }
    },
    {
        timestamps: true
    }
);

// ✅ بدون استفاده از NextFunction و بدون نیاز به Express
BookingSchema.pre<IBooking>('save', async function () {
    const booking = this;

    if (booking.isModified('eventId') || booking.isNew) {
        try {
            const eventExists = await Event.findById(booking.eventId).select('_id');

            if (!eventExists) {
                const error = new Error(`Event with ID ${booking.eventId} does not exist`);
                error.name = 'ValidationError';
                throw error;
            }
        } catch (error) {
            const validationError = new Error('Invalid event ID or database error');
            validationError.name = 'ValidationError';
            throw validationError;
        }
    }
});

BookingSchema.index({ eventId: 1 });
BookingSchema.index({ eventId: 1, createdAt: -1 });
BookingSchema.index({ email: 1 });
BookingSchema.index({ eventId: 1, email: 1 }, { unique: true, name: 'unique_event_email' });

const Booking = models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
