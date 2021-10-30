"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = async (to, subject, content) => {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MailAccount,
            pass: process.env.MailPassword
        }
    });
    const mailOptions = {
        from: `CONTACT-US ${process.env.MailAccount}`,
        to: to,
        subject: subject,
        html: content,
    };
    const result = await transporter.sendMail(mailOptions);
    return result;
};
exports.sendMail = sendMail;
//# sourceMappingURL=mail-sender.js.map