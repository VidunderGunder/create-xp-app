import { forwardRef } from "react";
import { Text, View } from "dripsy";
import { View as ViewType } from "react-native";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  // Custom props here
} & Omit<ComponentPropsWithoutRef<typeof View>, "children">;

// ! Always rename the component name `RENAME_ME` to match the file name
export default forwardRef<ViewType, Props>(function Navigation(
  { sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={{
        // Custom styles here
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Text>Navigation</Text>
    </View>
  );
});
