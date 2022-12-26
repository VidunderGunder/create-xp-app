import { forwardRef, useMemo, useState } from "react";
import { Platform } from "react-native";
import Text from "./moti-dripsy/Text";
import Button, { ButtonProps, ButtonType } from "./moti-dripsy/Button";
import View from "./moti-dripsy/View";
import type { ViewProps, ViewType } from "./moti-dripsy/View";
import { useAuth } from "@clerk/clerk-react";
import Modal from "./moti-dripsy/Modal";
import SignIn from "./auth/SignIn";
// import { useRouter } from "solito/router";

type Props = {
  // Custom props here
} & Omit<ViewProps, "children">;

const extraPaddingOSs: typeof Platform.OS[] = ["macos", "windows", "web"];

export default forwardRef<ViewType, Props>(function Navigation(
  { sx, ...props },
  ref,
) {
  const { isSignedIn, signOut } = useAuth();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
        {isSignedIn ? (
          <NavigationButton onPress={signOut}>Sign Out</NavigationButton>
        ) : (
          <NavigationButton onPress={() => setShowModal(true)}>
            Sign In
          </NavigationButton>
        )}
      </View>
      <Modal visible={showModal} onHide={() => setShowModal(false)}>
        <SignIn onSuccess={() => setShowModal(false)} />
      </Modal>
    </>
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
