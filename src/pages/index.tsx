import Header from "@/components/Header";
import React from "react";
import './globals.scss'


const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 md:px-[5%] lg:px-[15%] mt-4">
        <h1>My portfolio</h1>
        <section>hero section</section>
        <section>Projects section</section>
        <section>Skills section</section>
        <section>Education section</section>
        <section>Contact section</section>
      </main>
    </>
  );
};

export default Home;
