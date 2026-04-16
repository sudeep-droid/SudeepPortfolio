import React from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'

const experience = [
  {
    company: "Freelance Web Developer",
    role: "Full Stack Web Developer",
    period: "June 2025 – Present",
    description: "Operated as a full-cycle technical consultant, translating client business requirements into high-performance web solutions. Specialized in building scalable, user-centric applications with a focus on code maintainability and system efficiency. Successfully architected and deployed 2 major projects, ensuring 100% on-time delivery while adhering to strict agile development timelines."
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-3xl mx-auto space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 border-l border-border"
          >
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
            <h3 className="text-xl font-bold">{item.role}</h3>
            <p className="text-sm text-primary/80 mb-2">{item.company} | {item.period}</p>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
