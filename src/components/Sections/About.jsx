import React from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Code, Terminal, Database, Award } from 'lucide-react'

const timeline = [
  { label: 'Month Experience', value: '6+', icon: Terminal },
  { label: 'Tech Stack', value: 'Full Stack', icon: Database },
]

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Building digital solutions with <span className="text-white">modern technologies</span>.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a Full Stack Developer with a strong foundation in building responsive and scalable web applications.
            I focus on writing clean code and delivering seamless user experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am committed to continuous learning and leveraging the latest web technologies to solve real-world challenges.
          </p>
        </motion.div>

        {/* Right Column - Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Connective Line */}
          <div className="absolute left-[19px] md:left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center gap-6 group"
              >
                {/* Node Circle */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  <item.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
