import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Inspiration from "./pages/Inspiration";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";


function App() {
  return (
    <>


      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </main>

      <Footer />
  </>
  );
}

export default App;