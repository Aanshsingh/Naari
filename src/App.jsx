import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/home";
import About_Us from "./page/about-us";
import FAQ from "./page/F.A.Q";
import CONTACT_us from "./page/CONTACTUS/Index";
import Footer from "./components/footer/index.jsx";
function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<About_Us />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/CONTACT_us" element={<CONTACT_us />} />  
      </Routes>
          <Footer />
    </BrowserRouter>

  );
}

export default App;  