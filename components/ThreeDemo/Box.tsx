import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [clicked, click] = useState(false);
  let direction = 1;
  let yDirection = 1;
  let zDirection = 1;

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    if (ref.current.position.x > 10) {
      direction = -1;
    }
    if (ref.current.position.x < -10) {
      direction = 1;
    }
    if (ref.current.position.y > 10) {
      yDirection = -1;
    }
    if (ref.current.position.y < -10) {
      yDirection = 1;
    }
    if (ref.current.position.z > 10) {
      zDirection = -1;
    }
    if (ref.current.position.z < -10) {
      zDirection = 1;
    }
    ref.current.position.x += (Math.random() / 5) * direction;
    ref.current.position.y += (Math.random() / 6) * yDirection;
    ref.current.position.z += (Math.random() / 7) * zDirection;
  });

  const color = new THREE.Color(Math.random(), Math.random(), Math.random());

  return (
    <mesh {...props} ref={ref} scale={clicked ? 1.5 : 1}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
