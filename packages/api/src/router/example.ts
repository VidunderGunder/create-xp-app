import { router, publicProcedure } from "../trpc";

export const example = router({
  databaseMessage: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findFirst();
  }),
});
