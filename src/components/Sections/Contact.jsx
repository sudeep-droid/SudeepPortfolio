import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    
    window.location.href = `mailto:pusps747@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Reset form after opening email client
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' })
    }, 1000)
  }

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:sudeepmalliksudeepmallik.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-6 h-6" />
              <span>sudeepmalliksudeepmallik@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sudeep-mallik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-secondary/30 p-8 rounded-2xl border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-muted-foreground">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-colors"
                placeholder="+91-9876543210" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-colors resize-none"
                placeholder="Your message..." 
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
