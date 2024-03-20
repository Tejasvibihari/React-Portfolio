import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: "tejasvibihari2000@gmail.com",
        pass: "rrsuyzcvvxjhfhsq",
    },
});
const sendSignUpEmail = async (email) => {
    try {
        await transporter.sendMail({
            from: '<tejasvibihari2000@gmail.com>',
            to: email,
            subject: "Signup To Newsletter",
            html: `<div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="text-align: center; margin-bottom: 20px;">Thank You for Subscribing!</h2>
        <p style="margin-bottom: 20px;">We're excited to have you on board. You'll now receive our latest updates and exclusive offers straight to your inbox.</p>
        <p style="margin-bottom: 20px;">Stay connected with us on social media:</p>
        <div class="social-icons" style="text-align: center; margin-top: 20px;">
            <a href="https://www.instagram.com/tejasvi_bihari/" target="_blank" style="display: inline-block; margin: 0 10px;"><img src="https://img.icons8.com/ios/50/instagram-new--v3.png" alt="Instagram" width="30" height="30"></a>
            <a href="https://twitter.com/tejasvi_Bihari" target="_blank" style="display: inline-block; margin: 0 10px;"><img src="https://icons8.com/icon/60014/twitter" alt="Twitter" width="30" height="30"></a>
            <a href="https://www.linkedin.com/in/tejasvi-bihari/" target="_blank" style="display: inline-block; margin: 0 10px;"><img src="https://icons8.com/icon/8808/linkedin" alt="LinkedIn" width="30" height="30"></a>
        </div>
    </div>`
        });
    }
    catch (error) {
        console.log(error)
    }
};

app.post("/api/subscribe", (req, res) => {
    const email = req.body.email;
    console.log(email);
    try {
        sendSignUpEmail(email);
        res.send({ message: "Email sent" });
    } catch (error) {
        // console.log(error);
        res.json({ message: "Error occurred" });
    }
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});