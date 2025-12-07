import { Suspense } from 'react';
import ServerSideSummaries from "@/components/summary/ServerSideSummaries";
import { createClient } from "@/utils/supabase/server";
export default async function Index() {
  const canInitSupabaseClient = async () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      await createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = await canInitSupabaseClient();

  return (
    <div>
      <div className="animate-in flex-1 flex flex-col w-full px-3 pt-3">
        <main className="flex-1 flex flex-col">
          <Suspense fallback={<div>読み込み中...</div>}>
            <ServerSideSummaries />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
