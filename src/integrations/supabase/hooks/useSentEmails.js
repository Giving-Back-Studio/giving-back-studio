import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### sent_emails

| name           | type                     | format  | required |
|----------------|--------------------------|---------|----------|
| id             | uuid                     | string  | true     |
| title          | text                     | string  | false    |
| content        | text                     | string  | false    |
| recipient_list | text[]                   | array   | false    |
| sent_at        | timestamp with time zone | string  | false    |

*/

export const useSentEmail = (id) => useQuery({
  queryKey: ['sent_emails', id],
  queryFn: () => fromSupabase(supabase.from('sent_emails').select('*').eq('id', id).single()),
});

export const useSentEmails = () => useQuery({
  queryKey: ['sent_emails'],
  queryFn: () => fromSupabase(supabase.from('sent_emails').select('*')),
});

export const useAddSentEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newSentEmail) => fromSupabase(supabase.from('sent_emails').insert([newSentEmail])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sent_emails'] });
    },
  });
};

export const useUpdateSentEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('sent_emails').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sent_emails'] });
    },
  });
};

export const useDeleteSentEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('sent_emails').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sent_emails'] });
    },
  });
};