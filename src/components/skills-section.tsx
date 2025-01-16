

import { motion } from 'framer-motion'
import TechIcons from '../assets/SvgComponents'

interface SkillCardProps {
  title: string;
  description: string;  
  technologies: string[];
  delay?: number;
}

function SkillCard({ title, description, technologies, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className=" rounded-lg p-6 space-y-4 shadow-md bg-secondary"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1 justify-items-start">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primaryduo"
          >
            {/* Render the SVG */}
            <TechIcons tech={tech} />
            {tech}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Skills Section
export default function SkillsSection() {
  return (
    <div className="max-w-7xl mx-auto space-y-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center"
      >
        Skills
      </motion.h2>

      {/* <TechIcons tech='React' /> */}

      <div className="grid md:grid-cols-2 gap-8">
        <SkillCard
          title="Frontend Development"
          description="Specialized in building responsive, performant web applications with modern React ecosystems and state management solutions.."
          technologies={[
            "React",
            "ReactNative",
            "ViteJs",
            "Next.js",
            "Three.js",
            "Tanstack",
            "Astro.js",
            "ChartJs",
            "GraphQL",
            "TypeScript",
          ]}
        />

        <SkillCard
          title="Web3 & Blockchain"
          description="Experience in developing and integrating Web3 applications with various blockchain protocols and smart contracts"
          technologies={[
            "Solidity",
            "Hardhat",
            "Etherjs",
            "Subgraphs",
            "SolidJs",
          ]}
          delay={0.2}
        />

        <SkillCard
          title="Backend & Infrastructure"
          description="Proficient in setting up and maintaining backend services and databases for full-stack applications."
          technologies={[
            "Node.js",
            "Rust",
            "PostgreSQL",
            "MySQL",
            "Firebase",
            "Supabase",
            "AppWrite",
            "Twilio",
            "Stripe",
            "AWS",
          ]}
          delay={0.4}
        />

        <SkillCard
          title="Development Tools & UI"
          description="Experienced with modern development tools and UI frameworks for efficient development workflows."
          technologies={[  "Git",
            "Docker",
            "Jest",
            "Tailwind",
            "RadixUI",
            "MUI",
            "ChakraUI",
            "Mantine",
            "Postman",
            "GitLab",
            "BitBucket",
            "SCSS",]}
          delay={0.6}
        />
      </div>
    </div>
  );
}
