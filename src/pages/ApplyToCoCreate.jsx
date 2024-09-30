import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ApplyToCoCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const questions = [
    { name: 'name', label: "What's your name?", type: 'text' },
    { name: 'email', label: "What's your email address?", type: 'email' },
    { name: 'enterpriseName', label: "What's the name of your enterprise?", type: 'text' },
    { name: 'purpose', label: "In one sentence, what is its purpose?", type: 'text' },
    { name: 'customerPersona', label: "Who is your customer persona?", type: 'textarea' },
    { name: 'essentialSoftware', label: "What software is currently most essential for your organization & operation?", type: 'textarea' },
    { name: 'challenges', label: "What are the biggest challenges and frustrations you have right now as a social enterprise creator?", type: 'textarea' },
    { name: 'currentSales', label: "What are your current sales?", type: 'text' },
    { name: 'growthValue', label: "If you could grow your sales exponentially what would that be worth to you?", type: 'textarea' },
  ];

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert("Application submitted successfully!");
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'text':
      case 'email':
        return <Input {...register(question.name, { required: true })} className="w-full bg-white/20 border-white/30 text-white placeholder-white/70" />;
      case 'textarea':
        return <Textarea {...register(question.name, { required: true })} className="w-full bg-white/20 border-white/30 text-white placeholder-white/70" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white p-8">
      <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Apply to Co-Create</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {questions.map((question) => (
              <div key={question.name}>
                <Label htmlFor={question.name} className="block text-lg font-medium mb-2 text-white">{question.label}</Label>
                {renderQuestion(question)}
                {errors[question.name] && <span className="text-red-400 text-sm">This field is required</span>}
              </div>
            ))}
            <Button type="submit" className="w-full bg-white text-gbs-purple hover:bg-white/90">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyToCoCreate;