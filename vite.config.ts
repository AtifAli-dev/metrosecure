import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: 'all',
      },
      plugins: [
        react(),
        {
          name: 'api-server-middleware',
          configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
              const url = req.url ? req.url.split('?')[0] : '';
              if ((url === '/api/contact' || url === '/api/contact.ts') && req.method === 'POST') {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', async () => {
                  try {
                    const parsed = body ? JSON.parse(body) : {};
                    if (env.RESEND_API_KEY) {
                      const { Resend } = await import('resend');
                      const resend = new Resend(env.RESEND_API_KEY);
                      await resend.emails.send({
                        from: "Website Contact <onboarding@resend.dev>",
                        to: ["control@metrosecure.co.uk"],
                        subject: `New Inquiry – ${parsed.service || 'General'}`,
                        replyTo: parsed.email,
                        html: `
                          <h2>New Contact Form Submission</h2>
                          <p><strong>Name:</strong> ${parsed.fullName}</p>
                          <p><strong>Email:</strong> ${parsed.email}</p>
                          <p><strong>Phone:</strong> ${parsed.phone || 'Not provided'}</p>
                          <p><strong>Service:</strong> ${parsed.service || 'Not specified'}</p>
                          <p><strong>Message:</strong></p>
                          <p>${parsed.message || ''}</p>
                        `,
                      });
                    }
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.end(JSON.stringify({ success: true }));
                  } catch (err) {
                    console.error('API contact handling error:', err);
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.end(JSON.stringify({ success: true, simulated: true }));
                  }
                });
                return;
              }
              next();
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.RESEND_API_KEY': JSON.stringify(env.RESEND_API_KEY || ''),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
