import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";  // Pastikan path sesuai
import { StarsBackground } from "@/components/ui/stars-background";  // Pastikan path sesuai

export default function Home() {
  return (
<div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
  {/* Background stars */}
  <StarsBackground
    starDensity={0.00015} // Sesuaikan dengan keinginan Anda
    allStarsTwinkle={true}
    twinkleProbability={0.7}
    minTwinkleSpeed={0.5}
    maxTwinkleSpeed={1}
    className="absolute inset-0 z-0 pointer-events-none" // Tambahkan z-index rendah dan pointer-events-none
  />

  {/* Shooting stars effect */}
  <ShootingStars
    className="absolute inset-0 z-0 pointer-events-none" // Tambahkan z-index rendah dan pointer-events-none
  />

  <Container>
    <span className="text-4xl">👋</span>
    <Heading className="font-black text-stone-400">Hello there! I&apos;m Yosi</Heading>
    <Paragraph className="max-w-xl mt-4 text-stone-400">
    Welcome to my portfolio a creative platform dedicated to
    showcasing design <Highlight>excellence and impactful</Highlight> content creation. 
    As a professional designer and content creator, I am committed 
    to delivering thoughtful visual solutions and engaging digital experiences tailored to meet diverse needs.{" "}
    </Paragraph>
    <Paragraph className="max-w-xl mt-4 text-stone-400">
    This website serves as both a portfolio and a gateway to my creative services. 
    Whether you&apos;re a brand seeking strong visual identity, a business in need of content strategy, 
    or simply looking for creative collaboration, I invite you to explore my work and discover 
    how we can bring ideas to life together.
    </Paragraph>
    <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4 text-stone-400">
      What I&apos;ve been working on
    </Heading>
    <Products />
    <TechStack />
  </Container>
</div>
  );
}
