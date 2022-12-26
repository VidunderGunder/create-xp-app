import { makeTheme } from "dripsy";

export const dripsyTheme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  types: {
    reactNativeTypesOnly: true,
  },
  buttons: {
    default: {
      backgroundColor: "$primary",
      borderRadius: 4,
      paddingVertical: 2,
      paddingHorizontal: 3,
    },
  },
  text: {
    default: {
      fontSize: 16,
    },
    p: {
      fontSize: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: "bold",
    },
  },
  linearGradients: {
    peach: ["#ff006f", "#ff2a51"],
  },
  colors: {
    $background: "#0e387b",
    $primary: "#04dfc1",
    $secondary: "#5811c9",
    $light: "#f5f5f5",
    $dark: "#1a1e2a",
    $darkSecondary: "#293040",
    $white: "#fff",
    $black: "#000",
  },
});

type MyTheme = typeof dripsyTheme;
declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}