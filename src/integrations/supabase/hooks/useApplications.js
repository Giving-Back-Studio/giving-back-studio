import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

export const useAddApplication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newApplication) => fromSupabase(supabase.from('applications').insert([newApplication])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};