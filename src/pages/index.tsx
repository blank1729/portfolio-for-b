import Header from "@/components/Header";
import HeroSection from "@/components/Home/HeroSection";
import ContactSection from "@/components/Home/Contact";
import EducationSection from "@/components/Home/Education";
import SkillsSection from "@/components/Home/Skills";
import ProjectsSection from "@/components/Home/Projects";

const Home = () => {
  return (
    <main className="md:px-[5%] lg:px-[15%]">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Home;
