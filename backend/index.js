import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import connectDB from "./db.js";
import Admin from "./Admin.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  const {details} = req.body
  console.log(details.name);
  res.send("ok");
});

app.post("/sendmail", async (req, res) => {
  try {
    console.log("okay");
    const { mail } = req.body;

    const admin = await Admin.find();
    console.log(admin);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: admin[0].user,
        pass: admin[0].pass,
      },
    });

    const mailOptions = {
      from: "aswin.s2101@gmail.com",
      to: mail,
      subject: "Thanks for purchase ZigZag",
      text: "Your order will be delivered in 2 or 3 days. Thanks for shopping!",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    res.send("Email sent successfully...");
  } catch (error) {
    console.error("Error sending email:", error);
    res.json(error);
  }
});

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);


