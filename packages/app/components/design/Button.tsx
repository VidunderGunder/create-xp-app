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
              type: "spring",
              delay: active ? 0 : 100,
              stiffness: active ? 1000 : 250,
              damping: 40,
              mass: active ? 0.25 : 1,
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
