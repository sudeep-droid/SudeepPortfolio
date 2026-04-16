import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function Particles() {
  const ref = useRef()
  useFrame((state) => {
    // Gentle rotation for dynamic feel
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })
  
  return (
    <group ref={ref}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </group>
  )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-background">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Ambient light for subtle depth if we add meshes later */}
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-0 pointer-events-none" />
    </div>
  )
}
