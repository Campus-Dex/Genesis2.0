import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// NASA 3D Resources "Space Shuttle (D)", unused textures pruned. Model is Z-up, nose +X, ~1470 units long.
const URL = '/models/shuttle.glb'

export default function Shuttle() {
  const group = useRef()
  const { scene } = useGLTF(URL)

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    const k = 1 - Math.exp(-dt * 2)
    const g = group.current
    g.position.y += (0.1 + Math.sin(t * 0.5) * 0.06 + state.pointer.y * 0.08 - g.position.y) * k
    g.rotation.z = Math.sin(t * 0.3) * 0.05 + state.pointer.x * 0.06
  })

  return (
    <group ref={group} position={[1.4, 0.1, 3.6]} rotation={[0.15, 0.35, 0]}>
      {/* Z-up → Y-up, nose turned from +X to -Z (towards the moon), centred */}
      <primitive object={scene} scale={0.0011} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -0.15, 0]} />
    </group>
  )
}

useGLTF.preload(URL)
