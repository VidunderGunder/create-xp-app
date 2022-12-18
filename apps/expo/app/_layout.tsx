import { Provider } from "@acme/app/provider";
import { Stack } from "expo-router";

export default function Root() {
  return (
    <Provider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 150,
        }}
      />
    </Provider>
  );
}
