'use client';

import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  const YOUR_SERVICE_ID = 'service_c3gqhwc';
  const YOUR_TEMPLATE_ID = 'template_nfa53g9'; 
  const YOUR_USER_ID = 'bLeKsABKLc4p8a6B5';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="p-8 bg-dark text-textPrimary">
      <div className="text-center mb-10">
        <p className="text-3xl font-bold text-center my-3 text-textPrimary mt-10">
          <span className="text-lightBlue">L</span>et's Talk
          <span className="text-lightBlue ml-2">Now</span>
        </p>
      </div>
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 md:mr-8">
          <h3 className="text-3xl font-bold mb-4">
            Do You Have A Project In Your Mind?
          </h3>
          <p className="mb-8 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h4 className="text-2xl font-bold mb-4">Services</h4>
          <ul className="mb-8">
            <li className="mb-2">✔ Web Development</li>
            <li className="mb-2">✔ App Development</li>
          </ul>
          <h4 className="text-2xl font-bold mb-4">Follow On</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/"
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100082554939780&mibextid=ZbWKwL"
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.youtube.com/"
              className="text-lightBlue hover:text-hoverPrimary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 bg-primary p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Write Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-dark text-lightBlue border border-lightBlue"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-lightBlue text-white font-bold hover:bg-hoverPrimary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
