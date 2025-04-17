import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";  // Pastikan path sesuai
import { StarsBackground } from "@/components/ui/stars-background";  // Pastikan path sesuai
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dava Rajif",
  description:
    "John Doe is a developer, writer, and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
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
        <span className="text-4xl">⚡</span>
        <Heading className="font-black mb-10 text-stone-400">
          What I&apos;ve been working on
        </Heading>
        {/* Products and TechStack */}
        <Products />
        <TechStack />
      </Container>
    </div>
  );
}
