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
import Front_Home from "@/components/Home";
import Podcast_Episodes from "@/components/Podcast_Episodes";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <div>
        <Navbar />
        <Front_Home />
        <Podcast_Episodes/>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
