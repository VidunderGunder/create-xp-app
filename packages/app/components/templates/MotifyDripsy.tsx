import { forwardRef } from "react";
import { styled } from "dripsy";
import { View } from "react-native";
import { ComponentPropsWithoutRef } from "react";
import { motify } from "moti";

const MotiDripsy = motify(styled(View)())();

type RenameMeProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof MotiDripsy>;
type RenameMeType = typeof MotiDripsy;

/**
 * Starter for any component you wish to use Moti and Dripsy with.
 * 
 * Replace the imported `View` with any component you wish to use.
 */
export default forwardRef<RenameMeType, RenameMeProps>(function RenameMe(
  { children, sx, ...props },
  ref,
) {
  return (
    <MotiDripsy
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </MotiDripsy>
  );
});
