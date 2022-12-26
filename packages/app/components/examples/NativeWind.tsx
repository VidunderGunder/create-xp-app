import { forwardRef } from "react";
import { Text, View } from "react-native";
import { ComponentPropsWithoutRef } from "react";

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof View>;

export default forwardRef<View, Props>(function NativeWind(
  { children, ...props },
  ref,
) {
  return (
    <>
      <View
        ref={ref}
        {...props}
        tw="bg-emerald-400 p-5 rounded-lg max-w-xs items-center"
      >
        <Text tw="text-white">This is a NativeWind component</Text>
        <Text tw="text-white">The rest is Dripsy + Moti</Text>
        {children}
      </View>
    </>
  );
});
