import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
  

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields: name, email, or message' }),
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: 'martin.m17245@gmail.com', 
        pass: 'ywna gfhn aukw lpit', 
      },
    });

    // Email options
    const mailOptions = {
      from: email, // The sender's email
      to: 'martin.m17245@gmail.com', // Your email address
      subject: `New message from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending message', error: String(error) }),
      { status: 500 }
    );
  }
}