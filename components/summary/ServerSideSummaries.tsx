import { getSummaries } from "@/lib/actions/summaries";
import Summaries from "@/components/summary/Summaries";

export default async function ServerSideSummaries() {

//   await new Promise(resolve => setTimeout(resolve, 3000)) // 3秒待つ
  const summaries = await getSummaries(1);

  return (
      <Summaries initialSummaries={summaries["summaries"]} />
  );
}