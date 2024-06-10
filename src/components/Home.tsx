import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import {
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import { BackgroundGradientAnimation } from "./GradientAnimationBackground";

function Front_Home() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart = "rgb(255, 102, 0)" // A shade of orange
      gradientBackgroundEnd = "rgb(255, 165, 0)" // Another shade of orange
      firstColor = "255, 140, 0" // Dark orange
      secondColor = "255, 200, 0" // Light orange
      thirdColor = "255, 110, 0" // Another shade of orange
      fourthColor = "255, 69, 0" // Red-orange
      fifthColor = "255, 99, 71" // Light red-orange
      pointerColor = "255, 160, 122" // Light salmon
      size="80%"
      interactive={false}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute flex inset-0 flex-col gap-4 items-center justify-center text-center px-4 mt-24 z-50"
      >
        <div className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Dim Eye Show
        </div>
        <div className="font-extralight text-xl md:text-4xl text-neutral-200 py-4">
          Please stop what you&apos;re doing right now and watch this podcast!
        </div>
        <div className="flex flex-wrap space-x-4 md:space-x-8 justify-center">
          <a
            title="Spotify"
            href="https://open.spotify.com/show/1sW6Gok1Dj4gpkO5S3ozI5"
            target="_blank"
            className="text-4xl md:text-5xl text-spotify-green hover:text-green-700 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaSpotify />
          </a>
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCJfTG1THOabQ6OXQgzV2hdg"
            target="_blank"
            className="text-4xl md:text-5xl text-youtube-red hover:text-red-800 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaYoutube />
          </a>
          <a
            title="Tiktok"
            href="https://www.tiktok.com/@dimeyeshow?lang=en"
            target="_blank"
            className="text-4xl md:text-5xl text-gray-200 hover:text-gray-300 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaTiktok />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/dimeyeshow/"
            target="_blank"
            className="text-4xl md:text-5xl text-pink-500 hover:text-pink-600 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            title="Twitch"
            href="https://www.twitch.tv/dimeyeshow"
            target="_blank"
            className="text-4xl md:text-5xl text-purple-500 hover:text-purple-600 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaTwitch />
          </a>
        </div>
        <iframe
          className="rounded-xl mt-10 md:mt-20 w-full md:w-3/4 lg:w-1/2 h-48 md:h-72"
          src="https://open.spotify.com/embed/episode/1HA82v3w8mWI79Imajzrdm/video?utm_source=generator"
          width="700"
          height="330"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>
    </BackgroundGradientAnimation>
  );
}

export default Front_Home;
