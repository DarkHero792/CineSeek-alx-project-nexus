# 🎬 Movie Recommendation App

A responsive and interactive movie recommendation application built with **Next.js** and **TypeScript**, featuring dynamic routing, user authentication, and personalized movie favorites.

---

## 📌 Project Goals

The primary objectives of the movie recommendation app are:

- **Dynamic Routing**  
  Implement dynamic routing using Next.js for detailed movie pages.

- **User Personalization**  
  Enable users to save their favorite movies locally or via an API.

- **Interactive Dashboard**  
  Build a responsive and visually appealing movie dashboard for browsing and recommendations.

---

## 🛠 Technologies Used

- **Next.js** – Server-side rendering & routing
- **TypeScript** – Type safety and scalable development
- **Tailwind CSS** – Styling and responsive design
- **Styled Components** – Reusable, styled UI components
- **TMDb API / Custom API** – Fetching trending & recommended movies

---

## 🚀 Key Features

### 1. API Integration
- Fetch and display **trending** and **recommended** movies.
- Proper **error handling** and **loading states** during API calls.

### 2. Dynamic Routing
- Individual movie detail pages using Next.js dynamic routing.
- Optimized rendering for fast navigation.

### 3. Save Favorite Movies
- Save favorite movies **locally** (localStorage) or via backend API.
- Favorites section to manage and view saved movies.

### 4. Responsive & Interactive UI
- Dashboard with trending & recommended movies.
- Responsive layout for mobile, tablet, and desktop.
- Hover effects & animations for smooth user interaction.

### 5. Authentication
- **Sign Up** and **Login** pages integrated with API.
- JWT-based token storage for user sessions.

---

## 🛠 Implementation Process

### Git Commit Workflow
**Initial Setup**
- `feat: initialize Next.js project with TypeScript`
- `feat: integrate movie API for fetching data`

**Feature Development**
- `feat: implement detailed movie pages with dynamic routing`
- `feat: add functionality to save favorite movies`
- `feat: add user authentication (login/signup)`

**UI Enhancements**
- `style: design UI using Tailwind & Styled Components`

**Bug Fixes**
- `fix: resolve rendering issues on dynamic pages`
- `fix: adjust API endpoints for movie fetch`

**Documentation**
- `docs: add API setup and usage instructions`

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-recommendation-app.git

# Navigate into the project
cd movie-recommendation-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your API keys in .env.local

# Run development server
npm run dev
