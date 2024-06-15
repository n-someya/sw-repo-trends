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

import { useEffect, useRef, useState } from 'react';
import { getSummaries } from '@/lib/actions/summaries';
import { Button } from '@/components/ui/button';
import Summary from './Summary';


const Summaries = ({ initialSummaries }: { initialSummaries: Tables<'summary_view'>[] }) => {
  const [summaries, setSummaries] = useState<Tables<'summary_view'>[]>(initialSummaries);
  const [page, setPage] = useState(2); // NOTE: page 1 is already recived as initialSummaries.
  const loader = useRef(null);
  const MAX_AUTOLOAD_PAGE = 5;

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting && page < MAX_AUTOLOAD_PAGE) {
      setPage((prevPage) => {
        if (prevPage < MAX_AUTOLOAD_PAGE)
          return prevPage + 1;
        else
          return prevPage;
      });
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const loadMoreSummaries = async () => {
      const newSummaries = await getSummaries(page);
      setSummaries((prevSummaries) => {
        const existingIds = new Set(prevSummaries.map(summary => summary.id));
        const filteredSummaries = newSummaries.summaries.filter(summary => !existingIds.has(summary.id));
        return [...prevSummaries, ...filteredSummaries];
      });
    };
    loadMoreSummaries();
  }, [page]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {summaries.map((summary) => (
        <Summary key={summary.id} summary={summary} />
      ))}
      <div ref={loader} className="p-2"><Button variant="outline" className='w-full' onClick={() => setPage(prevPage => prevPage + 1)}>Load more...</Button></div>
    </div>
  );
};

export default Summaries;
