// 'use client'

// import { useMemo, useEffect } from 'react'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { shaderMaterial, useTrailTexture } from '@react-three/drei'
// import { useTheme } from 'next-themes' 
// import * as THREE from 'three'

// const DotMaterial = shaderMaterial(
//   {
//     time: 0,
//     resolution: new THREE.Vector2(),
//     dotColor: new THREE.Color('#FFFFFF'),
//     bgColor: new THREE.Color('#121212'),
//     mouseTrail: null,
//     render: 0,
//     rotation: 0,
//     gridSize: 50,
//     dotOpacity: 0.05
//   },
//   /* glsl */ `
//     void main() {
//       gl_Position = vec4(position.xy, 0.0, 1.0);
//     }
//   `,
//   /* glsl */ `
//     uniform float time;
//     uniform int render;
//     uniform vec2 resolution;
//     uniform vec3 dotColor;
//     uniform vec3 bgColor;
//     uniform sampler2D mouseTrail;
//     uniform float rotation;
//     uniform float gridSize;
//     uniform float dotOpacity;

//     vec2 rotate(vec2 uv, float angle) {
//         float s = sin(angle);
//         float c = cos(angle);
//         mat2 rotationMatrix = mat2(c, -s, s, c);
//         return rotationMatrix * (uv - 0.5) + 0.5;
//     }

//     vec2 coverUv(vec2 uv) {
//       vec2 s = resolution.xy / max(resolution.x, resolution.y);
//       vec2 newUv = (uv - 0.5) * s + 0.5;
//       return clamp(newUv, 0.0, 1.0);
//     }

//     float sdfCircle(vec2 p, float r) {
//         return length(p - 0.5) - r;
//     }

//     void main() {
//       vec2 screenUv = gl_FragCoord.xy / resolution;
//       vec2 uv = coverUv(screenUv);

//       vec2 rotatedUv = rotate(uv, rotation);

//       // Create a grid
//       vec2 gridUv = fract(rotatedUv * gridSize);
//       vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

//       // Calculate distance from the center of each cell
//       float baseDot = sdfCircle(gridUv, 0.25);

//       // Screen mask
//       float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y); // 0 at the top, 1 at the bottom
//       vec2 centerDisplace = vec2(0.7, 1.1);
//       float circleMaskCenter = length(uv - centerDisplace);
//       float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);
      
//       float combinedMask = screenMask * circleMaskFromCenter;
//       float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

//       // Mouse trail effect
//       float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      
//       float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);

//       // Create dots with animated scale, influenced by mouse
//       float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

//       float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

//       float smoothDot = smoothstep(0.05, 0.0, sdfDot);

//       float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

//       // Mix background color with dot color, using animated opacity to increase visibility
//       vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));

//       gl_FragColor = vec4(composition, 1.0);

//       #include <tonemapping_fragment>
//       #include <colorspace_fragment>
//     }
//   `
// )

// function Scene() {
//   const size = useThree((s) => s.size)
//   const viewport = useThree((s) => s.viewport)
//   const { theme } = useTheme()
  
//   const rotation = 0
//   const gridSize = 100

//   const getThemeColors = () => {
//     switch (theme) {
//       case 'dark':
//         return {
//           dotColor: '#FFFFFF',
//           bgColor: '#000000', // Pure black
//           dotOpacity: 0.025
//         }
//       case 'light':
//         return {
//           dotColor: '#e1e1e1',
//           bgColor: '#F4F5F5',
//           dotOpacity: 0.15
//         }
//       default:
//         return {
//           dotColor: '#FFFFFF',
//           bgColor: '#000000', 
//           dotOpacity: 0.05
//         }
//     }
//   }

//   const themeColors = getThemeColors()

//   const [trail, onMove] = useTrailTexture({
//     size: 512,
//     radius: 0.1,
//     maxAge: 400,
//     interpolate: 1,
//     ease: function easeInOutCirc(x) {
//       return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
//     }
//   })

//   const dotMaterial = useMemo(() => {
//     return new DotMaterial()
//   }, [])

//   useEffect(() => {
//     dotMaterial.uniforms.dotColor.value.setHex(themeColors.dotColor.replace('#', '0x'))
//     dotMaterial.uniforms.bgColor.value.setHex(themeColors.bgColor.replace('#', '0x'))
//     dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
//   }, [theme, dotMaterial, themeColors])

//   useFrame((state) => {
//     dotMaterial.uniforms.time.value = state.clock.elapsedTime
//   })

//   const handlePointerMove = (e) => {
//     onMove(e)
//   }

//   const scale = Math.max(viewport.width, viewport.height) / 2

