import { motion } from 'framer-motion'
import murdoch from '../assets/images/murdoch.webp';
import oxford from '../assets/images/oxford.webp';

const experiences = [
  {
    company: "Murdoch University",
    role: "Computer Science and Cyber Security",
    period: "2018 - Sep 2021",
    logo: murdoch
  },
  {
    company: "The Oxford school",
    role: "Alevels",
    period: "2016 - 2018",
    logo: oxford,
  },
]

export default function EducationSection() {
  return (
      <div className="max-w-3xl mx-auto">
        <div className="relative">
        <div className="absolute left-8 top-0 bottom-10 w-px bg-primaryduo"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-8"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}