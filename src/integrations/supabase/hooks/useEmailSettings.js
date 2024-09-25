import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

/*
### email_settings

| name             | type                     | format  | required |
|------------------|--------------------------|---------|----------|
| id               | uuid                     | string  | true     |
| sendgrid_api_key | text                     | string  | true     |
| from_email       | text                     | string  | true     |
| created_at       | timestamp with time zone | string  | true     |
| updated_at       | timestamp with time zone | string  | true     |

*/

export const useEmailSetting = (id) => useQuery({
  queryKey: ['email_settings', id],
  queryFn: () => fromSupabase(supabase.from('email_settings').select('*').eq('id', id).single()),
});

export const useEmailSettings = () => useQuery({
  queryKey: ['email_settings'],
  queryFn: () => fromSupabase(supabase.from('email_settings').select('*')),
});

export const useAddEmailSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newEmailSetting) => fromSupabase(supabase.from('email_settings').insert([newEmailSetting])),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email_settings'] });
    },
  });
};

export const useUpdateEmailSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('email_settings').update(updateData).eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email_settings'] });
    },
  });
};

export const useDeleteEmailSetting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => fromSupabase(supabase.from('email_settings').delete().eq('id', id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email_settings'] });
    },
  });
};