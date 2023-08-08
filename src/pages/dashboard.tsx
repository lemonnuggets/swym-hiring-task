import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Dashboard() {
  const { data: sessionData } = useSession();
  const router = useRouter();

  if (!sessionData) {
    void router.push("/");
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">You are not logged in.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            You are logged in as {sessionData.user?.name}.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
