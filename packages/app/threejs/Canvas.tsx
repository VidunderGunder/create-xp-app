import { forwardRef } from "react";
import { ComponentPropsWithoutRef } from "react";
import { Canvas as ThreeJSCanvas } from ".";
import { ViewType } from "../components/design/View";
import { Platform } from "react-native";
import { isDevice } from "expo-device";
import View from "../components/design/View";
import Text from "../components/design/Text";
import { SxProp } from "dripsy";

export type CanvasProps = {
  sx?: SxProp;
} & ComponentPropsWithoutRef<typeof ThreeJSCanvas>;
export type CanvasType = ViewType;

export default forwardRef<CanvasType, CanvasProps>(function Canvas(
  { children, style, ...props },
  ref,
) {
  const isIOSSimulator = Platform.OS === "ios" && !isDevice;

  if (isIOSSimulator)
    return (
      <View
        ref={ref}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
        style={style}
      >
        <Text
          sx={{
            maxWidth: 250,
            textAlign: "center",
          }}
        >
          iOS simulators can't render Three.js, so you'll have to use a real
          device or an Android emulator for the time being 💔
        </Text>
      </View>
    );

  return (
    <ThreeJSCanvas
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </ThreeJSCanvas>
  );
});
