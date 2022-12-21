export { authOptions } from "./src/auth-options";
export { getServerSession } from "./src/get-session";

export type { Session } from "next-auth";

// We use Clerk atm, but may switch to NextAuth if it gets Expo/React Native support
// So this library will stay for the time being to make it faster to switch
