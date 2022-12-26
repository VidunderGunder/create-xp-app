import { DripsyProvider } from "dripsy";
import {dripsyTheme} from "../theme/dripsy";


export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={dripsyTheme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  );
}
