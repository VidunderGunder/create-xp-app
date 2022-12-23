import { forwardRef } from "react";
import { styled } from "dripsy";
import type { View as _ViewType } from "react-native";
import { MotiView } from "moti";
import { ComponentPropsWithoutRef } from "react";

const DripsyMotiView = styled(MotiView)();

export type ViewProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiView>;
export type ViewType = _ViewType;

export default forwardRef<ViewType, ViewProps>(function View(
  { children, sx, ...props },
  ref,
) {
  return (
    <DripsyMotiView
      ref={ref}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {children}
    </DripsyMotiView>
  );
});
