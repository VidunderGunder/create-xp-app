import { forwardRef } from "react";
import { ComponentPropsWithoutRef } from "react";
import { Canvas as ThreeJSCanvas } from ".";
import { ViewType } from "../moti-dripsy/View";
import { SxProp } from "dripsy";

export type CanvasProps = {
  sx?: SxProp;
} & ComponentPropsWithoutRef<typeof ThreeJSCanvas>;
export type CanvasType = ViewType;

export default forwardRef<CanvasType, CanvasProps>(function Canvas(
  { children, style, ...props },
  ref,
) {
  return (
    <ThreeJSCanvas
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </ThreeJSCanvas>
  );
});
