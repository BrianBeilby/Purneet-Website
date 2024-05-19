import { motion } from 'framer-motion'
import React from 'react'
import { FaSpotify, FaYoutube } from 'react-icons/fa'
import { PiApplePodcastsLogoLight } from 'react-icons/pi'
import { SiItunes } from 'react-icons/si'

function Front_Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">

    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
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
      <div className="flex space-x-8">
        <a title="Spotify" href="#" className="text-5xl text-spotify-green hover:text-green-700 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">
          <FaSpotify />
        </a>
        <a title="Youtube" href="#" className="text-5xl text-youtube-red hover:text-red-800 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">
          <FaYoutube />
        </a>
        <a title="Itunes" href="#" className="text-5xl text-purple-300 hover:text-purple-400 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">
          <SiItunes />
        </a>
        <a title="Apple Podcasts" href="#" className="text-5xl text-purple-600 hover:text-purple-700 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">
          <PiApplePodcastsLogoLight />
        </a>
      </div>
    </motion.div>
  </div>
  )
}

export default Front_Home;
