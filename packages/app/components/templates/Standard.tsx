import { forwardRef } from "react";
import { View } from "dripsy";
import type { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof View>;

export default forwardRef<ViewType, Props>(function RENAME_ME(
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
