import { ClerkProvider, ClerkProviderProps } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";

export type Props = ClerkProviderProps & {
  [key: string]: unknown;
};
export const Auth = ({ children, ...props }: Props) => {
  return (
    <ClerkProvider tokenCache={tokenCache} {...props}>
      {children}
    </ClerkProvider>
  );
};
