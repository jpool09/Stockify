# 📦 Stockify – Smart Inventory for Fast Food Businesses, Powered by AI

**Stockify** is a modern inventory management web app designed for fast food restaurants and food businesses. It helps you track stock, view key metrics, and make smarter decisions — all with the power of AI.

---

## 🚀 Features

- 📦 Product & stock management
- 📊 Real-time usage metrics and trends
- 🧠 AI-powered daily summaries and insights
- 🛒 Smart restocking suggestions
- 👥 Multi-user support (Admins, Employees)
- 🔐 Secure authentication
- 🌐 SaaS-ready architecture

---

## ⚙️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: [tRPC](https://trpc.io/) + [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (hosted on [Railway](https://railway.app))
- **Auth**: Auth.js (formerly NextAuth)
- **AI**: OpenAI API
- **Deployment**: Vercel + Railway

---

## 📂 Project Structure

/apps /web → Next.js frontend /api → Backend API (tRPC routers)

/prisma → Prisma schema & migrations /packages /ui → Shared components /utils → Shared logic

---

## 🧪 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/tuusuario/stockify.git
   cd stockify

2. **Install dependencies**
    ```bash
    npm install

3. **Set up your .env file Copy .env.example to .env and fill in your DB + Auth + OpenAI keys:**
    ```bash
    DATABASE_URL="your_postgres_url"
    NEXTAUTH_SECRET="your_secret"
    OPENAI_API_KEY="your_openai_api_key"

4. **Push schema to DB**
    ```bash
    npx prisma db push

5. **Run the dev server**
    ```bash
    npm run dev

---

## 🧠 AI Features (Coming soon!)

- Automated daily summaries of inventory movement
- Forecasted usage per product
- Smart restock generator

---

## 📌 Roadmap

- [x] Inventory system MVP
- [ ] User roles (Admin, Employee)
- [ ] Metrics dashboard
- [ ] AI-generated insights
- [ ] AI-powered reorder assistant
- [ ] Mobile-friendly version

---

## 🔥 Inspiration

Stockify is inspired by the build fast, ship faster mentality of indie hackers like Pieter Levels, and powered by modern AI tools to empower small food businesses.

---

## 🧑‍💻 Made with ❤️ by Jean Pool Cruz
