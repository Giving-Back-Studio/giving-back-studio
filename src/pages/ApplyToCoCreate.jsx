import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';
import ConfettiAnimation from '@/components/ConfettiAnimation';
import { CheckCircle } from 'lucide-react';

const ApplyToCoCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterprise_name: '',
    enterprise_purpose: '',
    challenge: '',
    growth_impact: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const addApplication = useAddApplication();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addApplication.mutateAsync(formData);
      toast.success('Application submitted successfully!');
      setFormData({
        name: '',
        email: '',
        enterprise_name: '',
        enterprise_purpose: '',
        challenge: '',
        growth_impact: ''
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      toast.error(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue">
      <ConfettiAnimation show={showConfetti} />
      
      <div className="max-w-4xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold mb-4">
            Launch a Profitable, Purpose-Driven Social Enterprise
          </h1>
          <p className="text-xl">
            Our Build service is your path to creating new, purpose-aligned revenue streams that generate profit with impact, guaranteed.
          </p>
        </header>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Who is it for?</h2>
          <p className="text-lg mb-4">
            Investing in SELF is the right choice if:
          </p>
          <ul className="space-y-2">
            {[
              "You are ready to add new revenue streams that advance wellbeing.",
              "You have a proven track record of building successful social enterprises.",
              "You resonate with a purpose-driven culture that values deep, root-cause solutions."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-gbs-lavender mr-2 flex-shrink-0 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">What do you get?</h2>
          <ul className="space-y-4">
            {[
              {
                title: "Time & Money Savings",
                description: "We'll craft a purpose-aligned path to growth, saving you valuable resources."
              },
              {
                title: "Collaborative Alignment",
                description: "Weekly facilitated team building sessions to deepen alignment, resolve tensions, and turn insights into evolutionary action. You'll create a cohesive team that works together to achieve what everyone truly wants."
              },
              {
                title: "Step-by-Step Guidance",
                description: "From idea to the launch of your Minimum Viable Business Product, our full-stack training prepares you to build self-organizing teams and launch profitable ventures."
              }
            ].map((item, index) => (
              <li key={index} className="flex flex-col">
                <span className="font-semibold text-gbs-lavender text-lg">{item.title}</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mt-6">
            Result? New purpose-aligned revenue streams that accelerate your impact.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Apply to Co-Create</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your full name</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="enterprise_name" className="block text-sm font-medium mb-2">Enterprise name</label>
            <Input
              id="enterprise_name"
              name="enterprise_name"
              type="text"
              value={formData.enterprise_name}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              required
            />
          </div>
          
          <div>
            <label htmlFor="enterprise_purpose" className="block text-sm font-medium mb-2">Enterprise Purpose</label>
            <Textarea
              id="enterprise_purpose"
              name="enterprise_purpose"
              placeholder="In 1 sentence, what is the purpose of this enterprise?"
              value={formData.enterprise_purpose}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={2}
              required
            />
          </div>
          
          <div>
            <label htmlFor="challenge" className="block text-sm font-medium mb-2">Challenge</label>
            <Textarea
              id="challenge"
              name="challenge"
              placeholder="What is your biggest challenge right now as a social enterprise creator?"
              value={formData.challenge}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={3}
              required
            />
          </div>
          
          <div>
            <label htmlFor="growth_impact" className="block text-sm font-medium mb-2">Growth Impact</label>
            <Textarea
              id="growth_impact"
              name="growth_impact"
              placeholder="If you could grow revenue exponentially, how would it serve humanity?"
              value={formData.growth_impact}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={3}
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-gbs-lightPurple hover:bg-gbs-lavender text-white py-3 text-lg">
            Submit application
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ApplyToCoCreate;