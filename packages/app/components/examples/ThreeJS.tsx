import { forwardRef, useEffect, useRef, useState } from "react";
import Canvas from "../threejs/Canvas";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import View, { ViewProps, ViewType } from "../moti-dripsy/View";

type BoxProps = JSX.IntrinsicElements["mesh"];

const boxSize = 1.675;

function Box(props: BoxProps) {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    if (mesh.current !== null)
      mesh.current.rotation.y = clock.getElapsedTime() * 0.69;
  });

  useEffect(() => {
    if (mesh.current !== null) mesh.current.rotation.z = 6;
  }, []);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.9 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[boxSize, boxSize, boxSize]} />
      <meshStandardMaterial
        color={active ? "red" : hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export type ThreeProps = {
  children?: React.ReactNode;
} & Partial<ViewProps>;
export type ThreeType = ViewType;

export default forwardRef<ThreeType, ThreeProps>(function Three(
  { children, ...props },
  /**
   * NB: Ref may have differing types on web and native (your IDE most likely only shows the native types)
   */
  ref,
) {
  return (
    <View
      ref={ref}
      sx={{
        flexGrow: 1,
        width: "100%",
        maxHeight: 250,
      }}
      {...props}
    >
      <Canvas
        // Adjust field of view
        camera={{ fov: 30 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        {children}
      </Canvas>
    </View>
  );
});
