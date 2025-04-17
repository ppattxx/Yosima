"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/Mobile.png",
    "/images/Redis.png",
    "/images/Quiz.png",
    "/images/Scater.png",
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
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-80 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4 text-stone-400">
          Hey there, I&apos;m Dava Rajif - a passionate developer, visual thinker, and admirer of beautiful digital experiences. Welcome to my corner of the web!
        </Paragraph>
        <Paragraph className=" mt-4 text-stone-400">
          Since the beginning of my journey in tech, I&apos;ve been fascinated by how lines of code
          can evolve into intuitive, responsive, and elegant applications. Whether it&apos;s
          building mobile apps with Flutter or crafting pixel-perfect user interfaces with React
          and Tailwind CSS, I love turning ideas into real, impactful solutions that blend
          functionality with aesthetic charm.
        </Paragraph>

        <Paragraph className=" mt-4 text-stone-400">
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
        </Paragraph>
      </div>
    </div>
  );
}
