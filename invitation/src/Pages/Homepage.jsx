import PageLayout from "../Layout/PageLayout";
import HeroImageSection from "../Components/HeroImageSection";
import SideBar from "../Components/SideBar";
import About from "../Components/About";
import Audience from "../Components/Audience";
import EventFlow from "../Components/EventFlow";
import Values from "../Components/Values";
import Contact from "../Components/Contact";

const Homepage = () => {
  return (
    <PageLayout>
      <div>
        <HeroImageSection />
        <SideBar />
      </div>
      <About />
      <Audience />
      <EventFlow />
      <Values />
      <Contact />
    </PageLayout>
  );
};

export default Homepage;
