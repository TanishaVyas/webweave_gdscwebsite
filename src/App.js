import GDSCNavbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Hero from "./Components/Hero";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#F3F0FF" }}>
        <GDSCNavbar />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
