import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../router";

/**
 * A set of typesafe hooks for consuming your API.
 */
export const api = createTRPCReact<AppRouter>();
