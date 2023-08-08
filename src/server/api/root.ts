import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { eventRouter } from "./routers/event";
import { questionRouter } from "./routers/question";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  question: questionRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
