A sleek, fast search engine UI built with **React + Vite** and styled using **Tailwind CSS**. It fetches data from the **SerpAPI** to provide real-time results for web, images, news, and videos.

---

## 📸 Preview

![Screenshot](./screenshot.png) <!-- Replace with actual image if needed -->

---

## 🚀 Features

- 🌐 Web, Image, Video, and News search tabs  
- 🔄 Dark mode toggle  
- ⚡ Instant results via SerpAPI  
- 📱 Responsive design  
- 🧠 Search term state managed via React Context

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS  
- **State Management:** React Context API  
- **API:** [SerpAPI](https://serpapi.com)  
- **Deployment:** Netlify (with proxy support via `netlify.toml`)

---

## 🔧 Setup & Running Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/vite-search-app.git
   cd vite-search-app


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add `.env`**

   ```env
   VITE_KEY=your_serpapi_key_here
   ```

4. **Run locally with Netlify**

   ```bash
   netlify dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 🧪 API Integration

This app uses **SerpAPI** with a proxy setup:

* Vite proxy rewrites `/api` to `https://serpapi.com`
* API key is securely injected via `import.meta.env.VITE_KEY`

> Example request made to `/api/search?engine=google&q=coffee&api_key=...`

---

## 🌍 Live Demo

🔗 [Visit Live App](https://your-app-name.netlify.app)

---

## 🖼️ Screenshot Guide

To add your own screenshot:

1. Take a screenshot of the homepage
2. Save it as `screenshot.png` in the root of your project
3. Commit and push it to GitHub

---

## 📄 License

MIT License
© 2025 Vijay Joshi

