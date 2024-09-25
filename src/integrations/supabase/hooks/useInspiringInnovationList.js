import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### inspiring_innovation_list

| name       | type                     | format  | required |
|------------|--------------------------|---------|----------|
| id         | bigint                   | integer | true     |
| created_at | timestamp with time zone | string  | true     |
| email      | text                     | string  | true     |

*/

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
    mutationFn: (newItem) => fromSupabase(supabase.from('inspiring_innovation_list').insert([newItem])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};

export const useUpdateInspiringInnovationListItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('inspiring_innovation_list').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};

export const useDeleteInspiringInnovationListItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('inspiring_innovation_list').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiring_innovation_list'] });
    },
  });
};
