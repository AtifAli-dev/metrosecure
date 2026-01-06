import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { htmlBody, customerEmail, fullName } = req.body;

    await resend.emails.send({
      from: "Control Room<control@metrosecure.co.uk>",
      to: ["control@metrosecure.co.uk"],
      replyTo: customerEmail,
      subject: `New Booking Request from ${fullName}`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: 'Booking request sent successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to send booking request' });
  }
}