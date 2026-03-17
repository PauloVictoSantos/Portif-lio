"use client"

import { motion, type Variants } from "framer-motion"
import { PostCard } from "./post-card"
import Image from "next/image"

const cardVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    scale: 0.6,
    y: 60,
    rotate: 0,
  }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const centerCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 120,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const floatVariants: Variants = {
  float: (i: number) => ({
    y: [0, -12, 0],
    rotate: [0, i % 2 === 0 ? 1.5 : -1.5, 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
}

export function FloatingCards() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="pointer-events-none absolute inset-0"
    >

      <motion.div
        variants={floatVariants}
        animate="float"
        custom={0}
        className="pointer-events-auto absolute top-[35%] left-1/2 z-30 w-50 -translate-x-1/2 md:w-55"
        style={{ perspective: 800 }}
      >
        <PostCard
          username="@Paulo Victor"
          caption="Building digital experiences"
          avatar="/Paulo.jpeg"
        >
          <Image
            src="/paulo-post.jpeg"
            alt="Foto de Paulo Victor"
            width={400}
            height={400}
            className="aspect-square w-full rounded-lg object-cover"
          />
        </PostCard>
      </motion.div>

      {/* CARD ESQUERDA */}
      <motion.div
        variants={floatVariants}
        animate="float"
        custom={1}
        className="pointer-events-auto absolute top-[20%] -left-[53%] z-20 w-42.5 -rotate-12 md:w-47.5"
        style={{ perspective: 800 }}
      >
        <PostCard
          username="@Paulo.Victor"
          caption="Current Stack"
          avatar="/Paulo.jpeg"
          variants={cardVariants}
          custom={1}
        >
          <div className="space-y-1.5 rounded-lg bg-neutral-100/80 p-3">
            {["Next.js", "TypeScript", "Tailwind", "Node.js"].map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                <span className="text-[11px] font-medium text-neutral-800">{tech}</span>
              </div>
            ))}
          </div>
        </PostCard>
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="float"
        custom={2}
        className="pointer-events-auto absolute top-[50%] right-[-5%] md:right-[-10%] lg:right-[-55%] z-20 w-42.5 rotate-12 md:w-47.5"
        style={{ perspective: 800 }}
      >
        <PostCard
          username="@Paulo.Victor"
          caption="Recent Project"
          avatar="/Paulo.jpeg"
          variants={cardVariants}
          custom={2}
        >
          <div className="space-y-2 rounded-lg bg-neutral-100/80 p-3">
            <p className="text-[11px] font-medium text-neutral-800">
              From idea to product
            </p>
          </div>
        </PostCard>
      </motion.div>

    </motion.div>
  )
}