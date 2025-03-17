import styles from "./App.module.css";
import About from "./Components/About";
import Audience from "./Components/Audience";
import Contact from "./Components/Contact";
import EventFlow from "./Components/EventFlow";
import HeroImageSection from "./Components/HeroImageSection";
import RegisterModal from "./Components/RegisterModal";
import SideBar from "./Components/SideBar";
import Values from "./Components/Values";

function App() {
  return (
    <>
      <main className={styles.app_main}>
        <div>
          <HeroImageSection />
          <SideBar />
          <RegisterModal />
        </div>
        <About />
        <Audience />
        <EventFlow />
        <Values />
        <Contact />
      </main>
    </>
  );
}

export default App;
