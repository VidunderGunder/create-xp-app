import { protectedProcedure, publicProcedure, router } from "../trpc";

export const secret = router({
  clerkUser: publicProcedure.query(({ ctx }) => {
    return ctx.clerkuser;
  }),
  secretMessage: protectedProcedure.query(() => {
    return "This is a secret 🤫";
  }),
});
