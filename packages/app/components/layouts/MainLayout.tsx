import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { View, SafeAreaView } from "dripsy";
import { SafeAreaView as SafeAreaViewType } from "react-native";
import Navigation from "../Navigation";
import Gradient from "../design/Gradient";

type Props = {
  noImage?: boolean;
  // Custom props here
} & ComponentPropsWithoutRef<typeof SafeAreaView>;

export default forwardRef<SafeAreaViewType, Props>(function MainLayout(
  { children, sx, ...props }: Props,
  ref,
) {
  return (
    <>
      <Gradient />
      <SafeAreaView
        ref={ref}
        {...props}
        sx={(theme) => ({
          height: "100%",
          width: "100%",
          ...(typeof sx === "function" ? sx(theme) : sx),
        })}
      >
        <View
          sx={{
            height: "100%",
            width: "100%",
            padding: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          {children}
          <Navigation />
        </View>
      </SafeAreaView>
    </>
  );
});
