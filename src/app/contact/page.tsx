"use client";

import StarsMotion from "@/components/Stars";
import { useColor } from "@/context/Colors";
import { useMotionTemplate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andriawan/",
    urlImage: "/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/andriawan/",
    urlImage: "/ig.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/andriawan",
    urlImage: "/x.svg",
  },
];

export default function Contact() {
  const color = useColor();
  const border = useMotionTemplate`1px solid ${color}`;
  const textShadow = useMotionTemplate`0px 5px 0px ${color}`;

  return (
    <motion.main className="relative pt-10 md:pt-28 min-h-screen flex flex-col items-center justify-center md:justify-start 2xl:justify-center 2xl:pb-24 overflow-hidden pb-28 md:pb-0 bg-gray-950 text-gray-200">
      <h1 className="text-5xl md:text-7xl w-11/12 md:w-8/12 font-semibold text-center">
        <motion.span style={{textShadow}}>Let's Connect</motion.span>
        <br />
        and Build the Future Together
      </h1>
      <motion.button
        className="px-7 py-1 rounded-full mt-10"
        style={{ border }}
      >
        Send Mail
      </motion.button>
      <span className="px-3 my-5">OR</span>
      {/* Social Media */}
      <div className="flex space-x-5 text-white items-center">
        {socialMedia.map((media, index) => (
          <Link href={media.url} key={index} target="_blank">
            <Image src={media.urlImage} width={24} height={24} alt={media.name} />
          </Link>
        ))}
      </div>
      <StarsMotion count={75} speed={0.5} radius={100} />
    </motion.main>
  );
}
