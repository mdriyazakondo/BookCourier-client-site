import React from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Have questions or suggestions? Fill out the form below and we will get
          back to you.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500">
              <FiMail className="ml-3 text-gray-400" size={20} />
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full resize-none border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <FiSend size={20} />
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <FiMail className="text-purple-600" />
            support@admin.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FiPhone className="text-purple-600" />
            +880 1234 567890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
