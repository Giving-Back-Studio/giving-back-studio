import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';
import ConfettiAnimation from '@/components/ConfettiAnimation';

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Purpose-Driven Growth with Giving Back Studio's Build Service</h1>
          <p className="text-xl">Transform your vision into a thriving social enterprise that generates both profit and impact.</p>
        </header>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Build?</h2>
          <p>The Build service is designed for leaders who are passionate about advancing wellbeing while driving financial growth. By joining, you'll gain:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Weekly Team Building:</strong> Facilitation of dynamic team sessions to enhance alignment, process challenges, and transform insights into actionable strategies.</li>
            <li><strong>Guided Launch Path:</strong> Step-by-step support to take your idea from concept to a Minimum Viable Business Product (MVBP), including an AI SaaS product.</li>
            <li><strong>Self-Organizing Team Mastery:</strong> Comprehensive training to build resilient, self-organizing teams capable of sustaining and scaling your mission.</li>
          </ul>
        </section>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Who Should Apply?</h2>
          <p>This program is for you if:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>You're looking to add new revenue streams that are in harmony with advancing human and planetary wellbeing.</li>
            <li>You have experience in, or are 100% committed to learn, building successful social enterprises and are ready to take the next step.</li>
            <li>You align with a culture that values purpose-driven innovation and root-cause resolution.</li>
          </ul>
        </section>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">What You'll Gain</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>AI SaaS Product:</strong> Access to a cutting-edge AI tool to automate processes and accelerate your enterprise's growth.</li>
            <li><strong>Purpose-Aligned Profit:</strong> Discover revenue streams that are profitable and aligned with your core mission.</li>
            <li><strong>Time & Money Savings:</strong> A clear, purpose-aligned path that maximizes efficiency and saves valuable resources.</li>
          </ul>
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
              rows={3}
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-gbs-lightPurple hover:bg-gbs-lavender text-white py-3 text-lg">
            Submit application
          </Button>
        </form>

        <section className="bg-white/10 p-8 rounded-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-xl">1. Who is the Build service for?</h3>
              <p>It's for leaders and entrepreneurs with a track record of building impact-focused ventures who are seeking to develop new purpose-aligned revenue streams.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">2. What kind of time commitment is expected?</h3>
              <p>The Build program includes weekly facilitated team-building sessions, regular strategy calls, and action planning over 6-8 weeks, customized to your needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">3. What results can I expect?</h3>
              <p>You can expect to identify and launch new revenue streams that are aligned with your mission, resulting in a profitable and sustainable enterprise.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">4. Do you offer financing options?</h3>
              <p>Yes, we provide flexible financing options. Let us know if you're interested during your consultation.</p>
            </div>
          </div>
        </section>

        <footer className="text-center space-y-4">
          <p className="text-xl">Join us and create purpose-aligned growth today. Your impact starts here.</p>
        </footer>
      </div>
    </div>
  );
};

export default ApplyToCoCreate;