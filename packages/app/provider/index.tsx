import { Dripsy } from "./dripsy";
import { SafeArea } from "./safe-area";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/tanstack-query";
import { Auth } from "./auth";
import type { Props as AuthProps } from "./auth";

const apiKey = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API ?? "";

type Props = Omit<AuthProps, "children"> & {
  children: React.ReactNode;
};
export function Provider({ children, ...pageProps }: Props) {
  return (
    <>
      <Auth frontendApi={apiKey} {...pageProps}>
        <QueryClientProvider client={queryClient}>
          <SafeArea>
            <Dripsy>{children}</Dripsy>
          </SafeArea>
        </QueryClientProvider>
      </Auth>
    </>
  );
}
