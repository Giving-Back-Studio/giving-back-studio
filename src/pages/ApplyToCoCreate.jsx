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
      await addMovementCreatorOpportunity.mutateAsync({
        name: data.name,
        email: data.email,
        enterprise_purpose: data.enterprisePurpose,
        growth_value: data.growthValue
      });
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
        <div className="border border-white/30 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-lg mb-2">Name</label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
              className="bg-transparent border-white/30 text-white placeholder-white/70 text-lg font-lato"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-lg mb-2">Email</label>
            <Input
              id="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              placeholder="your.email@example.com"
              type="email"
              className="bg-transparent border-white/30 text-white placeholder-white/70 text-lg font-lato"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="enterprisePurpose" className="block text-white text-lg mb-2">Enterprise Purpose</label>
            <Textarea
              id="enterprisePurpose"
              {...register('enterprisePurpose', { required: 'Enterprise purpose is required' })}
              placeholder="Enterprise's why"
              className="bg-transparent border-white/30 text-white placeholder-white/70 text-lg font-lato"
              rows={4}
            />
            {errors.enterprisePurpose && <p className="text-red-500 mt-1">{errors.enterprisePurpose.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="growthValue" className="block text-white text-lg mb-2">Growth Impact</label>
            <Textarea
              id="growthValue"
              {...register('growthValue', { required: 'This field is required' })}
              placeholder="How would exponential growth impact your enterprise?"
              className="bg-transparent border-white/30 text-white placeholder-white/70 text-lg font-lato"
              rows={4}
            />
            {errors.growthValue && <p className="text-red-500 mt-1">{errors.growthValue.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-gbs-purple hover:bg-gbs-purple/90 text-lg font-lato">
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyToCoCreate;