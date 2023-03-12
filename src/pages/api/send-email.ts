import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

const sendGridConfig = {
    apiKey: process.env.SENDGRID_API_KEY
}

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message } = req.body;

    const msg = {
        to: 'juhynjuhn@gmail.com', // Replace with your own email address
        from: email,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending message');
    }
}