import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/home_page/Hero";
import PlatformIntro from "../components/home_page/PlatformIntro";
import RolePlayFeature from "../components/home_page/RolePlayFeature";
import ExamFeature from "../components/home_page/ExamFeature"; 
import StudyTools from "../components/home_page/StudyTools";
import CallToAction from "../components/home_page/CallToAction";
import Footer from "../components/home_page/Footer";

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