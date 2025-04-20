import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (

    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Background stars */}
      <StarsBackground
        starDensity={0.00015} // Adjust the density as per your needs
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Shooting stars effect */}
      <ShootingStars className="absolute inset-0 z-0 pointer-events-none" />

      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
      I&apos;m a Graphic Designer who loves{" "}
        <Highlight>creating visual experiences</Highlight> that inspire, engage,
        and leave a lasting impression
      </Paragraph>
      <WorkHistory />
    </div>
  );
}
