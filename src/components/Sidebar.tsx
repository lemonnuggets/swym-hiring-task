import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "~/utils/api";
import AddEntryModal from "./AddEntryModal";

const Sidebar = () => {
  const router = useRouter();
  const { data: events, refetch } = api.user.getEvents.useQuery();
  const [modalShown, setModalShown] = useState<boolean>(false);
  return (
    <>
      <div className="col-span-1 flex min-h-screen flex-col justify-between bg-white/10">
        <div className="top">
          <div className="events">
            {events?.map((event) => (
              <div
                key={event.id}
                className="event bg-blue/10 w-full px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={() => {
                  void router.push(`/dashboard/${event.id}`);
                }}
              >
                <p>{event.name}</p>
              </div>
            ))}
          </div>
          <div className="add flex w-full items-center justify-center">
            <button
              className="bg-blue/10 w-full px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => {
                setModalShown(true);
              }}
            >
              Add event
            </button>
            <AddEntryModal
              modalShown={modalShown}
              closeModal={() => setModalShown(false)}
              refetch={refetch}
            />
          </div>
        </div>

        <div className="bottom">
          <button
            className="bg-blue/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={() => void signOut()}
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
