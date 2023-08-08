import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "~/components/Sidebar";
import { api } from "~/utils/api";

const EventDetails = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string | undefined;
  const {
    data: event,
    isLoading,
    isSuccess,
  } = api.user.getEvent.useQuery({
    eventId: eventId ?? "",
  });
  const { data: sessionData } = useSession();
  const origin = "http://localhost:3000";
  const questionsUrl = `${origin}/questions/${eventId}`;

  useEffect(() => {
    if (!sessionData) {
      void router.push("/");
    }
  }, [sessionData, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="grid w-full grid-cols-5">
        <Sidebar />
        {isLoading && <p className="text-white">Loading...</p>}
        {isSuccess && (
          <div className="event-details col-span-4 p-10">
            <div className="header">
              <p className="text-white">Name: {event?.name}</p>
              <p className="text-white">Description: {event?.description}</p>
              <p className="text-white">
                Timing: {`${event?.date} ${event?.time}`}
              </p>
              <p className="text-white">
                Questions URL:{" "}
                <a
                  href={questionsUrl}
                  className="text-blue-500 hover:underline"
                >
                  {questionsUrl}
                </a>
              </p>
            </div>
            <div className="questions">
              {event?.Question.length === 0 && (
                <p className="text-white">No questions yet.</p>
              )}
              {event?.Question.length > 0 && (
                <p className="mt-10 text-xl text-white">Questions:</p>
              )}
              {event?.Question.map((question) => (
                <div
                  key={question.id}
                  className="question bg-blue/10 w-full px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                >
                  <p>{question.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default EventDetails;
