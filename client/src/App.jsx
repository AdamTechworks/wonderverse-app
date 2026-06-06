import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bio from "./pages/Bio";
import Inspiration from "./pages/Inspiration";
import Contact from "./pages/Contact";


function App() {
  return (
    <>


      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
  </>
  );
}

export default App;