A fast search engine UI built with **React + Vite** and styled using **Tailwind CSS**. It fetches data from the **SerpAPI** to provide real-time results for web, images, news, and videos.

---
##  Live Demo Website Link 

🔗 [Visit Live App](https://joshidoggle.netlify.app)

---

## Preview
![image](https://github.com/user-attachments/assets/1b2a1a24-e3ef-4375-a12c-6bf314e56506)


---

## Features

-  Web, Image, Video, and News search tabs  
- Dark mode toggle  
- Instant results via SerpAPI  
- Responsive design  
- Search term state managed via React Context

---

##  Tech Stack

- **Frontend:** React, Vite, Tailwind CSS  
- **State Management:** React Context API  
- **API:** [SerpAPI](https://serpapi.com)  
- **Deployment:** Netlify (with proxy support via `netlify.toml`)

---

##  Setup & Running Locally

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

##  API Integration

This app uses **SerpAPI** with a proxy setup:

* API key is securely injected via `import.meta.env.VITE_API_KEY`

> Example request made to `/api/search?engine=google&q=coffee&api_key=...`

---




## 📄 License

MIT License
© 2025 Vijay Joshi

