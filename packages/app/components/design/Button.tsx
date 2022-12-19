import { forwardRef, useMemo } from "react";
import { styled } from "dripsy";
import type { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { MotiPressable } from "moti/interactions";

const DripsyMotiPressable = styled(MotiPressable)();

export type ButtonProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiPressable>;
export type ButtonType = ViewType;

export default forwardRef<ViewType, ButtonProps>(function Button(
  { children, sx, ...props },
  ref,
) {
  return (
    <DripsyMotiPressable
      ref={ref}
      transition={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";
            const active = hovered || pressed;
            return {
              type: "timing",
              duration: active ? 1 : 150,
              // easing: active ? "easeOut" : "easeIn",
            };
          },
        [],
      )}
      {...props}
      sx={(theme) => ({
        userSelect: "none",
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </DripsyMotiPressable>
  );
});
