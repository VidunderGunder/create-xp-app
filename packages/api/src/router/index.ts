import { router } from "../trpc";
import { post } from "./post";
import { secret } from "./secret";
import { example } from "./example";

export const appRouter = router({
  post,
  secret,
  example,
});

// export type definition of API
export type AppRouter = typeof appRouter;
