import { forwardRef } from "react";
import { styled } from "dripsy";
import { TextInput } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { motify } from "moti";

const MotiDripsy = styled(motify(TextInput)())();
// const MotiDripsy = styled(TextInput)();

export type TextInputProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof MotiDripsy>;
export type TextInputType = typeof MotiDripsy;

export default forwardRef<TextInputType, TextInputProps>(function TextInput(
  { children, sx, ...props },
  ref,
) {
  return (
    <MotiDripsy
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: theme.text.default.fontSize * 0.4,
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: theme.colors.$white,
        fontWeight: "bold",
        fontSize: theme.text.default.fontSize,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </MotiDripsy>
  );
});
