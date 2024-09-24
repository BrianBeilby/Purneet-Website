import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Logo from "../../public/Final_Logo.png";


function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mt-10 mx-4 sm:mt-28 sm:mx-auto max-w-[42rem] text-center bg-black leading-8 text-white text-md sm:text-lg sm:mb-40 scroll-mt-5 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
    
      <h2 className="text-3xl sm:text-3xl font-medium capitalize mb-10 sm:mb-8 mt-3 text-orange-500">
        Mission Statement
      </h2>
      <p className="mb-6 px-2 sm:px-0 ">
        Welcome to the Dim Eye Show.
        This is a platform for exploration. For adventurers, for learners and wisdom-seekers, and for lovers. We share your passion and love for life and all it has to offer us. 
        We share your concern for humanity and society. We share your desire to live a rich, intentional life. 
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0 text-center">
        We hope to give you interesting  thoughts to ponder on, new ideas to branch off of, and to kickstart new emotions to realize.
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0 text-center">
        It feels as if the 21st century is the century of isolation. People feel isolated in their struggles and problems, but we are here to say that isn&apos;t 
        true! Many of these struggles and questions we all have are homogenous to the human species. They have been for thousands of years, yet the difference now 
        is that we are confused on who and what to believe, even ourselves. Societal influences distract us from asking and answering these internal questions we have.       
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0 text-center">
        &quot;Waking up to who you are, requires letting go of who you imagine yourself to be&quot; - Alan Watts
      </p>
    </motion.section>
  );
}

export default About;
