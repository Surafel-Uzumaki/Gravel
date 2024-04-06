import React, { useState } from "react";

const ContactForm = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Invalid phone number");
      return;
    }

    // Form data is valid, proceed with submission
    console.log("Form submitted");
  };

  return (
    <div className="container  mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-brown-800 mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-md w-[100%]">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-brown-700 font-semibold">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Enter your first name" 
            className="w-full px-4 py-2 rounded-md bg-brown-100 focus:outline-none focus:bg-brown-300" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-brown-700 font-semibold">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Enter your last name" 
            className="w-full px-4 py-2 rounded-md bg-brown-100 focus:outline-none focus:bg-brown-300" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-brown-700 font-semibold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email address" 
            className="w-full px-4 py-2 rounded-md bg-brown-100 focus:outline-none focus:bg-brown-300" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-brown-700 font-semibold">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter your phone number" 
            className="w-full px-4 py-2 rounded-md bg-brown-100 focus:outline-none focus:bg-brown-300" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-brown-700 font-semibold">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter your message" 
            className="w-full px-4 py-2 rounded-md bg-brown-100 focus:outline-none focus:bg-brown-300"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-700 focus:outline-none focus:bg-brown-700">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
