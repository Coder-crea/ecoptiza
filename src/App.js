import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
