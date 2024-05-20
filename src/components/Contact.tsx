"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
//import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
//import toast from "react-hot-toast";
import { FaArrowCircleDown } from "react-icons/fa";

const arrowVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop", // Ensure this is a specific string literal, not just 'string'
    },
  },
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-32 w-[min(100%,38rem)] text-center scroll-mt-28 flex flex-col justify-center items-center mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80" style={{ textAlign: "center" }}>
        Please contact me directly at{" "}
        <a className="text-orange-500 font-bold" href="mailto:dimeyeshow@gmail.com">
          dimeyeshow@gmail.com
        </a>{" "} <br></br>
        or through this form.
      </p>

      <motion.div
        variants={arrowVariants}
        animate="animate"
        style={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
      >
        <div className="mt-6 flex justify-center mb-6 w-14 h-14 text-3xl cursor-pointer z-10 text-orange-400 ">
          <FaArrowCircleDown />
        </div>
      </motion.div>

      <form className="mt-10 flex flex-col dark:text-black w-full max-w-lg">
        <input
          className="h-14 px-4 rounded-lg border-2 border-orange-400 bg-white bg-opacity-80 focus:bg-opacity-100 hover:bg-white focus:border-4 focus:border-orange-400 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-2 border-orange-400 p-4 bg-white bg-opacity-80 focus:bg-opacity-100 hover:bg-white focus:border-4 focus:border-orange-400 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>



    </motion.section>
  );
}
