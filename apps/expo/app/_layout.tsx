import { Provider } from "@acme/app";
import { Stack } from "expo-router";

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  );
}
