import React from "react";
import SectionDivider from "./section-divider";
import { useSectionInView } from "@/lib/hooks";
import { episodes } from "@/lib/data";
import { motion } from "framer-motion";

function PodcastEpisodes() {
  const { ref } = useSectionInView("Podcasts", 0.5);

  return (
    <motion.section
      ref={ref}
      id="podcasts"
      className="bg-white py-16 scroll-mt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-black">Podcast Episodes</h2>
        <h3 className="text-lg mt-2 mb-8 text-black">
          And many more to come... Stay tuned!
        </h3>
        {episodes.length === 0 ? (
          <p className="text-orange-800 text-lg">
            Episodes coming soon... Stay tuned! 😎
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <a
                key={episode.id}
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-900 p-4 rounded focus:scale-110 hover:scale-110 transition cursor-pointer hover:bg-orange-500 hover:text-black">
                  <h3 className="text-xl font-bold text-orange-400 group-hover:text-black">
                    {episode.title}
                  </h3>
                  <p>{episode.description}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <SectionDivider />
    </motion.section>
  );
}

export default PodcastEpisodes;
