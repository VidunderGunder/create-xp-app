import { forwardRef } from "react";
import Card from "../moti-dripsy/Card";
import Gradient from "../moti-dripsy/Gradient";
import Text from "../moti-dripsy/Text";
import View, { ViewProps, ViewType } from "../moti-dripsy/View";
import { api } from "@acme/api/src/client";
import { useAuth } from "@clerk/clerk-react";
import Button from "../moti-dripsy/Button";
import { type Sx } from "dripsy";

type TRPCType = ViewType;
type TRPCProps = {
  // Custom props here
} & ViewProps;

const overlaySx: Sx = {
  position: "absolute",
  paddingVertical: 9,
  paddingHorizontal: 12,
};

export default forwardRef<TRPCType, TRPCProps>(function TRPC(
  { children, sx, ...props },
  ref,
) {
  const { isSignedIn } = useAuth();
  const message = api.example.databaseMessage.useQuery();
  const secret = api.secret.secretMessage.useQuery(undefined, {
    enabled: isSignedIn ?? false,
  });

  function refresh() {
    message.remove();
    message.refetch();
    if (isSignedIn) {
      secret.remove();
      secret.refetch();
    }
  }

  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      <Card
        sx={() => ({
          height: 100,
          width: 250,
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <Gradient gradients={[["#ff00b3", "#FF008C"]]} />
        <Text
          sx={{
            fontSize: 10,
            ...overlaySx,
            top: 0,
            left: 0,
          }}
        >
          TRPC says:
        </Text>
        {!isSignedIn ? (
          <Text
            sx={{
              fontSize: 10,
              ...overlaySx,
              bottom: 0,
              right: 0,
              paddingVertical: 9,
              paddingHorizontal: 12,
            }}
          >
            ...and kept something secret
          </Text>
        ) : null}
        <View
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <Button
            onPress={refresh}
            sx={(theme) => ({
              fontSize: 10,
              backgroundColor: theme.colors?.$secondary,
              position: "relative",
              paddingTop: 9,
              paddingBottom: 10,
              paddingHorizontal: 12,
              borderBottomLeftRadius: 12,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
            })}
          >
            <Text
              sx={{
                fontSize: 10,
                userSelect: "none",
              }}
            >
              Refresh
            </Text>
          </Button>
        </View>
        <Text>
          {message.isLoading
            ? "Loading..."
            : message.isError
            ? "Error!"
            : message.data?.content ?? "No data"}
        </Text>

        {isSignedIn ? (
          <Text>
            {secret.isLoading
              ? "Loading..."
              : secret.isError
              ? "Error!"
              : secret.data ?? "No data"}
          </Text>
        ) : null}
        {children}
      </Card>
    </View>
  );
});
