import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import WorkProcess from "./components/WorkProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="px-[15px] bg-[url('../../public/images/bg-nav-hero.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <div className="mx-[15px] bg-black rounded-[20px] pt-[40px] md:pt-[60px] xl:rounded-[40px] xl:pt-[90px] mt-[-61px] relative z-10">
        <Skills />
      </div>

      <div className="px-[15px] bg-[url('../../public/images/bg-work.png')] bg-cover bg-center bg-no-repeat mt-[-30px] z-2">
        <WorkExp />
      </div>

      <div className="mt-[40px]">
        <WorkProcess />
      </div>

      <div className="px-[15px] bg-[url('../../public/images/bg-contact.png')] bg-cover bg-center bg-no-repeat">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
