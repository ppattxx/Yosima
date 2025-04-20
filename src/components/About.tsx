"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/Yamaha1.png",
    "/images/Glowstep3.png",
    "/images/Glowstep1.png",
    "/images/Yamaha2.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={600}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-40 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4 text-stone-400">
        Welcome! This portfolio brings together a collection of visual work that reflects my growth as a creator.
        Each project tells a story — from content creation to graphic design built with passion, experimentation,
        and purpose. Let&apos;s dive into a creative journey shaped by exploration and visual thinking.
        </Paragraph>
        <Paragraph className=" mt-4 text-stone-400">
        My name is Yosima Karundeng, and I&apos;m a digital visual creator who enjoys blending storytelling with design.
        With a strong interest in both aesthetics and function, I love working on projects that connect ideas to
        audiences in engaging ways. I believe creativity is not just a skill it&apos;s a way to communicate meaningfully.
        </Paragraph>

        {/* <Paragraph className=" mt-4 text-stone-400">
        But development, to me, is more than just writing code it&apos;s about telling a story
        through interaction and flow. Every project is an opportunity to solve problems,
        connect with users, and bring thoughtful design to life. My background in
        working on various apps ranging from e-commerce platforms to educational
        and medical tools has shaped me into someone who values both precision and creativity.
        </Paragraph>
        <Paragraph className=" mt-4 text-stone-400">
        What truly sets me apart is my deep appreciation for design. I believe great design isn&apos;t
        just about how things look, but how they feel. That belief guides every product I touch ensuring
        it&apos;s not only smooth and functional, but visually pleasing and intuitive.
        </Paragraph>
        <Paragraph className=" mt-4 text-stone-400">
        Through this site, I&apos;m excited to share my projects, insights, and maybe a bit of inspiration.
        Whether you&apos;re a fellow developer, a designer, or someone simply curious about the intersection
        of code and creativity—I hope you find something here that sparks your interest.
        </Paragraph>
        <Paragraph className=" mt-4 text-stone-400">
        Let&apos;s create, explore, and push boundaries together. Thanks for stopping by this is just the beginning of our journey.
        </Paragraph> */}
      </div>
    </div>
  );
}
