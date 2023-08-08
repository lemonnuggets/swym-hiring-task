import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getEvent: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.event.findFirst({
        where: {
          id: input.eventId,
          userId: ctx.session?.user?.id,
        },
      });
    }),
  getEvents: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      where: {
        userId: ctx.session?.user?.id,
      },
    });
  }),
  addEvent: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        date: z.string(),
        time: z.string(),
        ttl: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      if (input.ttl < 0) throw new Error("TTL must be positive");

      return ctx.prisma.event.create({
        data: {
          name: input.name,
          description: input.description,
          date: input.date,
          time: input.time,
          ttl: input.ttl,
          userId: ctx.session?.user?.id,
        },
      });
    }),
});
