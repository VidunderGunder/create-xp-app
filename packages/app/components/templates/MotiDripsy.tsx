import { forwardRef } from "react";
import { styled } from "dripsy";
import { View } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { motify } from "moti";

const MotiDripsyView = motify(styled(View)())();

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof MotiDripsyView>;
type Type = typeof MotiDripsyView;

// ! Always rename the component name `RENAME_ME` to match the file name
export default forwardRef<Type, Props>(function RENAME_ME(
  { children, sx, ...props },
  ref,
) {
  return (
    <MotiDripsyView
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </MotiDripsyView>
  );
});
