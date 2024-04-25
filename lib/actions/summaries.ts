'use server'

import { Tables } from '@/database.types';
import { createClient } from '@/utils/supabase/server';
import { NUM_OF_SUMMARIES_PER_PAGE } from '@/lib/constants';

const supabase = createClient();

export async function getSummaries(page: number, limit: number = NUM_OF_SUMMARIES_PER_PAGE) {
  const startIndex = (page - 1) * limit;
  let { data: summaries, error, count } = await supabase
    .from('summary_view')
    .select('*', { count: 'exact' })
    .order('published_at', { ascending: false })
    .range(startIndex, startIndex + limit - 1);

  if (error) {
    console.error('error', error);
    throw error;
  }

  return {
    summaries: summaries as Tables<'summary_view'>[],
    count
  };
};