//   return (
//     <mesh scale={[scale, scale, 1]} onPointerMove={handlePointerMove}>
//       <planeGeometry args={[2, 2]} />
//       <primitive
//         object={dotMaterial}
//         resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
//         rotation={rotation}
//         gridSize={gridSize}
//         mouseTrail={trail}
//         render={0}
//       />
//     </mesh>
//   )
// }

// export const DotScreenShader = () => {
//   return (
//     <Canvas
//       gl={{
//         antialias: true,
//         powerPreference: 'high-performance',
//         outputColorSpace: THREE.SRGBColorSpace,
//         toneMapping: THREE.NoToneMapping
//       }}>
//       <Scene />
//     </Canvas>
//   )
// }
'use client'

import { useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color('#FFFFFF'),
    bgColor: new THREE.Color('#000000'),
    mouseTrail: null,
    gridSize: 40,
    dotOpacity: 0.05 // Lowered default opacity
  },
  // Vertex Shader: Passes UVs to fragment shader
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader: Handles the Dot Generation & Glow
  /* glsl */ `
    uniform float time;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform float dotOpacity;
    varying vec2 vUv;

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      // 1. Mouse Trail Lookup
      // We use raw vUv (0..1) here so the trail matches the mouse cursor position exactly
      float mouseInfluence = texture2D(mouseTrail, vUv).r;

      // 2. Aspect Ratio Correction
      // We fix the aspect ratio only for the Grid generation so dots appear circular, not oval
      vec2 aspectUv = vUv;
      float aspect = resolution.x / resolution.y;
      aspectUv.x *= aspect;

      // 3. Grid Generation
      vec2 gridUv = fract(aspectUv * gridSize);
      vec2 cellId = floor(aspectUv * gridSize);

      // 4. Dot Logic
      float baseSize = 0.15; 
      // Add subtle breathing animation
      float pulse = sin(time * 1.5 + length(cellId) * 0.2) * 0.05;
      // Add mouse interaction size boost
      float interaction = mouseInfluence * 0.8; 
      
      float dotSize = baseSize + pulse + interaction;
      float dist = sdfCircle(gridUv, dotSize);
      // Smooth edges
      float alpha = 1.0 - smoothstep(0.0, 0.05, dist);

      // 5. Final Color Mixing
      // Increase opacity when mouse hovers
      float currentOpacity = dotOpacity + (mouseInfluence * 0.4);
      vec3 finalColor = mix(bgColor, dotColor, alpha * currentOpacity);

      gl_FragColor = vec4(finalColor, 1.0);
      
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
)

function Scene() {
  const { viewport, size } = useThree()
  const { theme } = useTheme()
  
  // Controls how many dots appear (Higher = denser)
  const gridSize = 45 

  const getThemeColors = () => {
    switch (theme) {
      case 'dark':
        // Lowered opacity from 0.1 to 0.05 for "more transparent" look
        return { dotColor: '#FFFFFF', bgColor: '#000000', dotOpacity: 0.02 }
      case 'light':
        return { dotColor: '#000000', bgColor: '#FFFFFF', dotOpacity: 0.02 }
      default:
        return { dotColor: '#FFFFFF', bgColor: '#000000', dotOpacity: 0.02 }
    }
  }

  const themeColors = getThemeColors()

  // Setup the Mouse Trail texture
  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: 0.08,
    maxAge: 350,
    interpolate: 1,
    ease: (x) => x
  })

  const dotMaterial = useMemo(() => new DotMaterial(), [])

  // GLOBAL MOUSE TRACKING
  // This ensures the trail works even when hovering over other DOM elements (cards/text)
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate UV coordinates (0 to 1) from window position
      const x = e.clientX / window.innerWidth
      const y = 1 - (e.clientY / window.innerHeight) // Invert Y for UVs
      
      // Manually trigger the trail update
      onMove({ uv: { x, y } })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [onMove])

  // Update uniforms when theme changes
  useEffect(() => {
    dotMaterial.uniforms.dotColor.value.set(themeColors.dotColor)
    dotMaterial.uniforms.bgColor.value.set(themeColors.bgColor)
    dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
  }, [theme, dotMaterial, themeColors])

  // Update time and resolution every frame
  useFrame((state) => {
    dotMaterial.uniforms.time.value = state.clock.elapsedTime
    dotMaterial.uniforms.resolution.value.set(size.width, size.height)
  })

  return (
    <mesh 
      // Scale mesh to fit the screen exactly. This fixes the coordinate issues.
      scale={[viewport.width, viewport.height, 1]} 
      // Removed onPointerMove from here since we use the global window listener now
    >
      <planeGeometry args={[1, 1]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        mouseTrail={trail}
      />
    </mesh>
  )
}

export const DotScreenShader = () => {
  return (
    <Canvas
      dpr={[1, 2]} // Support high-DPI screens
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      // 'pointerEvents: none' lets clicks pass through to your cards/buttons
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Scene />
    </Canvas>
  )
}