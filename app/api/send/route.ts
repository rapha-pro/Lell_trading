import { EmailTemplate } from '@/app/utils/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, lastName, email, phone, country, message } = await body;
  console.log("================================\n", body);

  console.log("Before calling Resend API");

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['Lelleugene49@gmail.com'],
      subject: 'New Contact Form Submission from ',
      react: EmailTemplate({
        name, 
        lastName, 
        email, 
        phone, 
        country, 
        message 
      }),
    });

    // Log the Resend API response
    console.log("Resend API response:", { data, error });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
