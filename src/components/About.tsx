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
      <Image
          src={Logo}
          alt="Podcast Logo"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="hidden h-32 w-32 rounded-full object-cover  shadow-xl hover:scale-110 active:scale-105 transition cursor-pointer"
        />
      <h2 className="text-3xl sm:text-3xl font-medium capitalize mb-10 sm:mb-8 mt-3 text-orange-500">
        Mission Statement
      </h2>
      <p className="mb-6 px-2 sm:px-0 ">
      Welcome to the Dim Eye Show. This platform is an open space for conversation and engagement about 
      topics that are often overlooked as well as a platform to explore interesting topics and subjects. 
      Common themes in our content are: society and societal impacts, technology & innovation, spirituality/religion/philosophy, 
      and business. Engagement with experts in their fields, including business owners and educators help us have thoughtful and 
      thought-provoking conversations with interesting questions and even better answers. This podcast style of the show goes deep, 
      but we also aim to go wide. Content such as street interviews, quick question videos, or random thought videos help us in gaining 
      and sharing more insight on the human experience and the variability that results from it. 
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0 text-center">
      Many things in today’s world contribute to making us feel isolated in our struggles and problems, 
      but that doesn&apos;t mean it&apos;s true. Many of these struggles and common questions are homogenous to the 
      human species and have been for thousands of years. Simply put, they are what it means to be human. 
      Societal influences distract us from asking and answering these internal questions we have.
      </p>

      <p className="mb-3 mt-6 px-2 sm:px-0 text-center">
      Many things in today&apos;s world contribute to making us feel isolated in our struggles and problems, but it doesn&apos;t have to be that way.
      </p>
    </motion.section>
  );
}

export default About;
