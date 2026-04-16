import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function SectionWrapper({ id, title, children, className = "" }) {
  return (
    <section id={id} className={cn("py-24 md:py-32 px-6", className)}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tighter text-center"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
}
