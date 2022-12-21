import { forwardRef, useMemo } from "react";
import { styled, useDripsyTheme } from "dripsy";
import type { Sx } from "dripsy";
import type { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { MotiPressable } from "moti/interactions";
import Text from "./Text";

const DripsyMotiPressable = styled(MotiPressable)();

export type ButtonProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiPressable>;
export type ButtonType = ViewType;

export default forwardRef<ViewType, ButtonProps>(function Button(
  { children, sx, ...props },
  ref,
) {
  const { theme } = useDripsyTheme();
  const TextButtonSX: Sx = {
    opacity: props.disabled ? 0.69 : 1,
    backgroundColor: theme.colors.$primary,
    borderRadius: theme.text.button.fontSize * 0.4,
    paddingHorizontal: 3,
    paddingVertical: 2,
  };
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
        ...(typeof children === "string" ? TextButtonSX : {}),
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {typeof children === "string" ? (
        <Text variant="button">{children}</Text>
      ) : (
        children
      )}
    </DripsyMotiPressable>
  );
});
