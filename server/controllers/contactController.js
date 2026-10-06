import nodemailer from "nodemailer";

export async function sendContactEmail(req, res) {
  try {
    const { firstName, email, message } = req.body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "First name, email, and message are required.",
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Build optional photo attachment
    const attachments = [];

    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      });
    }

    // Send contact request to site owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `WonderVerse Contact Request from ${firstName}`,
      text: `
Name: ${firstName}
Email: ${email}

Message:
${message}
      `,
      attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Your message was sent successfully.",
    });
  } catch (error) {
    console.error("Contact Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
}