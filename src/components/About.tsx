import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mt-10 mx-4 sm:mt-28 sm:mx-auto max-w-[45rem] text-center bg-black leading-8 text-white text-lg sm:text-xl sm:mb-40 scroll-mt-5 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-2xl sm:text-3xl font-medium capitalize mb-4 sm:mb-8 mt-3 text-orange-500">
        Mission Statement
      </h2>
      <p className="mb-6 px-2 sm:px-0">
        Welcome to the{" "}
        <span className="font-bold text-orange-700">Dim Eye Show</span>
        . This platform is an open space for conversation and engagement 
        about topics that are often overlooked{" "}
        <span className="font-bold text-orange-700">
        as well as a platform to explore interesting topics and subjects.
        </span>{" "}
        Common themes in our content are: society and societal impacts, technology 
        & innovation, spirituality/religion/philosophy, and business.{" "}
        <span className="font-bold text-orange-700">
        Engagement with experts in their fields, 
        </span>
        including business owners and educators help us have thoughtful and 
        thought-provoking conversations with interesting questions and even 
        better answers. 
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0">
      <span className="mb-6 px-2 text-orange-700 sfont-bold sm:px-0">
      This podcast style of the show goes deep,</span>
      but we also aim to go wide. 
      Content such as street interviews, quick question videos, or random thought 
      videos help us in gaining and sharing more {" "}
        <span className="font-bold text-orange-700">insight on the human experience and 
        the variability that results from it.</span>
        Many things in today’s world contribute to making us feel isolated in our struggles and problems, 
        but that doesn't mean it's true. Many of these struggles and common questions are homogenous to the 
        human species and have been for thousands of years. {" "}
        <br/>
        <span className="font-bold text-orange-700">
        Simply put, they are what it means to be human.{" "}
        </span>
        Societal distractions prevent us from asking and answering these internal questions 
        we may have.{" "}
        <span className="font-bold text-orange-700">Our goal is to dim the noise around us {" "}</span> 
        and aim towards truth in order to live more 
        fulfilling lives with purpose and love. 
      </p>
    </motion.section>
  );
}

export default About;
