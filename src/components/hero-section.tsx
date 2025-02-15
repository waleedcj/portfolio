import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { logExternalLink } from "../utils/analytics";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
          Walid Memon
        </h1>
        <div className="space-y-2">
          <p className="text-2xl text-muted-foreground">Software Engineer</p>
        </div>
        <div className="flex items-center justify-center text-muted-foreground space-x-2">
          <LuMapPin size={16} />
          <span>Dubai, UAE</span>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Resume */}
          <a
            href="https://cdn.jsdelivr.net/gh/waleedcj/walid-assets/walidmresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logExternalLink("Resume")}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md transition transform hover:-translate-y-1 hover:text-foreground hover:bg-secondary/80 flex items-center space-x-2"
          >
            <FiFileText size={16} />
            <span>Resume</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/waleed-memon-886579181/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logExternalLink("LinkedIn")}
            className="p-2 bg-secondary text-secondary-foreground rounded-md transition transform hover:-translate-y-1 hover:text-foreground hover:bg-secondary/80"
          >
            <FaLinkedinIn size={20} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/waleedcj"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logExternalLink("GitHub")}
            className="p-2 bg-secondary text-secondary-foreground rounded-md transition transform hover:-translate-y-1 hover:text-foreground hover:bg-secondary/80"
          >
            <FaGithub size={20} />
          </a>
          {/* Email */}
          <a
            href="mailto:waleedcj16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logExternalLink("mailto")}
            className="p-2 bg-secondary text-secondary-foreground rounded-md transition transform hover:-translate-y-1 hover:text-foreground hover:bg-secondary/80"
          >
            <TfiEmail size={20} />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/971566936246"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logExternalLink("Whatsapp")}
            className="p-2 bg-secondary text-secondary-foreground rounded-md transition transform hover:-translate-y-1 hover:text-foreground hover:bg-secondary/80"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Get to the fun side 
        </motion.button> */}
      </motion.div>
    </section>
  );
}
