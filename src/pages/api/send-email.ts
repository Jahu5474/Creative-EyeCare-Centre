import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;

type EmailRequestBody = {
    to: string;
    from: string;
    subject: string;
    html: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { to, from, subject, html } = req.body as EmailRequestBody;

    const msg = {
        to,
        from,
        subject,
        html,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
}
