import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/signup/SignupPage";
import AboutPage from "./landingPage/about/AboutPage";
import ProductPage from "./landingPage/products/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFound from "./landingPage/NotFound";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer position="top-right" autoClose={3000} />
    <Footer />
  </BrowserRouter>
);
