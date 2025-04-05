import React from 'react';
import "./ContactUs.css";
import Swal from 'sweetalert2';

const ContactUs = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3acfb80-b394-4828-bfff-0beabc05070a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Meaage sent sucessfully!",
        icon: "success"
      });
    }
  };


  return (
      <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit = {onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;