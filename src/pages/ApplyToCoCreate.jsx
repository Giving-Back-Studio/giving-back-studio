import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddMovementCreatorOpportunity } from '@/integrations/supabase';
import { toast } from 'sonner';

const ApplyToCoCreate = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addMovementCreatorOpportunity = useAddMovementCreatorOpportunity();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await addMovementCreatorOpportunity.mutateAsync(data);
      toast.success('Application submitted successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('An error occurred. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-light mb-8 text-white">Apply to Co-Create</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your Name"
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            placeholder="Email Address"
            type="email"
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Textarea
            {...register('projectIdea', { required: 'Project idea is required' })}
            placeholder="Describe your project idea"
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
            rows={4}
          />
          {errors.projectIdea && <p className="text-red-500 mt-1">{errors.projectIdea.message}</p>}
        </div>
        <div>
          <Input
            {...register('skills', { required: 'Skills are required' })}
            placeholder="Your relevant skills"
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
          {errors.skills && <p className="text-red-500 mt-1">{errors.skills.message}</p>}
        </div>
        <div>
          <Textarea
            {...register('motivation', { required: 'Motivation is required' })}
            placeholder="What motivates you to co-create?"
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
            rows={4}
          />
          {errors.motivation && <p className="text-red-500 mt-1">{errors.motivation.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full bg-gbs-purple hover:bg-gbs-purple/90">
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </div>
  );
};

export default ApplyToCoCreate;