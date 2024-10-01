import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

export const useMovementCreatorOpportunity = (id) => useQuery({
  queryKey: ['apply', id],
  queryFn: () => fromSupabase(supabase.from('apply').select('*').eq('id', id).single()),
});

export const useMovementCreatorOpportunities = () => useQuery({
  queryKey: ['apply'],
  queryFn: () => fromSupabase(supabase.from('apply').select('*')),
});

export const useAddMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOpportunity) => fromSupabase(supabase.from('apply').insert([newOpportunity])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply'] });
    },
  });
};

export const useUpdateMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('apply').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply'] });
    },
  });
};

export const useDeleteMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('apply').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply'] });
    },
  });
};