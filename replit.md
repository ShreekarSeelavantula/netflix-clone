# Netflix Clone

## Overview
A Netflix clone built with React.js and Firebase. Features user authentication and movie/TV show browsing using The Movie Database (TMDB) API.

## Features
- User authentication (Sign Up/Sign In/Sign Out) with Firebase
- Browse movies and TV shows from TMDB API
- Netflix-style UI with:
  - Navigation bar with search and user menu
  - Hero banner with featured content
  - Multiple content rows (Popular, Blockbuster, Netflix Originals, etc.)
  - Responsive design

## Tech Stack
- **Frontend**: React.js with Vite
- **Authentication**: Firebase Auth (Email/Password)
- **API**: The Movie Database (TMDB)
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## Project Structure
```
src/
├── api/
│   └── tmdb.js          # TMDB API configuration
├── components/
│   ├── Navbar.jsx       # Navigation component
│   ├── Banner.jsx       # Hero banner component
│   └── Row.jsx          # Movie row component
├── pages/
│   ├── SignUp.jsx       # Sign up page
│   ├── SignIn.jsx       # Sign in page
│   └── Home.jsx         # Main home page
├── firebase.js          # Firebase configuration
└── App.jsx              # Main app with routing
```

## Environment Variables
Required secrets (configured in Replit Secrets):
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_TMDB_API_KEY`

## Routes
- `/` - Redirects to Sign In
- `/signin` - Sign In page
- `/signup` - Sign Up page
- `/home` - Main application (requires authentication)

## Recent Changes
- 2025-10-06: Initial project setup with React, Firebase, and TMDB integration
- Complete Netflix-style UI implementation
- Firebase authentication with Email/Password
- TMDB API integration for movie/TV data
