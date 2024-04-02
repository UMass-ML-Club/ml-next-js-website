import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { mlClubEmail as clubEmail } from '../../src/shared/data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      console.log(req.body);
      if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
      }
      const pass = process.env.EMAIL_PASSWORD; // This is a secret, so it should be stored in an environment variable
      if (!pass) {
        throw new Error('EMAIL_PASSWORD is not defined');
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        tls : {
          ciphers : 'SSLv3',
          rejectUnauthorized: false
        },
        auth: {
          user: clubEmail,
          pass: pass,
        },
      });

      let info = await transporter.sendMail({
        from: clubEmail,
        to: clubEmail,
        subject: 'Member wants to sign up to the email list',
        text: `Add ${email} to the email list`,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ status: 'Email sent' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
