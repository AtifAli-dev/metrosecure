// api/send-booking.ts
<<<<<<< HEAD
=======
import type { VercelRequest, VercelResponse } from '@vercel/node';
>>>>>>> 8375f0f3a52e2371917f845cc19e287e6bc6addb
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

<<<<<<< HEAD
export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
=======
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
>>>>>>> 8375f0f3a52e2371917f845cc19e287e6bc6addb
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