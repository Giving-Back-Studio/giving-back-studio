import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const useInspiringInnovationListItem = (id) => useQuery({
  queryKey: ['inspiring_innovation_list', id],
  queryFn: () => fromSupabase(supabase.from('inspiring_innovation_list').select('*').eq('id', id).single()),
});

export const useInspiringInnovationList = () => useQuery({
  queryKey: ['inspiring_innovation_list'],
  queryFn: () => fromSupabase(supabase.from('inspiring_innovation_list').select('*')),
});

export const useAddInspiringInnovationListItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newItem) => {
      const { data, error } = await supabase.from('inspiring_innovation_list').insert([newItem]);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};

export const useUpdateInspiringInnovationListItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updateData }) => {
      const { data, error } = await supabase.from('inspiring_innovation_list').update(updateData).eq('id', id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};

export const useDeleteInspiringInnovationListItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const { data, error } = await supabase.from('inspiring_innovation_list').delete().eq('id', id);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};
