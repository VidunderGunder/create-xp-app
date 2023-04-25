import { Dripsy } from "./dripsy";
import { SafeArea } from "./safe-area";
import { Auth } from "./auth";
import type { Props as AuthProps } from "./auth";
import { QueryProvider } from "./query";

const apiKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

type Props = Omit<AuthProps, "children"> & {
  children: React.ReactNode;
};
export function Provider({ children, ...pageProps }: Props) {
  return (
    <>
      <Auth frontendApi={apiKey} {...pageProps}>
        <QueryProvider>
          <SafeArea>
            <Dripsy>{children}</Dripsy>
          </SafeArea>
        </QueryProvider>
      </Auth>
    </>
  );
}
