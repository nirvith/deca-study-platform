import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventFinder from "../components/EventFinder";
import PreparationTools from "../components/PreparationTools";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventFinder />
        <PreparationTools />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Home;