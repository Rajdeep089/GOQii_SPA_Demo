# Unsplash Gallery App (GOQii)

## Overview
This single-page application (SPA) showcases a gallery of images fetched from the Unsplash API. It features user authentication, allowing registered users to view and interact with the image gallery. The app is built with a focus on modern design, smooth animations, and responsive layout. 

## Owner
This project is done by Rajdeep Chaktaborty
mail: rajdeepchakaborty59@gmail.com
M: +91-9038073141


## Features
- User Registration and Login
- Image Gallery powered by Unsplash API
- Responsive design for various screen sizes
- State management with Redux Toolkit
- Smooth animations and transitions
- Custom water drop background animation
- Tailwind CSS for styling with custom utilities

## Tech Stack
- React (Create React App)
- Redux Toolkit for state management
- React Router for navigation
- Axios for API requests
- Unsplash API for image data
- Tailwind CSS for styling
- Custom CSS animations

## Project Structure

src/
│
├── components/
│   ├── Header.js
│   ├── Login.js
│   ├── Register.js
│   ├── Dashboard.js
│   ├── ProductList.js
│   ├── ProductDetails.js
│   ├── ProductCard.js
│   ├── SearchBar.js
│   └── waterdrop/
│       ├── WaterDrops.js
│       └── WaterDrops.module.css
│
├── redux/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       └── productSlice.js
│
├── App.js
├── index.js
└── index.css

## Setup and Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage Guide

### Registration
1. Navigate to the "/register" route
2. Fill in the registration form with your details
3. Submit the form to create your account
4. Upon successful registration, you'll be redirected to the dashboard

### Login
1. Go to the "/login" route
2. Enter your credentials in the login form
3. Submit the form to authenticate
4. After successful login, you'll be taken to the dashboard

### Dashboard
- View your profile information
- Access the main gallery and other features

### Image Gallery
- Browse through the image gallery on the homepage
- Click on images to view details
- Enjoy smooth transitions between pages and image loads

### Image Search Functionality
The app includes a powerful image search feature:
- Real-time search as you type
- Filters the product list based on the search term
- Smooth animations on input focus and hover
- Integrated with Redux for state management

## Styling and Animations

### Tailwind CSS
- Utilized for responsive design and custom utility classes
- Custom animations defined in `tailwind.config.js`

### Custom Animations
- Fade-in and slide-in animations for smooth page transitions
- Water drop background animation for visual appeal

### Responsive Design
- Adapts to various screen sizes for optimal viewing experience

## State Management
Redux Toolkit manages both authentication and product data states.

## API Integration
Integrates with Unsplash API for fetching image data.

## Custom Components
- `WaterDrops`: Creates an animated water drop background effect

## Implemented Features
- Image search functionality
- User authentication (registration and login)
- Responsive image gallery
- Custom animations and transitions

## Future Enhancements
- Add user favorites or collections
- Integrate infinite scrolling for the gallery
- Implement advanced filtering options (e.g., by color, orientation)
- Add social sharing capabilities

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

