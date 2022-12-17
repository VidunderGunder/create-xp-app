import { forwardRef } from "react";
import { View } from "dripsy";
import { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof View>;

// ! Always rename the component name `RENAME_ME` to match the file name
export default forwardRef<ViewType, Props>(function RENAME_ME(
  { children, sx, ...props },
  ref,
) {
  return (
    <View ref={ref} {...props} sx={{
      // Custom styles here
      ...sx,
    }}>
      {children}
    </View>
  );
});
