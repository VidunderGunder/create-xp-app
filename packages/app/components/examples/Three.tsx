import { forwardRef, useEffect, useRef, useState } from "react";
import Canvas, { CanvasProps, CanvasType } from "../../threejs/Canvas";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

type BoxProps = JSX.IntrinsicElements["mesh"];

function Box(props: BoxProps) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (mesh.current !== null) mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    if (mesh.current !== null) mesh.current.rotation.z = 6;
  }, []);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={active ? "red" : hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export type ThreeProps = {
  children?: React.ReactNode;
} & Partial<CanvasProps>;
export type ThreeType = CanvasType;

export default forwardRef<ThreeType, ThreeProps>(function Three(
  { children, ...props },
  /**
   * NB: Ref may have differing types on web and native (your IDE most likely only shows the native types)
   */
  ref,
) {
  return (
    <Canvas ref={ref} {...props}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      {children}
    </Canvas>
  );
});
