import { NextResponse } from 'next/server';

const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, name, email, phone, company, message } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Missing Turnstile token' },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const formData = new URLSearchParams();
    formData.append('secret', SECRET_KEY || '');
    formData.append('response', token);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const outcome = await result.json();

    if (!outcome.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid Turnstile token' },
        { status: 400 }
      );
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log it and return success
    console.log('Form submitted successfully:', { name, email, phone, company, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
