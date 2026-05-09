import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev'}>`,
      to: ['admin@devzoratech.com', 'devzoratech@gmail.com', 'devzora.software@gmail.com'],
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4F46E5; margin-bottom: 20px;">New Message from Portfolio</h2>
          <div style="margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #4F46E5;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 30px;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (resendError) {
      throw new Error(resendError.message);
    }

    return NextResponse.json({ success: true, id: resendData?.id });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
