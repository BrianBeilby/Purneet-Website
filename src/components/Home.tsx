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
      gradientBackgroundStart="rgb(255, 149, 0)"
      gradientBackgroundEnd="rgb(201, 131, 33)"
      size="90%"
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
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-24 z-50"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Dim Eye Show
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Please stop what you&apos;re doing right now and watch this podcast!
        </div>
        <div className="flex space-x-8">
          <a
            title="Spotify"
            href="https://open.spotify.com/show/1sW6Gok1Dj4gpkO5S3ozI5"
            target="_blank"
            className="text-5xl text-spotify-green hover:text-green-700 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaSpotify />
          </a>
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCJfTG1THOabQ6OXQgzV2hdg"
            target="_blank"
            className="text-5xl text-youtube-red hover:text-red-800 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaYoutube />
          </a>
          <a
            title="Tiktok"
            href="https://www.tiktok.com/@dimeyeshow?lang=en"
            target="_blank"
            className="text-5xl text-grey-100 hover:text-grey-200 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaTiktok />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/dimeyeshow/"
            target="_blank"
            className="text-5xl text-pink-500 hover:text-pink-600 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            title="Twitch"
            href="https://www.twitch.tv/dimeyeshow"
            target="_blank"
            className="text-5xl text-purple-500 hover:text-purple-600 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          >
            <FaTwitch />
          </a>
        </div>
        <iframe
          className="rounded-xl mt-20"
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
