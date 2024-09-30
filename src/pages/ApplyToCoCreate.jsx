import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ApplyToCoCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    { name: 'enterpriseName', label: "What's the name of your enterprise?", type: 'text' },
    { name: 'purpose', label: "In one sentence, what is its purpose?", type: 'text' },
    { name: 'customerPersona', label: "Who is your customer persona?", type: 'textarea' },
    { name: 'brandAssets', label: "Do you have brand assets that you want to bring in (logo, brand kit) or do you need support to create those?", type: 'radio', options: ['Have assets', 'Need support', 'Both'] },
    { name: 'productDocumentation', label: "Do you have documentation about your product offering? Photos, descriptions, price, size?", type: 'radio', options: ['Yes', 'No', 'Partial'] },
    { name: 'shipping', label: "How do you currently handle shipping?", type: 'textarea' },
    { name: 'inventoryTracking', label: "Do you have inventory tracking online?", type: 'radio', options: ['Yes', 'No'] },
    { name: 'essentialSoftware', label: "What software is currently most essential for your organization & operation?", type: 'textarea' },
    { name: 'challenges', label: "What are the biggest challenges and frustrations you have right now as a social enterprise creator?", type: 'textarea' },
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
        return <Input {...register(question.name, { required: true })} className="w-full" />;
      case 'textarea':
        return <Textarea {...register(question.name, { required: true })} className="w-full" />;
      case 'radio':
        return (
          <RadioGroup onValueChange={(value) => register(question.name).onChange({ target: { name: question.name, value } })}>
            {question.options.map((option) => (
              <div className="flex items-center space-x-2" key={option}>
                <RadioGroupItem value={option} id={`${question.name}-${option}`} />
                <Label htmlFor={`${question.name}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white p-8">
      <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Apply to Co-Create</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.name} className={index !== currentStep ? 'hidden' : ''}>
                <Label htmlFor={question.name} className="block text-lg font-medium mb-2">{question.label}</Label>
                {renderQuestion(question)}
                {errors[question.name] && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
            ))}
            <div className="flex justify-between mt-6">
              {currentStep > 0 && (
                <Button type="button" onClick={() => setCurrentStep(currentStep - 1)} variant="outline">
                  Previous
                </Button>
              )}
              {currentStep < questions.length - 1 ? (
                <Button type="button" onClick={() => setCurrentStep(currentStep + 1)}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit Application</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyToCoCreate;