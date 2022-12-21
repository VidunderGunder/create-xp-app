import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "./src/router";

export type { AppRouter } from "./src/router";
export { appRouter } from "./src/router";

export { createContext } from "./src/context";
export type { Context } from "./src/context";
/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
