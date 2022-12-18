import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { View, SafeAreaView } from "dripsy";
import type { SafeAreaView as SafeAreaViewType } from "react-native";
import Navigation from "../Navigation";

type Props = {
  noImage?: boolean;
  // Custom props here
} & ComponentPropsWithoutRef<typeof SafeAreaView>;

export default forwardRef<SafeAreaViewType, Props>(function MainLayout(
  { children, sx, ...props }: Props,
  ref,
) {
  return (
    <SafeAreaView
      ref={ref}
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.colors.$background,
        height: "100%",
        width: "100%",
        ...sx,
      })}
    >
      <View
        sx={{
          height: "100%",
          width: "100%",
          padding: 2,
          position: "relative",
        }}
      >
        {children}
        <Navigation />
      </View>
    </SafeAreaView>
  );
});
