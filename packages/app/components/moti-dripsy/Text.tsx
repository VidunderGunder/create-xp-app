import { forwardRef } from "react";
import { Text } from "dripsy";
import { Text as _TextType } from "react-native";
import { ComponentPropsWithoutRef } from "react";

export type TextProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof Text>;

export type TextType = _TextType;
export default forwardRef<TextType, TextProps>(function RENAME_ME(
  { children, sx, ...props },
  ref,
) {
  return (
    <Text
      ref={ref}
      sx={(theme) => ({
        // Custom styles here
        color: theme.colors.$white,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {children}
    </Text>
  );
});
