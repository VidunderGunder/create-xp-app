import { DripsyProvider, makeTheme } from "dripsy";

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  types: {
    reactNativeTypesOnly: true,
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

type MyTheme = typeof theme;
declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  );
}
