# 📬 React Contact Form with EmailJS

A responsive, modern, and user-friendly contact form built using **React** and **Tailwind CSS**, with email functionality powered by **EmailJS**. This project provides real-time validation, loading indicators, and error handling — all without requiring a backend server. Perfect for personal portfolios, landing pages, or small business websites.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-API-orange.svg)](https://www.emailjs.com/)

---

## 🌟 Overview

This project implements a **fully functional contact form** that sends emails directly from the client-side using **EmailJS**. With built-in validation, responsive design, and visual feedback during submission, it ensures a smooth and professional user experience.  

Designed for developers who need a **secure and easy-to-use contact form** without the hassle of managing backend infrastructure.

---

## 🔑 Key Features

### 🛡️ Form Functionality
- **Email Sending**: Powered by EmailJS (no backend required)
- **Validation**: Real-time client-side validation
- **Error Handling**: Inline error messages for invalid fields
- **Feedback States**: Loading indicator and success/error messages

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Styling**: Utility-first design with Tailwind CSS
- **Accessible**: ARIA labels and keyboard-friendly navigation
- **Clean UI**: Simple, intuitive, and customizable form components

### 🏗️ Technical Excellence
- **React 18**: Modern hooks-based functional components
- **Vite**: Lightning-fast development and optimized builds
- **Environment Config**: Easy setup with `.env` variables
- **Reusable Components**: Modular and maintainable codebase

---

## 🏗️ Project Structure

```
react-contact-form/
├── src/
│   ├── components/          # UI components
│   │   └── ContactForm.jsx  # Main contact form component
│   ├── assets/              # Static assets (optional)
│   ├── App.jsx              # Root app component
│   ├── index.css            # Tailwind CSS styles
│   └── main.jsx             # Application entry point
├── .env.example             # Example environment variables
├── package.json             # Dependencies & scripts
└── README.md                # Documentation
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **npm** 8+
- **EmailJS Account** ([Sign up here](https://www.emailjs.com/))

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/react-contact-form.git
cd react-contact-form
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS
1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Set up a new **Email Service** and **Email Template**.
3. Copy your:
   - **Service ID**
   - **Template ID**
   - **Public Key**

### 4. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Run Development Server
```bash
npm run dev
```

✅ App available at: `http://localhost:3000`

---

## 💻 Usage Flow

1. **Open App** → Visit `http://localhost:3000`
2. **Fill Form** → Enter name, email, and message
3. **Validation** → Inline feedback if inputs are invalid
4. **Send Email** → Message sent via EmailJS API
5. **Feedback** → Loading state + success/error notification

---

## 📷 Screenshots (Optional)

*(Add screenshots or GIFs here to showcase the form UI and submission flow)*

---

## 🐛 Troubleshooting

**Email not sending?**
- Verify your EmailJS credentials (Service ID, Template ID, Public Key).
- Ensure `.env` variables are prefixed with `VITE_` (Vite requirement).
- Check browser console for API errors.

**Validation not working?**
- Make sure all input fields have proper `name` attributes.
- Confirm error-handling logic is intact in `ContactForm.jsx`.

---

## 🤝 Contributing

We welcome contributions!  
1. **Fork** the repo  
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`  
3. **Commit** changes: `git commit -m "Add new feature"`  
4. **Push** to your branch: `git push origin feature/amazing-feature`  
5. **Open a PR** 🎉  

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

**✨ Built with React, Tailwind CSS, and EmailJS — fast, reliable, and serverless contact form integration.**

