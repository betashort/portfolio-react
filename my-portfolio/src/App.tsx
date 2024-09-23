import React from "react";
import "./App.css";
import Header from "./shared/component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/component/Footer";
import ArtGallary from "./pages/ArtGallary";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full">
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/art-gallary" element={<ArtGallary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
