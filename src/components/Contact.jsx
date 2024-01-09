import React from "react";
import { useState } from "react";
export const Contact = () => {
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");

  const constructMailtoLink = () => {
    const subject = "Contact Us";
    const body = `${message}\n\nWith Regards,\n${name}`;
    const mailtoLink = `mailto:mrp.nitjsr@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    return mailtoLink;
  };
  return (
    <div class="flex mt-24">
      <div class="-mb-16 w-full mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl mt-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 items">
        <form class="space-y-6" action="#">
          <h5 class="text-4xl font-semibold text-center text-gray-900">
            Contact Us
          </h5>
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Name"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <a
            href={constructMailtoLink()}
            type="submit"
            class="justify-center text-center w-5/12 md:w-1/5 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5"
          >
            Send Message
          </a>
        </form>
      </div>
    </div>
  );
};
