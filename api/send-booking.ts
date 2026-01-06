// api/send-booking.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { htmlBody, customerEmail, fullName } = req.body;

    const data = await resend.emails.send({
      from: 'Control Room <control@metrosecure.co.uk>',
      to: [customerEmail],
      replyTo: customerEmail,
      subject: `New Booking Request from ${fullName}`,
      html: htmlBody,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}