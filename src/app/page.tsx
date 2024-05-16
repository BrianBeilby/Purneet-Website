"use client";
import React from "react";
import {
  FaPhone,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaCommentDots,
  FaBars,
  FaArrowRight,
  FaSpotify,
} from "react-icons/fa";
import { SiItunes } from "react-icons/si";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/AuroraBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="top">
      <div>
        <Navbar />
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Purneet Podcast
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Please stop what you&apos;re doing right now and watch this
              podcast!
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Learn More
            </button>
          </motion.div>
        </AuroraBackground>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">
              Podcast Episodes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              {/* Add more episodes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
