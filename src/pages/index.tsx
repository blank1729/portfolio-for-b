import Header from "@/components/Header";
import HeroSection from "@/components/Home/HeroSection";
import ContactSection from "@/components/Home/Contact";
import EducationSection from "@/components/Home/Education";
import SkillsSection from "@/components/Home/Skills";
import ProjectsSection from "@/components/Home/Projects";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="container mt-10">
        <h1 className="text-2xl">Hello 👋</h1>
        <article className="text-lg my-6 space-y-2">
          <p>
            I am Bharath Batturi, I am a Senior Researcher at{" "}
            <a href="https://murf.ai" className="">
              murf.ai
            </a>
            . I excel at so and so things.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            maxime officiis deserunt necessitatibus amet, distinctio
            reprehenderit accusantium earum minus culpa voluptas quia tempora
            sed facilis odit nihil fuga est ratione dolore! Quos deleniti neque
            unde vel labore, suscipit consequuntur amet repudiandae pariatur
            veritatis harum adipisci asperiores.
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
