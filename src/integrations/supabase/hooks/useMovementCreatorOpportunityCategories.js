import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### movement_creator_opportunity_categories

| name | type | format  | required |
|------|------|---------|----------|
| id   | int8 | integer | true     |
| name | text | string  | true     |

*/

export const useMovementCreatorOpportunityCategory = (id) => useQuery({
  queryKey: ['movement_creator_opportunity_categories', id],
  queryFn: () => fromSupabase(supabase.from('movement_creator_opportunity_categories').select('*').eq('id', id).single()),
});

export const useMovementCreatorOpportunityCategories = () => useQuery({
  queryKey: ['movement_creator_opportunity_categories'],
  queryFn: () => fromSupabase(supabase.from('movement_creator_opportunity_categories').select('*')),
});

export const useAddMovementCreatorOpportunityCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCategory) => fromSupabase(supabase.from('movement_creator_opportunity_categories').insert([newCategory])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunity_categories'] });
    },
  });
};

export const useUpdateMovementCreatorOpportunityCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('movement_creator_opportunity_categories').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunity_categories'] });
    },
  });
};

export const useDeleteMovementCreatorOpportunityCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('movement_creator_opportunity_categories').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunity_categories'] });
    },
  });
};