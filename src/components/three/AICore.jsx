import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AICore() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y += 0.005;

    mesh.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.5, 2]} />

      <meshStandardMaterial
        color="#00F5FF"
        emissive="#00F5FF"
        emissiveIntensity={2}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}