import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
  getEvent: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.event.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
});
