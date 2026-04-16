import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
            <img
              src="/profile2.jpg"
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 mx-auto shadow-2xl"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-light tracking-widest mb-4 text-muted-foreground uppercase">
            Sudhanshu Pusp
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate Full Stack Developer dedicated to building high-performance web applications. Leveraging a modern stack to deliver 100% scalable solutions and seamless user interfaces that drive engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-4"
        >
          <a
            href="/Sudhanshu%20Pusp%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors cursor-pointer text-sm md:text-base"
          >
            Resume / CV
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-colors cursor-pointer text-sm md:text-base"
          >
            Contact Me
          </Link>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <Link to="about" smooth={true} duration={900} offset={-100} className="cursor-pointer">
          <ArrowDown size={15} />
        </Link>
      </motion.div>
    </section>
  )
}
