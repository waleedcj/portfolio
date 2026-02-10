import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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

interface VideoDemo {
  title: string
  description: string
  poster: string
  videoUrl: string
}

const tokenizedPlatformThumbnail = "https://cdn.jsdelivr.net/gh/waleedcj/walid-assets@main/tokenx.webp"
const tokenizedPart1Url = "https://cdn.jsdelivr.net/gh/waleedcj/walid-assets@main/part1.mp4"
// Inferred from your naming because the third URL provided repeated part1.mp4.
const tokenizedPart2Url = "https://cdn.jsdelivr.net/gh/waleedcj/walid-assets@main/part2.mp4"
// const designPortfolioPdfUrl = "https://raw.githubusercontent.com/waleedcj/walid-assets/main/walidDesignPortfolio.pdf"
// const designPortfolioThumbnailUrl = "https://cdn.jsdelivr.net/gh/waleedcj/walid-assets@main/designThumb.webp"

const tokenizedPlatformDemos: VideoDemo[] = [
  {
    title: "Part 1: Demo of Real Estate Tokenization Platform on XRP Ledger",
    description: "End-to-end demo of the tokenization flow, asset setup, and investor experience on XRPL.",
    poster: tokenizedPlatformThumbnail,
    videoUrl: tokenizedPart1Url
  },
  {
    title: "Part 2: Admin Dashboard Overview and Property Management Demo",
    description: "Admin-side walkthrough covering dashboard tooling, property controls, and management workflows.",
    poster: tokenizedPlatformThumbnail,
    videoUrl: tokenizedPart2Url
  }
]

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

function VideoDemoCard({ demo, index }: { demo: VideoDemo, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [playRequested, setPlayRequested] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "320px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playRequested) return

    const videoElement = videoRef.current
    if (!videoElement) return

    const rafId = requestAnimationFrame(() => {
      videoElement.play()
        .catch(() => undefined)
        .finally(() => setPlayRequested(false))
    })

    return () => cancelAnimationFrame(rafId)
  }, [playRequested, shouldLoad])

  const handlePlayNow = () => {
    setShouldLoad(true)
    setPlayRequested(true)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xl"
    >
      <div className="relative bg-black">
        <video
          ref={videoRef}
          poster={demo.poster}
          preload={shouldLoad ? "metadata" : "none"}
          controls
          playsInline
          className="w-full aspect-video object-cover"
        >
          {shouldLoad ? <source src={demo.videoUrl} type="video/mp4" /> : null}
          Your browser does not support HTML5 video.
        </video>
        {!shouldLoad ? (
          <button
            type="button"
            onClick={handlePlayNow}
            className="absolute inset-0 m-auto h-14 w-40 rounded-full bg-primaryduo text-textduo font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label={`Play ${demo.title}`}
          >
            Play Demo
          </button>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-tight">{demo.title}</h3>
        <p className="mt-2 text-sm text-mutedForeground">{demo.description}</p>
        <a
          href={demo.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logExternalLink(demo.title)}
          className="inline-flex mt-4 bg-primaryduo text-textduo px-4 py-2 rounded-md text-sm font-medium active:bg-primaryduo/50 hover:bg-primaryduo/50 transition-colors"
        >
          Open Video Link
        </a>
      </div>
    </motion.article>
  )
}

// function DesignPortfolioCard() {
//   const cardRef = useRef<HTMLDivElement>(null)
//   const [showPdfPreview, setShowPdfPreview] = useState(false)

//   return (
//     <motion.article
//       ref={cardRef}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true, amount: 0.2 }}
//       className="rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xl mb-20"
//     >
//       <div className="relative bg-black/90 aspect-[4/3]">
//         {!showPdfPreview ? (
//           <>
//             <img
//               src={designPortfolioThumbnailUrl}
//               alt="Design portfolio thumbnail preview"
//               loading="lazy"
//               decoding="async"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
//             <div className="absolute inset-0 flex items-center justify-center px-4">
//               <button
//                 type="button"
//                 onClick={() => setShowPdfPreview(true)}
//                 className="inline-flex bg-primaryduo text-textduo px-4 py-2 rounded-md text-sm font-medium active:bg-primaryduo/50 hover:bg-primaryduo/50 transition-colors"
//               >
//                 Preview PDF
//               </button>
//             </div>
//           </>
//         ) : (
//           <object
//             data={designPortfolioPdfUrl}
//             type="application/pdf"
//             className="w-full h-full"
//             aria-label="Walid Design Portfolio PDF Preview"
//           >
//             <div className="w-full h-full flex items-center justify-center px-4">
//               <a
//                 href={designPortfolioPdfUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={() => logExternalLink("Design Portfolio PDF Fallback")}
//                 className="inline-flex bg-primaryduo text-textduo px-4 py-2 rounded-md text-sm font-medium active:bg-primaryduo/50 hover:bg-primaryduo/50 transition-colors"
//               >
//                 Open Portfolio PDF
//               </a>
//             </div>
//           </object>
//         )}
//       </div>
//       <div className="p-5">
//         <h3 className="text-xl font-semibold leading-tight">Design Portfolio (PDF)</h3>
//         <p className="mt-2 text-sm text-mutedForeground">
//           Case studies, interface explorations, and visual design work collected in one portfolio deck.
//         </p>
//         <div className="mt-4 flex flex-wrap gap-3">
//           <a
//             href={designPortfolioPdfUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => logExternalLink("Design Portfolio PDF")}
//             className="inline-flex bg-primaryduo text-textduo px-4 py-2 rounded-md text-sm font-medium active:bg-primaryduo/50 hover:bg-primaryduo/50 transition-colors"
//           >
//             Open Portfolio
//           </a>
//           <a
//             href={designPortfolioPdfUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => logExternalLink("Design Portfolio Download")}
//             className="inline-flex border border-border px-4 py-2 rounded-md text-sm font-medium hover:bg-muted/60 transition-colors"
//           >
//             Download PDF
//           </a>
//         </div>
//       </div>
//     </motion.article>
//   )
// }

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
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
          className="text-3xl font-bold text-center mb-6"
        >
          Tokenized Platform Demo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-mutedForeground text-center max-w-3xl mx-auto mb-10"
        >
          Two guided walkthrough videos showing the XRPL real estate tokenization flow and the admin/property management experience.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {tokenizedPlatformDemos.map((demo, index) => (
            <VideoDemoCard key={demo.title} demo={demo} index={index} />
          ))}
        </div>

        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6"
        >
          Design Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-mutedForeground text-center max-w-3xl mx-auto mb-10"
        >
          A curated PDF portfolio featuring UI design work, product thinking, and visual explorations.
        </motion.p>
        <DesignPortfolioCard /> */}

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
