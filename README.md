# 🧾 Job Application Form

A modern **Job Application Form** built with **React**, showcasing advanced form handling, validation, file uploads, and state management.

---

## ✨ Features

- ✅ Form validation using **React Hook Form** & **Zod**
- 🧑 Collects personal information:
  - Full Name
  - Email
  - Birthdate
  - Gender
- 🛠️ Skill selection using radio buttons
- 📝 About section with textarea
- 📄 CV upload
- 🎥 Video upload
- 👁️ Preview mode before final submission
- 🔒 Inputs become read-only in preview mode
- 🔙 Back & Save workflow
- 📦 State management using **Redux Toolkit**
- 🍪 Data persistence using cookies
- 🎨 Reusable custom UI components
- 💅 Styled with Tailwind CSS

---

## 🧰 Technologies Used

- React
- React Hook Form
- Zod
- Redux Toolkit
- Tailwind CSS
- JavaScript (ES6+)

---

## 🚀 How It Works

1. User fills out the job application form
2. All fields are validated using Zod schema
3. Clicking **Continue** triggers validation and switches to preview mode
4. User can go **Back** to edit or **Save** to submit
5. Submitted data is stored in Redux and cookies

---

## 📂 Validation Rules

- All fields are required except “Work Remotely”
- CV and Video must be valid files
- Inline error messages are shown for better UX

---

## 📌 Project Purpose

This project demonstrates:
- Advanced form validation in React
- Handling file inputs with react-hook-form
- Preview-before-submit UX pattern
- Integration of Redux with form data

---

## 🛠️ Installation & Run

```bash
npm install
npm run dev
