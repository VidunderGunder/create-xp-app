import { Dripsy } from "./dripsy";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { TRPCProvider } from "../utils/trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/tanstack-query";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Dripsy>{children}</Dripsy>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
