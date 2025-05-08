import React from "react";

const ContactUs = () => {
  return (
    <div className="py-12 my-5 bg-base-200 px-7 rounded-lg">
      <div>
        <h1 className="text-2xl font-semibold mb-5">Contact Us</h1>
        <p>
          Thank you for visiting our Bill Management platform. We’re always here
          to assist you with any questions, concerns, or feedback you may have.
          Whether you’re having trouble paying your bills, need help with your
          account, or just want to share your suggestions, don’t hesitate to
          reach out.
        </p>
      </div>

      <div>
        <h1 className="font-semibold mb-3 mt-3">Customer Support</h1>
        <p>
          Our customer service team is available to provide prompt and helpful
          assistance. We aim to respond to all inquiries within 24 hours on
          business days.
        </p>
      </div>

      <div className="space-y-3">
        <li>
          <span className="font-semibold">Phone: </span> +880 1700-000000
        </li>
        <li>
          <span className="font-semibold">Email: </span>
          help@billmanagerdemo.com
        </li>
        <li>
          <span className="font-semibold">Address: </span>
          44/B North Avenue, Gulshan, Dhaka, Bangladesh.
        </li>
        <li>
          <span className="font-semibold">Working Hours: </span>Sunday –
          Thursday, 9:00 AM – 6:00 PM
        </li>
        <div>
          <h1 className="font-bold mb-3">Feedback and Suggestions</h1>
          <p>
            We value your input. If you have any ideas or improvements you'd
            like to see in our system, please let us know. Your feedback helps
            us serve you better.
          </p>
        </div>
        <div>
          <h1 className="font-semibold mb-3">Follow Us</h1>
          <p>
            Stay updated with new features and services by following us on our
            social media platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
