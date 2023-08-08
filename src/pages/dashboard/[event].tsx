import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "~/components/Sidebar";
import { api } from "~/utils/api";

const EventDetails = () => {
  const router = useRouter();
  const eventId = router.query.event as string | undefined;
  const {
    data: events,
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
            <p className="text-white">Name: {events?.name}</p>
            <p className="text-white">Description: {events?.description}</p>
            <p className="text-white">
              Timing: {`${events?.date} ${events?.time}`}
            </p>
            <p className="text-white">
              Questions URL:{" "}
              <a href={questionsUrl} className="text-blue-500 hover:underline">
                {questionsUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default EventDetails;
