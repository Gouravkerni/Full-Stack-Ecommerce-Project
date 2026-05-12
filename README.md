# Full Stack E-commerce
> A full-stack MERN e-commerce application featuring secure authentication, cart management, and Razorpay integration.

## 🔗 Demo
<!-- Add live link or demo video here -->
<!-- Add screenshots here -->

## 📋 Description
This project is a comprehensive full-stack e-commerce platform built on the MERN stack. It provides users with a seamless shopping experience, complete with intuitive product browsing, secure cart management, and robust checkout capabilities powered by Razorpay. Designed for modern web standards, it serves as a robust application aiming for high performance and secure transactions.

## ⚙️ Tech Stack
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

## ✨ Features
- Secure user authentication (Register/Login) utilizing JSON Web Tokens (JWT).
- Comprehensive product browsing catalog with detailed individual product views.
- Dynamic shopping cart system with options to add, remove, and adjust item quantities.
- Secure, integrated checkout and payment processing via the Razorpay gateway.
- User profile management and detailed order history tracking.
- Dedicated address management for streamlined checkout experiences.

## 📁 Project Structure
- `API/` - The Express backend containing MongoDB models, controllers, and routing logic.
- `Client/` - The Vite + React frontend application serving the user interface and components.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB (Local or Atlas cluster)

### Installation
1. Clone the repository
```bash
git clone https://github.com/kumarlalit79/Full-Stack-E-commerce.git
```

2. Setup the Backend API
```bash
cd API
npm install
npm start
```

3. Setup the Frontend Client
```bash
cd Client
npm install
npm run dev
```

### Environment Variables
Setup a `.env` file in the `API/` directory with the following variables:

| Variable | Description | Example |
|---|---|---|
| `MONGODB_URI` | The connection string for the MongoDB database | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `RAZORPAY_KEY_ID` | Your Razorpay API Key ID for integration | `rzp_test_123456789` |
| `RAZORPAY_KEY_SECRET` | Your Razorpay API Key Secret for security | `secret_123456789abcdef` |

## 🔌 API Endpoints
| Method | Route | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Authenticate an existing user |
| GET | `/api/user/all` | Retrieve a list of all users |
| GET | `/api/user/profile` | Retrieve the authenticated user's profile |
| POST | `/api/product/add` | Add a new product to the catalog |
| GET | `/api/product/all` | Fetch all available products |
| GET | `/api/product/:id` | Fetch details for a specific product by ID |
| PUT | `/api/product/:id` | Update details of an existing product |
| DELETE | `/api/product/:id` | Delete a specific product from the catalog |
| POST | `/api/cart/add` | Add an item to the user's cart |
| GET | `/api/cart/user` | Retrieve the authenticated user's cart items |
| DELETE | `/api/cart/remove/:productId` | Remove a specific item from the cart |
| DELETE | `/api/cart/clear` | Clear all items from the user's cart |
| POST | `/api/cart/--qty` | Decrease the quantity of a cart item |
| POST | `/api/address/add` | Add a new shipping address for the user |
| GET | `/api/address/get` | Retrieve addresses associated with the user |
| POST | `/api/payment/checkout` | Create a new Razorpay order checkout session |
| POST | `/api/payment/verify-payment` | Verify a completed payment and save the order |
| GET | `/api/payment/userorder` | Retrieve all orders made by the authenticated user |
| GET | `/api/payment/orders` | Retrieve all system orders (Admin) |

## 👤 Author
Lalit Kumar — GitHub: kumarlalit79
