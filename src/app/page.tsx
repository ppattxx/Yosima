import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Dava</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a front-end developer passionate about{" "}
        <Highlight>building mobile and web apps</Highlight> bring real impact.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;ve a built various projects using Flutter, Java, and modern web stacks like React and Tailwind.{" "}
        I love crafting clean, responsive UI and collaborating in agile teams to create meaningful digital products.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
