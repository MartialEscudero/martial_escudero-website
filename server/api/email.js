import nodemailer from "nodemailer"

export default defineEventHandler(async  (event) => {
    const { req, res } = event

    if (req.method !== "POST") {
        res.statusCode = 405
        res.end()
    }

    const body = await readBody(event)

    const { name, from, subject, text } = body

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: import.meta.env.VITE_EMAIL_AUTH_USER,
            pass: import.meta.env.VITE_EMAIL_AUTH_PASS
        }
    })

    let infos = {
        to: import.meta.env.VITE_EMAIL_AUTH_USER,
        subject: subject,
        html: `
            <p>Message de ${name} via ${from}</p>
            <br>
            <p>${text}</p>
        `
    }

    await transporter.sendMail(infos)

    res.end("Email Sent !")
})