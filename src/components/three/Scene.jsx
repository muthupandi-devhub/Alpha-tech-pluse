import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AICore from "./AICore";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Lights />

      <AICore />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}