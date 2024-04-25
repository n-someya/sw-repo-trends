import React, { useState } from 'react';
import { Tables } from '@/database.types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SummaryProps {
  summary: Tables<'summary_view'>;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card key={summary.id} className="max-w-full bg-base-100 shadow-xl">
      <CardHeader className='pt-6 pb-1 px-6'>
        <CardTitle className='text-md'>{summary.entry_title}</CardTitle>
        <CardDescription className='flex flex-col'>
          <a href={summary.entry_url!} target="_blank" rel="noopener noreferrer">{summary.entry_url}</a>
          <span className="text-xs text-gray-500">{`${summary.published_at!.split('T')[0]} ${summary.published_at!.split('T')[1].split('.')[0]}`}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild className="text-left text-sm flex flex-1">
            <div>
              <p>{summary.summary!.split('\n')[0]}</p>
              <Button variant="outline" size="icon" className='ml-1 h-6 w-6'>
                { isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {
              summary.summary!.split('\n').map((line, index) => (
                index === 0 ? null :
                  line === "" ? <br key={index} /> : <p className="text-sm" key={index}>{line}</p>
              ))
            }
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default Summary;