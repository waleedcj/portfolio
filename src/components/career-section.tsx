import { AnimatePresence, motion } from "framer-motion";
import vaiLogo from "../assets/images/vaimanagement_logo.webp";
import popLogo from "../assets/images/poplogo.webp";
import talysisLogo from "../assets/images/talysis_logo.webp";
import mkzLogo from "../assets/images/mkz.webp";
import hmeLogo from "../assets/images/hme.webp";
import { TbRefresh } from "react-icons/tb";
import { useState } from "react";
import EducationSection from "./EducationSection";
import popgif from "../assets/images/career/popgif.gif";
import vaigif from "../assets/images/career/vaimarket.gif";
import monkzgif from "../assets/images/career/monkz.gif";
import talysisgif from "../assets/images/career/talysis.gif";
import vizlogo from "../assets/images/logo-filled-one.png";
import nativemotiom from "../assets/images/nativemotion.png";
import nativemotiomgif from "../assets/images/career/nativemotion.gif";
import viztravelgif from "../assets/images/career/viztravel.gif";
import hmee from "../assets/images/career/hmee.webp";

const experiences = [
   {
    company: "Native Motion",
    role: "Founder (Next.js, React Native, Animations)",
    period: "Jun 2025 - Present",
    logo: nativemotiom,
    image: nativemotiomgif,
    website: "https://www.nativemotion.dev/",
  }, 
  {
    company: "VizualTravel",
    role: "Web & Mobile Developer (React, React Native, AWS, Node.js, PostgreSQL)",
    period: "Apr 2025 - Present",
    logo: vizlogo,
    image: viztravelgif,
    website: "https://www.vizualtravel.com/",
  },
  {
    company: "Vai Management",
    role: "Frontend & Blockchain Developer",
    period: "Jan 2024 - Dec 2024",
    logo: vaiLogo,
    image: vaigif,
    website: "https://vaimanagement.co",
  },
  {
    company: "Pop Social",
    role: "Frontend & Blockchain Developer (react native, AWS, Solidity, Java)",
    period: "Dec 2022 - Jun 2024",
    logo: popLogo,
    image: popgif,
    website: "https://popsocial.io",
  },
  {
    company: "Talysis Education",
    role: "Product Developer (Django, React, AWS)",
    period: "Jun 2022 - May 2023",
    logo: talysisLogo,
    image: talysisgif,
    website: "https://www.linkedin.com/company/talysis",
  },
  {
    company: "Cryptomonkz",
    role: "Software Engineer (Full Stack, React, Node.js)",
    period: "Oct 2022 - Feb 2023",
    logo: mkzLogo,
    image: monkzgif,
    website: "https://cryptomonkz.io",
  },
  {
    company: "HME",
    role: "Engineering intern",
    period: "Jul 2021 - Apr 2022",
    logo: hmeLogo,
    image: hmee,
  },
];

type Tab = "career" | "education";

interface MobileImageModalProps {
  image: string;
  company: string;
  isOpen: boolean;
  onClose: () => void;
}

function MobileImageModal({
  image,
  company,
  isOpen,
  onClose,
}: MobileImageModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="sm:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-lg overflow-hidden"
      >
        <img src={image} alt={company} className="w-full h-auto" />
      </motion.div>
    </motion.div>
  );
}

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState<Tab>("career");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMobileImage, setSelectedMobileImage] = useState<number | null>(
    null
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-16">
          <div
            onClick={() => setActiveTab("career")}
            className={`text-3xl font-bold text-center cursor-pointer transition 
              ${activeTab === "career" ? "text-foreground" : "text-gray-400"} 
              hover:-translate-y-1 hover:text-foreground`}
          >
            Career
          </div>

          <TbRefresh
            className={`transition-all duration-300 
            ${activeTab === "education" ? "rotate-180" : "rotate-90"}`}
            size={20}
          />
          <div
            onClick={() => setActiveTab("education")}
            className={`text-3xl font-bold text-center cursor-pointer transition 
              ${
                activeTab === "education" ? "text-foreground" : "text-gray-400"
              } 
              hover:-translate-y-1 hover:text-foreground`}
          >
            Education
          </div>
        </div>
        <AnimatePresence mode="wait">
          {activeTab === "career" ? (
            <div key="career" className="relative flex flex-col md:flex-row">
              <div className="md:w-1/2">
             
              <div
                
              >
                 {window.innerWidth >= 768 ? (
                  "✨ Hover over experiences to see previews"
                 ) : (
                  "✨ Tap on experiences to see project previews"
                 )}
                </div>
                 
            
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-10 w-px bg-primaryduo"></div>
                  <div className="space-y-12">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="flex gap-8"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedMobileImage(index)}
                      >
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative shrink-0 h-12 w-12 rounded-full overflow-hidden"
                              onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking link
                            >
                              <img
                                src={exp.logo}
                                alt={exp.company}
                                width={48}
                                height={48}
                                className="rounded-full"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-muted-foreground">{exp.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
                <div className="sticky top-20">
                  <AnimatePresence mode="wait">
                    {hoveredIndex !== null && (
                      <motion.div
                        key={hoveredIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative rounded-lg overflow-hidden lg:w-[500px] lg:h-[500px]"
                      >
                        <img
                          src={experiences[hoveredIndex].image}
                          alt={experiences[hoveredIndex].company}
                          className="object-cover w-[full] h-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            <EducationSection />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedMobileImage !== null && (
            <MobileImageModal
              image={experiences[selectedMobileImage].image}
              company={experiences[selectedMobileImage].company}
              isOpen={selectedMobileImage !== null}
              onClose={() => setSelectedMobileImage(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}