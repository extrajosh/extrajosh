package com.extrajosh.mail;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;


public class MailSender extends HttpServlet {

    private final Logger logger = Logger.getLogger(MailSender.class.getName());
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) {
        Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String phone = req.getParameter("phone");
        String message = req.getParameter("msg");

        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("er.sanjay.2011@gmail.com", name));
            msg.addRecipient(Message.RecipientType.TO,
                    new InternetAddress("extrajoshofficial@gmail.com", "ExtraJosh"));
            msg.setSubject("New message from ExtraJosh.com");
            StringBuilder builder = new StringBuilder();
            builder.append("Phone No: ").append(phone).append("\n");
            builder.append("Email: ").append(email).append("\n");
            builder.append("Message: ").append(message);
            msg.setText(builder.toString());
            Transport.send(msg);
            logger.info("Message sent");
        } catch (MessagingException | UnsupportedEncodingException e) {
            logger.log(Level.SEVERE, e.getMessage(), e);
        }
    }
}