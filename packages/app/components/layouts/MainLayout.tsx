import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { View, SafeAreaView } from "dripsy";
import { SafeAreaView as SafeAreaViewType } from "react-native";
import Navigation from "../Menu";
import Gradient from "../moti-dripsy/Gradient";
import Logo from "../Logo";

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
            paddingHorizontal: 2,
            paddingVertical: 30,
          }}
        >
          <Logo />
          <View
            sx={{
              flexGrow: 1,
              maxHeight: "100%",
            }}
          >
            {children}
          </View>
          <Navigation />
        </View>
      </SafeAreaView>
    </>
  );
});
