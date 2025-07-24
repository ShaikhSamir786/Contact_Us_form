import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      errors.email = 'Email address is invalid.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the changed field on input
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ message: '', type: '' });
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_mlknut4',    // Your EmailJS Service ID
        'template_08hxsvc',   // Your EmailJS Template ID
        formRef.current,
        'M7AmpfcULBFORNK2D'   // Your EmailJS Public Key/User ID
      )
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setFormErrors({});
        },
        () => {
          setStatus({
            message:
              'An error occurred while sending your message. Please try again later.',
            type: 'error',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md max-w-2xl w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-2 text-sm">
            We're here to help. Send us a message and we'll get back to you soon
          </p>
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mb-6 text-center text-sm px-4 py-2 rounded ${
              status.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
            role="alert"
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form
          ref={formRef}
          className="space-y-6"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md bg-gray-50 px-4 py-2.5 focus:outline-none focus:ring-2 transition text-sm ${
                  formErrors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md bg-gray-50 px-4 py-2.5 focus:outline-none focus:ring-2 transition text-sm ${
                  formErrors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {formErrors.email && (
                <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full border rounded-md bg-gray-50 px-4 py-2.5 focus:outline-none focus:ring-2 transition text-sm ${
                formErrors.subject
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {formErrors.subject && (
              <p className="mt-1 text-xs text-red-600">{formErrors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md bg-gray-50 px-4 py-2.5 focus:outline-none focus:ring-2 transition text-sm resize-none ${
                formErrors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {formErrors.message && (
              <p className="mt-1 text-xs text-red-600">{formErrors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2.5 text-sm rounded-md transition shadow-sm ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 4v4a8 8 0 01-8 8h4z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
