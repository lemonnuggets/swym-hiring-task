import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "~/utils/api";

const Question = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string | undefined;
  const {
    data: event,
    isLoading,
    isError,
  } = api.event.getEvent.useQuery({
    id: eventId ?? "",
  });
  const { mutate } = api.question.addQuestion.useMutation();
  const [text, setText] = useState("");

  if (eventId === undefined) return <p>Invalid event</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching event</p>;
  if (!event) return <p>Invalid event</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="flex flex-col justify-start text-xl">
        <p className="text-white">Name: {event?.name}</p>
        <p className="text-white">Description: {event?.description}</p>
        <p className="text-white">Timing: {`${event?.date} ${event?.time}`}</p>
        <p className="mt-10 text-white">You can enter your question below.</p>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
            mutate(
              {
                eventId: eventId,
                text,
              },
              {
                onSuccess: () => {
                  e.currentTarget.text.value = "";
                },
              }
            );
          }}
          className="flex flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            name="text"
            className="block w-full rounded-md border-gray-300 px-4 py-2 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 sm:text-sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Question;
