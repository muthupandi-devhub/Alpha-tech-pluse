export default function Lights() {
  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, 3, 4]}
        intensity={5}
        color="#00F5FF"
      />

      <pointLight
        position={[4, -2, 4]}
        intensity={4}
        color="#7C3AED"
      />
    </>
  );
}