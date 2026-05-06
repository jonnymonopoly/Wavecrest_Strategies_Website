import { NextRequest, NextResponse } from 'next/server'

// TODO: Connect to email provider (Resend, SendGrid, etc.)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, company, province, message, services } = body

    // Basic validation
    if (!firstName || !lastName || !email || !province || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log submission for now
    console.log('[Contact Form Submission]', {
      name: `${firstName} ${lastName}`,
      email,
      company: company || 'Not provided',
      province,
      services: services?.join(', ') || 'Not specified',
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
