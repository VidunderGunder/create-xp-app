import { forwardRef } from "react";
import { View } from "react-native";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof View>;

/**
 * Starter for a clean React Native component, not using any of the styling solutions.
 */
export default forwardRef<View, Props>(function RENAME_ME(
  { children, ...props },
  ref,
) {
  return (
    <View ref={ref} {...props}>
      {children}
    </View>
  );
});
