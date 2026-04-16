import React from 'react'
import Footer from './Footer'
import Scene from '../Hero/Scene'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      {/* Global 3D Animated Background */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>
      
      {/* Content Layer */}
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
