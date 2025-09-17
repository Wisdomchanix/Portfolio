import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import scrollreveal from "scrollreveal";

const Contact = () => {

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      distance: '60px',
      duration: 1500,
      delay: 150,
      reset: true,
    })


    sr.reveal(".contact_container", { delay: 300, origin: 'top' })
    sr.reveal(".contact_form", { delay: 300, origin: 'bottom' })
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        "service_9qye9bz", // replace with your EmailJS service ID
        "template_0wc5wko", // replace with your EmailJS template ID
        formData,
        "W5FQKIatLzC3MfEMS" // replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent:", response);
        setSuccess(true);
        setPopup({
          show: true,
          message: "Message sent successfully! I 'll get back to you within 24hrs.",
          type: "success",
        });

        // Reset form after success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        setPopup({
          show: true,
          message: "Something went wrong. Try again.",
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
      });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact_container">
        <h2 className="section_title">Contact Me</h2>
        <h1 className="section_subtitle">Look Who&apos;s Here</h1>
        <p className="contact_description">
          I am open to <b className="about_color">remote</b> and{" "}
          <b className="about_color">onsite full-time, part-time</b> roles. If
          you&apos;ve got a question, want to discuss a project, or just want to
          say hi,{" "}
          <span className="contact_social">
            <a
              href="mailto:wisdomihundah664@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="email_link"
            >
              Email
            </a>
          </span>{" "}
          or send me a message on{" "}
          <span className="contact_social">
            <a
              href="http://linkedin.com/in/ihundah-wisdom-5602b7262"
              target="_blank"
              rel="noreferrer"
              className="linkedin_link"
            >
              LinkedIn
            </a>
          </span>{" "}
          or a DM on{" "}
          <span className="contact_social">
            <a
              href="https://www.instagram.com/wisdomchainx?igsh=MTkwcHZiY2xibnhtcQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="instagram_link"
            >
              Instagram
            </a>
          </span>{" "}
          or fill the form.
        </p>
      </div>

      <form className="contact_form" id="contact-form" onSubmit={handleSubmit}>
        <textarea
          name="name"
          id="name"
          className="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
        ></textarea>

        <input
          type="email"
          name="email"
          id="mail"
          className="name mail"
          placeholder="Enter your mail"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          id="message"
          className="name message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <div className="connect_btn">
          <div className="connect_bg"></div>
          <button type="submit" className="connect" disabled={loading}>
            {loading ? "Sending..." : success ? "✓ Sent" : "CONNECT"}
          </button>
        </div>
      </form>

      {popup.show && (
        <p
          className={`response_message ${popup.type === "success" ? "popup-success" : "popup-error"
            }`}
          id="response-message"
        >
          {popup.message}
        </p>
      )}
    </section>
  );
};

export default Contact;
