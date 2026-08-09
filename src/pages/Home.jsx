import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlatformIntro from "../components/PlatformIntro";
import RolePlayFeature from "../components/RolePlayFeature";
import ExamFeature from "../components/ExamFeature"; 
import StudyTools from "../components/StudyTools";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformIntro />
        <RolePlayFeature />
        <ExamFeature />
        <StudyTools />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default Home;