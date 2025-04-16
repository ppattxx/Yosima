"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const Products = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 w-full">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <HoverBorderGradient
              className="group flex flex-col bg-transparent md:flex-row space-y-4 md:space-y-0 md:space-x-4 rounded-xl transition duration-200 pt-2 w-full"
              containerClassName="w-full bg-transparent border border-white/10 bg-transparent hover:bg-transparent"
              duration={0.5}
            >
              <Link
                href={product.slug ? `/projects/${product.slug}` : product.href}
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 w-full"
              >
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover min-w-[150px] max-w-[150px]"
                />
                <div className="flex flex-col justify-between w-full relative z-10">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-stone-400 md:text-lg lg:text-lg"
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm mt-2 text-left">
                      {product.description}
                    </Paragraph>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </HoverBorderGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
