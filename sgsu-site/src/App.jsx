import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programmes from "./components/Programmes";
import CareerAchievements from "./components/CareerAchievements";
import Gallery from "./components/Gallery";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import BestPractices from "./components/BestPractices";
import AiMission from "./components/AiMission";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programmes />
      <CareerAchievements />
      <Gallery />
      <BestPractices />
      <AiMission />
      <Faculty />
      <Footer />
    </>
  );
}

export default App;