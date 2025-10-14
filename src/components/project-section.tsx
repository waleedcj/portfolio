import { motion } from 'framer-motion'
import vrf from "../assets/images/projects/vrf.webp"
import flappy from "../assets/images/projects/flapysol.webp"
import mishmish from "../assets/images/projects/mishmish.webp"
import chatterbox from "../assets/images/projects/chatterbox.webp"
import justparts from "../assets/images/projects/justpart.webp"
import minedash from "../assets/images/projects/minedash.webp"
import oldport from "../assets/images/projects/oldport.webp"
import { logExternalLink } from '../utils/analytics'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
   {
    title: "Mine Dash",
    description: "Mining pool dashboard in solidjs",
    image: minedash,
    link: "https://waleedcj.github.io/MineDash/"
  },
  {
    title: "justparts telegram bot",
    description: "telegram bot and miniapp for auto spare part finder",
    image: justparts,
    link: "https://github.com/waleedcj/telegram_autopart_bot"
  },

  {
    title: "Decentralized Raffle",
    description: "fully anonymous and decentralized raffle system using Chainlink VRF",
    image: vrf,
    link: "https://github.com/waleedcj/frontEnd-Decentralized-raffle"
  },
  {
    title: "FlapySol",
    description: "Flappy bird style game on the sol blockchain, score to recieve tokens",
    image: flappy,
    link: "https://www.flapysol.fun/"
  },
  {
    title: "MishMish landscaping",
    description: "An open marketplace for gardeners and landscaping services",
    image: mishmish,
    link: "https://github.com/waleedcj/landscapeWeb"
  },
  {
    title: "Chatter Box",
    description: "Open Room Chat app build using Supabase channels.",
    image: chatterbox,
    link: "https://chattter-box.netlify.app/"
  },
  {
    title: "Old website",
    description: "My old portfolio website made with CRA",
    image: oldport,
    link: "https://walid-old-portfolio.vercel.app/"
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full aspect-square"
      />
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 hover:opacity-100 hover:translate-y-0 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-200 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logExternalLink(project.title)}
          className="inline-block bg-primaryduo text-textduo px-4 py-2 rounded-md text-sm font-medium active:bg-primaryduo/50 hover:bg-primaryduo/50 transition-colors"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectSection() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
     </section>
  )
}

