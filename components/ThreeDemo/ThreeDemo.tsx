import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Box } from "./Box";

export function ThreeDemo() {
  const boxes = [];
  for (let i = 0; i < 100; i++) {
    const x = THREE.MathUtils.randFloat(-20, 20);
    const y = THREE.MathUtils.randFloat(-20, 20);
    const z = THREE.MathUtils.randFloat(-20, 20);
    boxes.push(<Box key={i} position={[x, y, z]} />);
  }
  return (
    <Canvas style={{ background: "#dcdcdc9e" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[50, 50, 50]} intensity={1} />
      <OrbitControls makeDefault enableDamping />
      <primitive object={new THREE.AxesHelper(20)} />
      {boxes}
    </Canvas>
  );
}
