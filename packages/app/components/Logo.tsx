import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "./moti-dripsy/View";
import Text from "./moti-dripsy/Text";

type LogoType = ViewType;
type LogoProps = {
  // Custom props here
} & ViewProps;

export default forwardRef<LogoType, LogoProps>(function Logo(
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
      <Text
        sx={{
          fontSize: [42, null, 90],
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 1,
        }}
      >
        Create{" "}
        <Text
          sx={(theme) => ({
            color: theme.colors.$primary,
          })}
        >
          XP
        </Text>{" "}
        App
      </Text>
      {children}
    </View>
  );
});
