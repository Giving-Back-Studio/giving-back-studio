import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

export const useMovementCreatorOpportunity = (id) => useQuery({
  queryKey: ['applications', id],
  queryFn: () => fromSupabase(supabase.from('applications').select('*').eq('id', id).single()),
});

export const useMovementCreatorOpportunities = () => useQuery({
  queryKey: ['applications'],
  queryFn: () => fromSupabase(supabase.from('applications').select('*')),
});

export const useAddMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOpportunity) => fromSupabase(supabase.from('applications').insert([newOpportunity])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};

export const useUpdateMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('applications').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};

export const useDeleteMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('applications').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};