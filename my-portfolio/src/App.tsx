import React from "react";
import "./App.css";
import Header from "./shared/component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/component/Footer";
import ArtGallary from "./pages/ArtGallary";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full h-svh">
          <Routes>
            <Route path="/portfolio-react" element={<Profile/>}/>
            <Route path="/portfolio-react/profile" element={<Profile />} />
            <Route path="/portfolio-react/art-gallary" element={<ArtGallary />} />
            <Route path="/portfolio-react/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
