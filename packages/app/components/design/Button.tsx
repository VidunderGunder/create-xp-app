import { forwardRef, useMemo } from "react";
import { styled } from "dripsy";
import type { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { MotiPressable } from "moti/interactions";
import Text from "./Text";

const DripsyMotiPressable = styled(MotiPressable, {
  themeKey: "buttons",
  defaultVariant: "default",
})((props: ComponentPropsWithoutRef<typeof MotiPressable>) => ({
  opacity: props.disabled ? 0.69 : 1,
  paddingHorizontal: 3,
  paddingVertical: 2,
}));

export type ButtonProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiPressable>;
export type ButtonType = ViewType;

export default forwardRef<ViewType, ButtonProps>(function Button(
  { children, ...props },
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
    >
      {typeof children === "string" ? (
        <Text variant="button">{children}</Text>
      ) : (
        children
      )}
    </DripsyMotiPressable>
  );
});
