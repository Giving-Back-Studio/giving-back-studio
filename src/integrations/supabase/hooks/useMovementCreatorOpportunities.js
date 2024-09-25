import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### movement_creator_opportunities

| name                | type                     | format  | required |
|---------------------|--------------------------|---------|----------|
| id                  | bigint                   | integer | true     |
| name                | text                     | string  | true     |
| opportunity_details | text                     | string  | true     |
| created_by          | uuid                     | string  | true     |
| created_at          | timestamp with time zone | string  | true     |
| category_id         | integer                  | integer | true     |

Foreign Key Relationships:
- category_id references movement_creator_opportunity_categories.id

*/

export const useMovementCreatorOpportunity = (id) => useQuery({
  queryKey: ['movement_creator_opportunities', id],
  queryFn: () => fromSupabase(supabase.from('movement_creator_opportunities').select('*').eq('id', id).single()),
});

export const useMovementCreatorOpportunities = () => useQuery({
  queryKey: ['movement_creator_opportunities'],
  queryFn: () => fromSupabase(supabase.from('movement_creator_opportunities').select('*')),
});

export const useAddMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOpportunity) => fromSupabase(supabase.from('movement_creator_opportunities').insert([newOpportunity])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunities'] });
    },
  });
};

export const useUpdateMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('movement_creator_opportunities').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunities'] });
    },
  });
};

export const useDeleteMovementCreatorOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('movement_creator_opportunities').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movement_creator_opportunities'] });
    },
  });
};