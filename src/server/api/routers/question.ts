import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const questionRouter = createTRPCRouter({
  addQuestion: publicProcedure
    .input(z.object({ text: z.string(), eventId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.question.create({
        data: {
          text: input.text,
          eventId: input.eventId,
        },
      });
    }),
});
