import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mt-28 mx-auto max-w-[45rem] text-center leading-8 text-white text-xl sm:mb-40 scroll-mt-5 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 mt-3 text-orange-500">
        About me
      </h2>
      <p className="mb-6">
        Welcome to the{" "}
        <span className="font-bold text-orange-700">Dim Eye Show</span>, a
        platform created by curious people for curious people. We dedicate
        ourselves to the{" "}
        <span className="font-bold text-orange-700">
          expansion of knowledge, wisdom, and truth
        </span>{" "}
        for ourselves and others. Our plan is to provide a range of content,
        from podcasts with experts to quick street interviews, to videos of us
        just talking. We enjoy thinking and discussing topics such as{" "}
        <span className="font-bold text-orange-700">
          science & innovation, religion, history, spirituality, belief, the
          inner workings of institutions and society, human nature
        </span>
        , and much more. We wish to learn all we can about whatever we desire,
        and we hope to gain the privilege to speak with beautiful people with
        beautiful minds.
      </p>

      <p className="mb-3 mt-6">
        The unfortunate reality of the modern world is constant distractions
        that are provided to us, which prevent us from doing what we do best:{" "}
        <span className="font-bold text-orange-700">think</span>. We are in a
        world-wide war for attention. We are constantly distracted with new
        experiences, new worries, new fears, and new things that occupy our
        mindscape. To contribute to a better world, humans must{" "}
        <span className="font-bold text-orange-700">
          dim the noise around them and open their eyes to truth
        </span>
        . Truth is not an answer. The pursuit of truth is a path that one
        embodies in their life to become a more compassionate and aware human.
        This pursuit provides knowledge, and subsequently, wisdom. It is to
        realize that the significant actor in this world is{" "}
        <span className="font-bold text-orange-700">you</span>. You have the
        potential for great things. You can create change. We hope to inspire
        others to think for themselves and to not be afraid to speak out in the
        world for something that they strongly believe in.
      </p>
    </motion.section>
  );
}

export default About;
