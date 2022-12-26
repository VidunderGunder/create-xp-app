import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "../moti-dripsy/View";

type RenameMeType = ViewType;
type RenameMeProps = {
  // Custom props here
} & ViewProps;

/**
 * Starter for a View using Dripsy + Moti that I most often use.
 */
export default forwardRef<RenameMeType, RenameMeProps>(function RenameMe(
  { children, sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </View>
  );
});
