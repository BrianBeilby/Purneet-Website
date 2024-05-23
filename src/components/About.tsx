import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';

function About() {
    const { ref } = useSectionInView("About", 0.5);

    return (
        <motion.section
            ref={ref}
            id='about'
            className='mt-28 mx-auto max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-5 min-h-screen flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <h2 className="text-3xl font-medium capitalize mb-8">
                About me
            </h2>
            <p className="mb-3">
            Welcome to the Dim Eye Show, a platform created by curious people for curious people. {" "}
                <span className="font-medium"> We dedicate ourselves to the expansion of knowledge,  </span>, 
                wisdom, and truth for ourselves and others. Our plan is to provide a range of content,{" "}
                <span className="font-medium">
                from podcasts with experts to quick street interviews, 
                </span>
                to videos of us just talking. We enjoy thinking and discussing topics such as science & innovation, religion, history, spirituality, belief, the 
                inner workings of institutions and society, human nature, and much more. We wish to learn all we can about whatever we desire, and we hope to gain 
                the privilege{" "}
                <span className="font-medium">to speak with beautiful people with beautiful minds. </span>.
            </p>

            <p className="mb-3">
                <span className="italic">The unfortunate reality of the modern world is constant distractions that are provided to us, </span>, 
                which prevent us from doing what we do best: think. We are in a world-wide war for attention. {" "}
                <span className="font-medium"> We are constantly distracted with new experiences, new worries, new fears, and things that occupy our mindscape. </span>
                <span className="font-medium"> To contribute to a better world, humans must dim the noise around them and open their eyes to truth. Truth is not an answer. </span>
                The pursuit of truth is a path that one embodies in their life to become a more compassionate and aware human. This pursuit provides knowledge, 
                and subsequently, wisdom.<span className="italic">It is to realize that the significant actor in this world is you. </span>  You have the potential for great things. You can create change.
                <span className="font-medium">  We hope to inspire others to think for themselves and to not be afraid to speak out in the world for something that they strongly believe in.</span> 
            </p>
        </motion.section>
    );
}

export default About;
