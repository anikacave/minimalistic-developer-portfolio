import { useEffect } from "react";
import { Footer } from "../../components";
import ContactForm from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Anika Cave";
  })
  return (
    <article className="contact-main">
      <h2 className="title-font pink-text">Contact Me</h2>
      <p className="white-text">
        If you are interested in contacting me, fill out this form. Or, send a message via linkedin messages!
      </p>
      <ContactForm />
      {/* <Footer /> */}
    </article>
  );
};

export default Contact;
