import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### published_newsletters

| name       | type                     | format  | required |
|------------|--------------------------|---------|----------|
| id         | uuid                     | string  | true     |
| title      | text                     | string  | false    |
| content    | text                     | string  | false    |
| created_at | timestamp with time zone | string  | false    |
| updated_at | timestamp with time zone | string  | false    |

*/

export const usePublishedNewsletter = (id) => useQuery({
  queryKey: ['published_newsletters', id],
  queryFn: () => fromSupabase(supabase.from('published_newsletters').select('*').eq('id', id).single()),
});

export const usePublishedNewsletters = () => useQuery({
  queryKey: ['published_newsletters'],
  queryFn: () => fromSupabase(supabase.from('published_newsletters').select('*')),
});

export const useAddPublishedNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newPublishedNewsletter) => fromSupabase(supabase.from('published_newsletters').insert([newPublishedNewsletter])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['published_newsletters'] });
    },
  });
};

export const useUpdatePublishedNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('published_newsletters').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['published_newsletters'] });
    },
  });
};

export const useDeletePublishedNewsletter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('published_newsletters').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['published_newsletters'] });
    },
  });
};