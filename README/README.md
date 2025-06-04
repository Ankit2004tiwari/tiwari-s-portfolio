# Ankit Tiwari - Developer Portfolio 🚀

Hi there! 👋 I'm Ankit Tiwari, a passionate and dedicated software engineer with a love for building real-world tech. This is my personal portfolio built using **React + TypeScript** powered by **Vite** — designed to showcase my projects, achievements, and the skills I bring to the table.

---

## 🔥 What’s Inside?

- ✨ Clean and modern UI
- 🌗 Dark/Light theme support
- 📬 Fully working **contact form** with EmailJS integration
- 📩 Auto-reply email system to acknowledge message receipt
- 📱 Responsive design across all devices
- 💼 Projects section powered by reusable components
- 🌐 Hosted version available (optional)

---

## 📬 Contact Form Features

- Sends message directly to my inbox using **EmailJS**
- Sends an **auto-reply email** to the user for a professional experience
- Includes **toast notifications** for success and error
- Form validation to prevent empty submissions
- EmailJS environment keys managed securely

---

## 🧰 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Icons**: Lucide React
- **Forms & Email**: EmailJS, React Hook Form (optional)
- **Build Tool**: Vite
- **Deploy**: GitHub Pages / Vercel / Netlify

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/ankittiwari-dev/my-portfolio.git
cd my-portfolio
````

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root with the following keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
```

Run the development server:

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Contact.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx
├── assets/
├── styles/
├── App.tsx
└── main.tsx
```

---

## 💡 Customization Tips

* Replace contact email and template IDs with your own in `.env`
* Update `Contact.tsx` with the fields you want to collect
* Adjust theme or layout with Tailwind utility classes
* Add more project entries in the `projects.ts` file

---

## 🙌 Special Thanks

Huge thanks to **EmailJS** for making email handling easy without a backend.


## 🔗 Connect with Me

* 🌐 Portfolio: [ankittiwari.dev](https://your-portfolio-link.com)
* 💼 LinkedIn: [linkedin.com/in/ankit-tiwari-a90881217](https://www.linkedin.com/in/ankit-tiwari-a90881217/)
* 🐙 GitHub: [@ankittiwari-dev](https://github.com/ankittiwari-dev)
