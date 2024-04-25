import { createClient } from "@/utils/supabase/server";
import Summaries from "@/components/summary/Summaries";
import { getSummaries } from "@/lib/actions/summaries";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const summaries = await getSummaries(1);

  return (
    <div className="flex-1 max-w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10">
        <div className="w-full flex justify-between items-center h-10 p-3 text-sm">
          <span className="text-lg font-bold underline decoration-sky-200">Software Repo Trends</span>
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col w-full px-3 pt-3">
        <main className="flex-1 flex flex-col">
          <Summaries initialSummaries={summaries["summaries"]} />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
