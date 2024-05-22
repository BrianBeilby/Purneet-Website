import React from 'react';
import SectionDivider from './section-divider';
import { useSectionInView } from '@/lib/hooks';
import { episodes } from '@/lib/data';
import { motion } from 'framer-motion';

function PodcastEpisodes() {
  const { ref } = useSectionInView("Podcasts", 0.5);

  return (
    <motion.section ref={ref} id="podcasts" className="bg-white py-16 scroll-mt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-black">
          Podcast Episodes
        </h2>
        {episodes.length === 0 ? (
          <p className="text-orange-800 text-lg">Episodes coming soon... Stay tuned! 😎</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">{episode.title}</h3>
                <p>{episode.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <SectionDivider />
    </motion.section>
  );
}

export default PodcastEpisodes;
