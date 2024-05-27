'use server'

import { Tables } from '@/database.types';
import { createClient } from '@/utils/supabase/server';
import { NUM_OF_SUMMARIES_PER_PAGE } from '@/lib/constants';

export async function getSummaries(page: number, feedId: number | null = null, limit: number = NUM_OF_SUMMARIES_PER_PAGE) {
  const supabase = createClient();
  // NOTE: supabase client must aware cookie of each user.
  const startIndex = (page - 1) * limit;
  let query = supabase
    .from('summary_view')
    .select('*', { count: 'exact' })
    .order('published_at', { ascending: false })
    .range(startIndex, startIndex + limit - 1);

  if (feedId !== null) {
    query = query.eq('feed_id', feedId);
  }

  let { data: summaries, error, count } = await query;

  if (error) {
    console.error('error', error);
    throw error;
  }

  return {
    summaries: summaries as Tables<'summary_view'>[],
    count
  };
};
