import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

const projects = [
  {
    title: "Mangal to Kruti Dev Converter",
    description: "A high-performance text transcoding utility for seamless conversion between Unicode (Mangal) and Legacy (Kruti Dev) fonts.",
    longDescription: "Developed a real-time font conversion engine using Next.js to bridge the gap between Unicode and legacy Hindi typing formats. Engineered custom string replacement algorithms that process text with 100% accuracy and zero latency, capable of converting 5,000+ characters in under 100ms. This tool streamlines documentation workflows, reducing manual re-typing efforts by approximately 40%.",
    tags: ["Next.js", "React", "Regex", "Text Processing"],
    link: "https://kruti-dev-converter.vercel.app/",
    github: "https://github.com/Sudhanshupusp/KrutiDev-Converter",
    image: "mangalKruti.png"
  },
  {
    title: "High-Performance Media CDN",
    description: "A seamless integration of ImageKit SaaS for automated real-time image transformation and global content delivery.",
    longDescription: "Integrated ImageKit's API into a scalable web application to automate media processing workflows. Implemented dynamic URL-based transformations and automatic format conversion (WebP/AVIF), which reduced the average asset size by 65% without quality loss. This optimization resulted in a 2x faster Largest Contentful Paint (LCP) score and significantly lowered bandwidth consumption.",
    tags: ["Next.js", "ImageKit API", "CDN", "Web Performance"],
    link: "#",
    github: "https://github.com/Sudhanshupusp/ImageKit",
    image: "imageKit.png"
  },
  {
    title: "Secure Role-Based Auth System",
    description: "A scalable full-stack authorization architecture implementing hierarchical access control and JWT security protocols.",
    longDescription: "Architected a robust Role-Based Access Control (RBAC) system to manage permissions across 3 distinct user tiers (Admin, Editor, User). Implemented custom middleware with JSON Web Tokens (JWT) and Bcrypt hashing, which reduced unauthorized API access attempts by 99%. The optimized session management logic improved server response time for authenticated routes by 35%.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    link: "#",
    github: "https://github.com/Sudhanshupusp/Auth-Sys",
    image: "authSys.png"
  },
  {
    title: "Hackathon Management Portal",
    description: "A centralized event platform streamlining participant registration, automated email notifications, and real-time administrative data syncing.",
    longDescription: "Architected a full-stack solution for the college hackathon to manage the complete participant lifecycle. Engineered a custom registration pipeline that triggers **automated confirmation emails** via Nodemailer immediately upon sign-up. Integrated the **Google Sheets API** as a lightweight database/CMS, allowing non-technical organizers to view and manage registrant data in real-time without database access. This automated workflow eliminated manual data entry, reducing administrative overhead by **90%** while serving as the primary information hub for the event roadmap.",
    tags: ["Next.js", "Google Sheets API", "Nodemailer", "Serverless Functions"],
    link: "#",
    github: "#",
    image: "UcetHack.png"
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group w-full max-w-sm bg-secondary/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-zinc-800 to-black">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/70 font-medium group-hover:bg-black/30 transition-colors">
                View Details
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-primary/80 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide relative shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="h-48 sm:h-64 w-full shrink-0 relative overflow-hidden bg-gradient-to-br from-zinc-800 to-black">
                <img
                  src={`/${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
                  >
                    <Github size={20} /> GitHub
                  </a>
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-800 text-white border border-white/10 font-semibold hover:bg-zinc-700 transition-colors w-full sm:w-auto"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
