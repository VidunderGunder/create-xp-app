import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "./View";

export type GapProps = {
  // Custom props here
  size?: number;
} & Omit<ViewProps, "children">;
export type GapType = ViewType;

export default forwardRef<GapType, GapProps>(function Gap(
  { size = 4, sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        width: size,
        height: size,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    />
  );
});
