import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST (req: NextResponse) {
    const bookingData = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: '',
        }
    });

    const mailOptions = {
        
    }
}