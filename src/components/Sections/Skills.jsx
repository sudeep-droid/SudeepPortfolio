import React, { useMemo, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const skills = [
  "Python", "SQL","MongoDB","Express.js","JWT","Bcrypt","typescript",
  "JSON", "GitHub", "Linux",
  "React", "Node.js", "Next.js", "Tailwind"
]

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate color change on hover
    ref.current.material.color.lerp(color.set(hovered ? '#ffffff' : '#a1a1aa'), 0.1)
  })

  return (
    <Text
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
      {...fontProps}
    >
      {children}
    </Text>
  )
}

function Cloud({ radius = 20 }) {
  // Create a spherical distribution of words
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 1; i < skills.length + 1; i++) {
      const k = i - 1
      const phi = Math.acos(1 - (2 * (k + 0.5)) / skills.length)
      const theta = phiSpan * i
      spherical.set(radius, phi, theta)
      const vec = new THREE.Vector3().setFromSpherical(spherical)
      temp.push([new THREE.Vector3(vec.x, vec.y, vec.z), skills[k]])
    }
    return temp
  }, [radius])

  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="h-[500px] w-full cursor-grab active:cursor-grabbing touch-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#000', 0, 80]} />
          <Cloud radius={20} />
          <OrbitControls enableZoom={false} autoRotate rotateSpeed={0.5} />
        </Canvas>
      </div>
    </SectionWrapper>
  )
}
