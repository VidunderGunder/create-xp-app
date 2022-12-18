import { forwardRef } from "react";
import { Canvas, Circle, Group, SkiaDomView } from "@shopify/react-native-skia";
import type { CanvasProps } from "@shopify/react-native-skia";

type Props = {
  // Custom props here
} & Partial<CanvasProps>;

export default forwardRef<SkiaDomView, Props>(function Skia(
  { children, ...props },
  ref,
) {
  const size = 256;
  const r = size * 0.33;
  return (
    // @ts-expect-error - These guys need to work on their types 🤷‍♂️
    <Canvas style={{ flex: 1 }} ref={ref} {...props}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={size - r} cy={r} r={r} color="magenta" />
        <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
      </Group>
      {children}
    </Canvas>
  );
});
