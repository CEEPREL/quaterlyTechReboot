import styles from "./App.module.css";
import About from "./Components/About";
import Audience from "./Components/Audience";
import EventFlow from "./Components/EventFlow";
import HeroImageSection from "./Components/HeroImageSection";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <main className={styles.app_main}>
        <div>
          <HeroImageSection />
          <SideBar />
        </div>
        <About />
        <Audience />
        <EventFlow />
      </main>
    </>
  );
}

export default App;
