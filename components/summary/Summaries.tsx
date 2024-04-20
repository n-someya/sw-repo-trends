"use client"

import { Tables } from '@/database.types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react';

import { useEffect, useState } from 'react';
import { getSummaries } from '@/lib/actions/summaries';
import { Button } from '@/components/ui/button';
import Summary from './Summary';


const Summaries = ({ initialSummaries }: { initialSummaries: Tables<'summary_view'>[] }) => {

  const [summaries, setSummaries] = useState<Tables<'summary_view'>[]>(initialSummaries);

  // TODO: when scroll bottom, load more summaries.
  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // load more summaries
      // TODO: when pagination of getSummaries is implemented, use it.
      // const moreSummaries = await getSummaries();
      // setSummaries(summaries.concat(moreSummaries));  
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {summaries!.map((summary) => (
        <Summary summary={summary} />
      ))}
    </div>
  );
};

export default Summaries;
