import React from 'react'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero/Hero'
import About from './components/Sections/About'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Skills from './components/Sections/Skills'
import Contact from './components/Sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  )
}

export default App
