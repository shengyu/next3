import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [clicked, click] = useState(false);
  const [direction, setDirection] = useState(1);
  const [yDirection, setYDirection] = useState(1);
  const [zDirection, setZDirection] = useState(1);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    if (ref.current.position.x > 20) {
      setDirection(-1);
    }
    if (ref.current.position.x < -20) {
      setDirection(1);
    }
    if (ref.current.position.y > 20) {
      setYDirection(-1);
    }
    if (ref.current.position.y < -20) {
      setYDirection(1);
    }
    if (ref.current.position.z > 20) {
      setZDirection(-1);
    }
    if (ref.current.position.z < -20) {
      setZDirection(1);
    }
    ref.current.position.x += (Math.random() / 5) * direction;
    ref.current.position.y += (Math.random() / 6) * yDirection;
    ref.current.position.z += (Math.random() / 7) * zDirection;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => {
        setDirection(-1 * direction);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}
