// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// function Particles() {
//   const points = useRef();
//   const particlesCount = 1200; // 🔥 Increased particles

//   const { positions, scales } = useMemo(() => {
//     const positions = new Float32Array(particlesCount * 3);
//     const scales = new Float32Array(particlesCount);

//     for (let i = 0; i < particlesCount; i++) {
//       const i3 = i * 3;

//       positions[i3] = (Math.random() - 0.5) * 25;      // X
//       positions[i3 + 1] = (Math.random() - 0.5) * 25;  // Y
//       positions[i3 + 2] = (Math.random() - 0.5) * 25;  // Z

//       scales[i] = Math.random();
//     }

//     return { positions, scales };
//   }, []);

//   useFrame((state) => {
//     const time = state.clock.getElapsedTime();

//     if (points.current) {
//       points.current.rotation.y = time * 0.04;
//       points.current.rotation.x = time * 0.02;

//       const positions = points.current.geometry.attributes.position.array;

//       for (let i = 0; i < particlesCount; i++) {
//         const i3 = i * 3;

//         positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.0005;
//       }

//       points.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particlesCount}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>

//       <pointsMaterial
//         size={0.05}
//         color="#ff2a2a"
//         sizeAttenuation
//         transparent
//         opacity={0.9}
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// export default function ParticlesBackground() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 8] }}
//       dpr={[1, 2]}
//       gl={{ antialias: false, powerPreference: "high-performance" }}
//     >
//       <Particles />
//     </Canvas>
//   );
// }


import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles() {
  const points = useRef();
  const particlesCount = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 22;
      pos[i3 + 1] = (Math.random() - 0.5) * 22;
      pos[i3 + 2] = (Math.random() - 0.5) * 22;
    }

    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (points.current) {
      points.current.rotation.y = time * 0.03;
      points.current.rotation.x = time * 0.01;

      const arr = points.current.geometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        arr[i3 + 1] += Math.sin(time + arr[i3]) * 0.001;
      }

      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#ff3b3b"
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6] }}
        dpr={[1, 2]}
        gl={{ antialias: false }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
