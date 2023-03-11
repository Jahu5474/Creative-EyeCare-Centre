import fetch from 'isomorphic-unfetch';

async function sendEmail() {
    const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({/* email data */ })
    });
    if (res.ok) {
        // email sent successfully
    } else {
        // handle error
    }
}
