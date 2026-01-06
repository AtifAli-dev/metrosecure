
import { BookingState, EXTRA_TASKS } from './type';

/**
 * RESEND API INTEGRATION
 * 
 * To make this functional on Vercel:
 * 1. Create a Vercel Serverless Function (e.g., /api/send-booking.ts).
 * 2. Use the 'resend' npm package on the backend.
 * 3. Use the environment variable process.env.RESEND_API_KEY.
 * 
 * Below is the structured logic and detailed HTML body for your emails.
 */

export const sendBookingEmail = async (data: BookingState, totalPrice: number) => {
  // --- CONFIGURATION SECTION ---
  // 1. INSERT YOUR RESEND API KEY HERE (If calling from a backend environment)
  // const RESEND_API_KEY = "re_YOUR_ACTUAL_RESEND_API_KEY"; 
  
  // 2. YOUR COMPANY'S PERSONALIZED SENDING EMAIL (Must be a verified domain in Resend)
  // const FROM_EMAIL = "MetroSecure Booking <bookings@yourverifieddomain.com>";
  
  // 3. YOUR COMPANY'S NOTIFICATION RECIPIENT
  // const COMPANY_EMAIL = "control@metrosecure.co.uk";
  // ------------------------------

  console.log("Constructing detailed booking email for MetroSecure...", { data, totalPrice });

  const selectedExtraLabels = EXTRA_TASKS
    .filter(t => data.extras.includes(t.id))
    .map(t => t.label)
    .join(', ') || 'None selected';

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: sans-serif; line-height: 1.6; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; }
        .header { background-color: #1e293b; color: #ffffff; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { padding: 30px; }
        .section { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f1f5f9; }
        .section-title { font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #06b6d4; margin-bottom: 10px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .item { margin-bottom: 10px; }
        .label { font-size: 12px; color: #64748b; font-weight: bold; display: block; }
        .value { font-size: 16px; font-weight: 600; color: #1e293b; }
        .price-box { background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; margin-top: 20px; }
        .price-value { font-size: 32px; font-weight: 900; color: #1e293b; }
        .footer { text-align: center; font-size: 12px; color: #94a3b8; margin-top: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
          <p style="margin: 5px 0 0; opacity: 0.8;">MetroSecure Cleaning Services</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Customer Details</div>
            <div class="grid">
              <div class="item"><span class="label">Full Name</span><span class="value">${data.fullName}</span></div>
              <div class="item"><span class="label">Mobile</span><span class="value">${data.mobile}</span></div>
              <div class="item" style="grid-column: span 2;"><span class="label">Email</span><span class="value">${data.email}</span></div>
              <div class="item" style="grid-column: span 2;">
                <span class="label">Address</span>
                <span class="value">${data.addressLine1}${data.addressLine2 ? ', ' + data.addressLine2 : ''}<br>${data.city}, ${data.postcode}</span>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Service Details</div>
            <div class="grid">
              <div class="item"><span class="label">Bedrooms</span><span class="value">${data.bedrooms}</span></div>
              <div class="item"><span class="label">Bathrooms</span><span class="value">${data.bathrooms}</span></div>
              <div class="item"><span class="label">Duration</span><span class="value">${data.hours} Hours</span></div>
              <div class="item"><span class="label">Frequency</span><span class="value">${data.frequency.replace('_', ' ').toLowerCase()}</span></div>
              <div class="item" style="grid-column: span 2;"><span class="label">Extra Tasks</span><span class="value">${selectedExtraLabels}</span></div>
              <div class="item" style="grid-column: span 2;"><span class="label">Products</span><span class="value">${data.bringProducts ? 'Cleaner brings products (+£6.00)' : 'Customer provides products'}</span></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Scheduling & Access</div>
            <div class="grid">
              <div class="item"><span class="label">Date</span><span class="value">${new Date(data.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}</span></div>
              <div class="item"><span class="label">Arrival Window</span><span class="value">${data.arrivalWindow?.toLowerCase()}</span></div>
              <div class="item" style="grid-column: span 2;"><span class="label">Access Method</span><span class="value">${data.accessMethod?.replace('_', ' ')}</span></div>
              ${data.accessDetails ? `<div class="item" style="grid-column: span 2;"><span class="label">Access Details</span><span class="value">${data.accessDetails}</span></div>` : ''}
            </div>
          </div>

          <div class="price-box">
            <span class="label">Total Estimated Price</span>
            <div class="price-value">£${totalPrice.toFixed(2)}</div>
            <p style="margin: 10px 0 0; font-size: 12px; font-weight: bold; color: #06b6d4; text-transform: uppercase;">Payment on Completion</p>
          </div>
        </div>

        <div class="footer">
          <p>This is an automated booking request from the MetroSecure website.</p>
          <p>&copy; ${new Date().getFullYear()} MetroSecure Cleaning Services</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // --- SIMULATED SENDING LOGIC ---
  // In a real Vercel environment, you would use:
  // await resend.emails.send({ from: FROM_EMAIL, to: [COMPANY_EMAIL, data.email], subject: ..., html: htmlBody });
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Email HTML Generated Successfully:", htmlBody);

  return htmlBody;
};

