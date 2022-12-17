import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { View, SafeAreaView } from "dripsy";
import type { SafeAreaView as SafeAreaViewType } from "react-native";

type Props = {
  noImage?: boolean;
  // Custom props here
} & ComponentPropsWithoutRef<typeof SafeAreaView>;

export default forwardRef<SafeAreaViewType, Props>(function MainLayout(
  { children, sx, ...props }: Props,
  ref,
) {
  return (
    <View
      sx={{
        position: "absolute",
        zIndex: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "#2951a1",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <SafeAreaView
        ref={ref}
        {...props}
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#0e387b",
          ...sx,
        }}
      >
        <View
          sx={{
            height: "100%",
            width: "100%",
            padding: 2,
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
});
