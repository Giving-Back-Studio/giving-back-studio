// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';

// Import hooks
import {
  useMovementCreatorOpportunityCategory,
  useMovementCreatorOpportunityCategories,
  useAddMovementCreatorOpportunityCategory,
  useUpdateMovementCreatorOpportunityCategory,
  useDeleteMovementCreatorOpportunityCategory,
} from './hooks/useMovementCreatorOpportunityCategories';

import {
  useNewsletter,
  useNewsletters,
  useAddNewsletter,
  useUpdateNewsletter,
  useDeleteNewsletter,
} from './hooks/useNewsletters';

import {
  useEmailSetting,
  useEmailSettings,
  useAddEmailSetting,
  useUpdateEmailSetting,
  useDeleteEmailSetting,
} from './hooks/useEmailSettings';

import {
  useEmail,
  useEmails,
  useAddEmail,
  useUpdateEmail,
  useDeleteEmail,
} from './hooks/useEmails';

import {
  useSentEmail,
  useSentEmails,
  useAddSentEmail,
  useUpdateSentEmail,
  useDeleteSentEmail,
} from './hooks/useSentEmails';

import {
  usePublishedNewsletter,
  usePublishedNewsletters,
  useAddPublishedNewsletter,
  useUpdatePublishedNewsletter,
  useDeletePublishedNewsletter,
} from './hooks/usePublishedNewsletters';

import {
  useInspiringInnovationListItem,
  useInspiringInnovationList,
  useAddInspiringInnovationListItem,
  useUpdateInspiringInnovationListItem,
  useDeleteInspiringInnovationListItem,
} from './hooks/useInspiringInnovationList';

import {
  useMovementCreatorOpportunity,
  useMovementCreatorOpportunities,
  useAddMovementCreatorOpportunity,
  useUpdateMovementCreatorOpportunity,
  useDeleteMovementCreatorOpportunity,
} from './hooks/useMovementCreatorOpportunities';

// Export all the imported functions and objects
export {
  supabase,
  SupabaseAuthProvider,
  useSupabaseAuth,
  SupabaseAuthUI,
  useMovementCreatorOpportunityCategory,
  useMovementCreatorOpportunityCategories,
  useAddMovementCreatorOpportunityCategory,
  useUpdateMovementCreatorOpportunityCategory,
  useDeleteMovementCreatorOpportunityCategory,
  useNewsletter,
  useNewsletters,
  useAddNewsletter,
  useUpdateNewsletter,
  useDeleteNewsletter,
  useEmailSetting,
  useEmailSettings,
  useAddEmailSetting,
  useUpdateEmailSetting,
  useDeleteEmailSetting,
  useEmail,
  useEmails,
  useAddEmail,
  useUpdateEmail,
  useDeleteEmail,
  useSentEmail,
  useSentEmails,
  useAddSentEmail,
  useUpdateSentEmail,
  useDeleteSentEmail,
  usePublishedNewsletter,
  usePublishedNewsletters,
  useAddPublishedNewsletter,
  useUpdatePublishedNewsletter,
  useDeletePublishedNewsletter,
  useInspiringInnovationListItem,
  useInspiringInnovationList,
  useAddInspiringInnovationListItem,
  useUpdateInspiringInnovationListItem,
  useDeleteInspiringInnovationListItem,
  useMovementCreatorOpportunity,
  useMovementCreatorOpportunities,
  useAddMovementCreatorOpportunity,
  useUpdateMovementCreatorOpportunity,
  useDeleteMovementCreatorOpportunity,
};
