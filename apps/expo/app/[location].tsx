import { LocationScreen } from "@acme/app";
import { Stack } from "expo-router";

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Location Details",
        }}
      />
      <LocationScreen />
    </>
  );
};
