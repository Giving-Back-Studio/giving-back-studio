import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### emails

| name           | type                     | format  | required |
|----------------|--------------------------|---------|----------|
| id             | uuid                     | string  | true     |
| title          | text                     | string  | true     |
| content        | text                     | string  | true     |
| status         | text                     | string  | true     |
| recipient_list | text[]                   | array   | true     |
| sent_at        | timestamp with time zone | string  | false    |
| created_at     | timestamp with time zone | string  | true     |
| updated_at     | timestamp with time zone | string  | true     |

*/

export const useEmail = (id) => useQuery({
  queryKey: ['emails', id],
  queryFn: () => fromSupabase(supabase.from('emails').select('*').eq('id', id).single()),
});

export const useEmails = () => useQuery({
  queryKey: ['emails'],
  queryFn: () => fromSupabase(supabase.from('emails').select('*')),
});

export const useAddEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newEmail) => fromSupabase(supabase.from('emails').insert([newEmail])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emails'] });
    },
  });
};

export const useUpdateEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('emails').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emails'] });
    },
  });
};

export const useDeleteEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('emails').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emails'] });
    },
  });
};