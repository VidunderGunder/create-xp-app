import { HomeScreen } from "@acme/app";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor="#0e387b" />
      <Stack.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <HomeScreen />
    </>
  );
}
