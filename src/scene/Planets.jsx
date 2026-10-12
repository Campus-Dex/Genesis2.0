import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Textures: NASA Blue Marble (Visible Earth) and NASA SVS CGI Moon Kit, public domain.
const EARTH = { position: [0, -8.5, -3], radius: 6 }
const MOON = { position: [6, 1, -60], radius: 4 }

const srgb = (tex) => {
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
}

// Fresnel rim on a slightly larger shell: thin blue limb, transparent face-on.
const atmosphere = {
  uniforms: { color: { value: new THREE.Color('#6fb3ff') } },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vNormal = normalize(normalMatrix * normal);
      vView = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: `
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
      float f = pow(1.0 - abs(dot(vNormal, vView)), 3.0);
      gl_FragColor = vec4(color, f);
    }`,
}

export function Earth() {
  const globe = useRef()
  const map = useTexture('/textures/earth.jpg', srgb)
  useFrame((_, dt) => {
    globe.current.rotation.y += dt * 0.01
  })
  return (
    <group position={EARTH.position}>
      <mesh ref={globe} rotation={[0.2, 2.4, 0]}>
        <sphereGeometry args={[EARTH.radius, 96, 64]} />
        <meshStandardMaterial map={map} roughness={0.9} metalness={0} />
      </mesh>
      <mesh scale={1.025}>
        <sphereGeometry args={[EARTH.radius, 96, 64]} />
        <shaderMaterial
          args={[atmosphere]}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

export function Moon() {
  const map = useTexture('/textures/moon.jpg', srgb)
  const disp = useTexture('/textures/moon-disp.jpg')
  // ponytail: 2k colour map is soft up close; the landing shot grazes the horizon to hide it. 4k if it shows.
  return (
    <mesh position={MOON.position} rotation={[0, -1.2, 0]}>
      <sphereGeometry args={[MOON.radius, 256, 128]} />
      <meshStandardMaterial
        map={map}
        displacementMap={disp}
        displacementScale={0.06}
        displacementBias={-0.03}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}
