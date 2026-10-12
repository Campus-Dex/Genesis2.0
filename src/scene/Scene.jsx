import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { Earth, Moon } from './Planets'
import Shuttle from './Shuttle'

// The mission, one shot per point, evenly spaced over page scroll (0 → 1):
// orbit · shuttle close-up · past the shuttle · cruise · moon approach · low orbit · landed, Earthrise.
const path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0.4, 7.5),
  new THREE.Vector3(-0.6, 0.9, 6),
  new THREE.Vector3(2.6, 0.8, 1),
  new THREE.Vector3(4, 1.5, -25),
  new THREE.Vector3(5, 2.5, -45),
  new THREE.Vector3(6, 6.5, -56),
  new THREE.Vector3(5.86, 4.87, -58.67),
])
const look = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, -0.4, 0),
  new THREE.Vector3(1.4, 0.1, 2),
  new THREE.Vector3(6, 1, -60),
  new THREE.Vector3(6, 1, -60),
  new THREE.Vector3(6, 1, -60),
  new THREE.Vector3(6, 1, -62),
  new THREE.Vector3(0, -13, -3),
])
const target = new THREE.Vector3()
const aim = new THREE.Vector3().copy(look.points[0])

function CameraRig() {
  useFrame((state, dt) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
    const k = 1 - Math.exp(-dt * 3)
    const cam = state.camera
    path.getPoint(p, target)
    cam.position.lerp(target, k)
    look.getPoint(p, target)
    aim.lerp(target, k)
    cam.lookAt(aim)
  })
  return null
}

export default function Scene({ reducedMotion, mobile }) {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        dpr={mobile ? [1, 1.25] : [1, 1.6]}
        camera={{ position: path.points[0].toArray(), fov: 42, near: 0.05, far: 400 }}
        onCreated={({ camera }) => camera.lookAt(look.points[0])}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <ambientLight intensity={0.06} color="#9db4ff" />
        <directionalLight position={[10, 3.5, 2.5]} intensity={2.6} color="#fff6ea" />
        <Stars radius={150} depth={60} count={mobile ? 3000 : 7000} factor={4} saturation={0} fade speed={reducedMotion ? 0 : 0.4} />
        <Suspense fallback={null}>
          <Earth />
          <Moon />
          <Shuttle />
        </Suspense>
        {!reducedMotion && <CameraRig />}
        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom luminanceThreshold={0.55} mipmapBlur intensity={mobile ? 0.7 : 1.1} radius={0.65} />
          <ChromaticAberration offset={[0.0011, 0.0007]} radialModulation modulationOffset={0.45} />
          <Noise opacity={0.055} />
          <Vignette offset={0.28} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
