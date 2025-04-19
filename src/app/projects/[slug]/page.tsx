import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

// Import the effects components
import { ShootingStars } from "@/components/ui/shooting-stars"; 
import { StarsBackground } from "@/components/ui/stars-background"; 

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Yosima Karundeng",
      description:
        "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

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

      {/* Main content */}
      <Container>
        <SingleProduct product={product} />
      </Container>
    </div>
  );
}
