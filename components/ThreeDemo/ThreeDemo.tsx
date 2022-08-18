import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";

export function ThreeDemo() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[-20, -20, 20]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
