

// "use client"

// import { useRef, useMemo } from "react"
// import { useFrame, useThree } from "@react-three/fiber"
// import * as THREE from "three"

// // Custom shader material for advanced effects
// const vertexShader = `
//   uniform float time;
//   uniform float intensity;
//   varying vec2 vUv;
//   varying vec3 vPosition;
  
//   void main() {
//     vUv = uv;
//     vPosition = position;
    
//     vec3 pos = position;
//     // Tweak these numbers to adjust wave height
//     pos.y += sin(pos.x * 5.0 + time) * 0.1 * intensity;
//     pos.x += cos(pos.y * 4.0 + time * 1.5) * 0.05 * intensity;
    
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//   }
// `

// const fragmentShader = `
//   uniform float time;
//   uniform float intensity;
//   uniform vec3 color1;
//   uniform vec3 color2;
//   varying vec2 vUv;
//   varying vec3 vPosition;
  
//   void main() {
//     vec2 uv = vUv;
    
//     // Create animated noise pattern
//     float noise = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 0.8);
//     noise += sin(uv.x * 20.0 - time * 2.0) * cos(uv.y * 15.0 + time * 1.2) * 0.5;
    
//     // Mix colors based on noise and position
//     vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
//     color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);
    
//     // Vignette/Glow effect
//     float glow = 1.0 - length(uv - 0.5) * 1.5;
//     glow = clamp(glow, 0.0, 1.0);
//     glow = pow(glow, 1.5);
    
//     gl_FragColor = vec4(color * glow, glow * 0.9);
//   }
// `

// export function ShaderPlane({
//   position = [0, 0, 0], // Default position
//   color1 = "#ff5722",
//   color2 = "#ffffff",
//   scale = 1.0, // Added scale prop just in case
// }) {
//   const mesh = useRef(null)
  
//   // Get the viewport size to make it full screen
//   const { viewport } = useThree()

//   const uniforms = useMemo(
//     () => ({
//       time: { value: 0 },
//       intensity: { value: 1.0 },
//       color1: { value: new THREE.Color(color1) },
//       color2: { value: new THREE.Color(color2) },
//     }),
//     [color1, color2],
//   )

//   useFrame((state) => {
//     if (mesh.current) {
//       uniforms.time.value = state.clock.elapsedTime * 0.5; // Slowed down slightly
//       uniforms.intensity.value = 0.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
//     }
//   })

//   return (
//     <mesh ref={mesh} position={position} scale={scale}>
//       {/* Use viewport width/height + extra margin to cover edges */}
//       <planeGeometry args={[viewport.width * 1.5, viewport.height * 1.5, 64, 64]} />
//       <shaderMaterial
//         uniforms={uniforms}
//         vertexShader={vertexShader}
//         fragmentShader={fragmentShader}
//         transparent
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   )
// }

"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// Custom shader material for advanced effects
const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    // Slightly stronger waves so the paper fluid is visible
    pos.y += sin(pos.x * 5.0 + time) * 0.14 * intensity;
    pos.x += cos(pos.y * 4.0 + time * 1.5) * 0.07 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Animated noise pattern
    float noise = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 0.8);
    noise += sin(uv.x * 20.0 - time * 2.0) * cos(uv.y * 15.0 + time * 1.2) * 0.5;
    
    // Mix colors based on noise and position
    vec3 base = mix(color1, color2, noise * 0.5 + 0.5);
    // Subtle highlight ribbons
    vec3 color = mix(base, vec3(1.0), pow(abs(noise), 2.0) * intensity * 0.6);
    
    // Vignette / glow so it feels like a soft paper light
    float glow = 1.0 - length(uv - 0.5) * 1.4;
    glow = clamp(glow, 0.0, 1.0);
    glow = pow(glow, 1.3);
    
    gl_FragColor = vec4(color * glow, glow * 0.95);
  }
`;

export function ShaderPlane({
  position = [0, 0, 0],
  // Dark emerald / teal paper instead of flat grey
  color1 = "#022c22",
  color2 = "#020617",
  scale = 1.0,
}) {
  // ✅ plain JS ref, no generics
  const mesh = useRef(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  );

  useFrame((state) => {
    if (mesh.current) {
      uniforms.time.value = state.clock.elapsedTime * 1.2;
      uniforms.intensity.value =
        0.9 + Math.sin(state.clock.elapsedTime * 1.3) * 0.25;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      {/* Full viewport + margin so edges are covered */}
      <planeGeometry
        args={[viewport.width * 1.5, viewport.height * 1.5, 64, 64]}
      />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
