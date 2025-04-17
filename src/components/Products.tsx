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
      <div className="grid grid-cols-1 gap-4 w-full">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <HoverBorderGradient
              className="group flex flex-row items-start rounded-2xl transition duration-200 p-3 w-full"
              containerClassName="w-full border border-white/10 hover:bg-white/5 rounded-2xl"
              duration={0.5}
            >
              <Link
                href={product.slug ? `/projects/${product.slug}` : product.href}
                className="flex flex-row items-start gap-3 w-full"
              >
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                />
                <div className="flex flex-col justify-between w-full">
                  <Heading
                    as="h4"
                    className="font-bold text-sm sm:text-base text-stone-400"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-xs sm:text-sm mt-1 text-left">
                    {product.description}
                  </Paragraph>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-[10px] sm:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
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
