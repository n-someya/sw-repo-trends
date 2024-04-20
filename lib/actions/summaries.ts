'use server'

import { Tables } from '@/database.types';
import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export async function getSummaries() {
  let { data: summaries, error } = await supabase
    .from('summary_view')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('error', error);
    throw error;
  }

  return summaries as Tables<'summary_view'>[];
};

