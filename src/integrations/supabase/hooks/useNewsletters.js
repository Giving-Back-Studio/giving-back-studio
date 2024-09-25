import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### newsletters

| name         | type                     | format                  | required |
|--------------|--------------------------|-------------------------|----------|
| id           | uuid                     | string                  | true     |
| user_id      | uuid                     | string                  | false    |
| title        | text                     | string                  | true     |
| content      | text                     | string                  | false    |
| is_draft     | boolean                  | boolean                 | false    |
| is_published | boolean                  | boolean                 | false    |
| created_at   | timestamp with time zone | string                  | true     |
| updated_at   | timestamp with time zone | string                  | true     |
| content_json | jsonb                    | object                  | false    |

*/

export const useNewsletter = (id) => useQuery({
  queryKey: ['newsletters', id],
  queryFn: () => fromSupabase(supabase.from('newsletters').select('*').eq('id', id).single()),
});

export const useNewsletters = () => useQuery({
  queryKey: ['newsletters'],
  queryFn: () => fromSupabase(supabase.from('newsletters').select('*')),
});

export const useAddNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newNewsletter) => fromSupabase(supabase.from('newsletters').insert([newNewsletter])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletters'] });
    },
  });
};

export const useUpdateNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('newsletters').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletters'] });
    },
  });
};

export const useDeleteNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('newsletters').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletters'] });
    },
  });
};