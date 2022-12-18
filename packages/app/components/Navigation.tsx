import { forwardRef, useMemo } from "react";
import { Platform } from "react-native";
import Text from "./design/Text";
import Button, { ButtonProps, ButtonType } from "./design/Button";
import View from "./design/View";
import type { ViewProps, ViewType } from "./design/View";
import Gap from "./design/Gap";

type Props = {
  // Custom props here
} & Omit<ViewProps, "children">;

const extraPaddingOSs: typeof Platform.OS[] = ["macos", "windows", "web"];

export default forwardRef<ViewType, Props>(function Navigation(
  { sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: extraPaddingOSs.includes(Platform.OS) ? 4 : 1,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      <NavigationButton>Home</NavigationButton>
      <Gap size={15} />
      <NavigationButton>Sign In</NavigationButton>
    </View>
  );
});

type NavigationButtonProps = {
  // Custom props here
} & ButtonProps;

const NavigationButton = forwardRef<ButtonType, NavigationButtonProps>(
  function NavigationButton({ children, ...props }, ref) {
    return (
      <Button
        ref={ref}
        {...props}
        // sx={(theme) => ({
        //   // Custom styles here
        //   ...(typeof sx === "function" ? sx(theme) : sx),
        // })}
        animate={useMemo(
          () =>
            ({ hovered, pressed }) => {
              "worklet";

              return {
                borderRadius: 6,
                backgroundColor: hovered
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(0, 0, 0, 0)",
                paddingVertical: 10.01,
                paddingHorizontal: 20.01,
                position: "relative",
                top: pressed ? 1 : 0,
              };
            },
          [],
        )}
      >
        {typeof children === "string" ? (
          <Text
            sx={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Button>
    );
  },
);
