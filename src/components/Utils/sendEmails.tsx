async function sendEmail(formData) {
    const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    });
    if (res.ok) {
        // email sent successfully
    } else {
        // handle error
    }
}

// Example usage:
const formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

sendEmail(formData);
