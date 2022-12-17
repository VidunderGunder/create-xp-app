import { ClerkProvider, ClerkProviderProps } from "@clerk/nextjs";
import type { SolitoAppProps } from "solito";

export type Props = Partial<SolitoAppProps> & ClerkProviderProps;
export function Auth({ children, ...pageProps }: Props) {
  return <ClerkProvider {...pageProps}>{children}</ClerkProvider>;
}
