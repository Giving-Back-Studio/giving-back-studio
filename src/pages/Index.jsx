import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from 'lucide-react';
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterprise_name: '',
    enterprise_purpose: '',
    challenge: '',
    growth_impact: ''
  });

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
    } catch (error) {
      toast.error(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Giving Back Studio</h1>
          <p className="text-xl md:text-2xl font-light">
            Empowering Changemakers to Build Cooperative Social Enterprises
          </p>
        </header>

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Vision</h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Giving Back Studio is more than an agency; we're a movement. We empower visionaries to create cooperative social enterprises that harmonize profit with purpose. Our human-led process nurtures innovations that uplift humanity and heal our planet.
          </p>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">The Giving Back Difference</h2>
          <ul className="text-lg space-y-4">
            <li className="flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Human-Centered Approach: Every project prioritizes people and planet</span>
            </li>
            <li className="flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Cooperative Model: Building sustainable and equitable enterprises</span>
            </li>
            <li className="flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Community-Led Growth: Your success amplifies our collective impact</span>
            </li>
          </ul>
        </section>

        <section id="apply-to-co-create" className="bg-white/10 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Apply to Co-Create</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Your full name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Your email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="enterprise_name" className="block text-white mb-2">Enterprise name</label>
              <Input
                id="enterprise_name"
                name="enterprise_name"
                value={formData.enterprise_name}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="enterprise_purpose" className="block text-white mb-2">Enterprise purpose</label>
              <Textarea
                id="enterprise_purpose"
                name="enterprise_purpose"
                placeholder="In 1 sentence, what is the purpose of this enterprise?"
                value={formData.enterprise_purpose}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                rows={2}
                required
              />
            </div>
            <div>
              <label htmlFor="challenge" className="block text-white mb-2">Your biggest challenge</label>
              <Textarea
                id="challenge"
                name="challenge"
                placeholder="What is your biggest challenge right now as a social enterprise creator?"
                value={formData.challenge}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                rows={3}
                required
              />
            </div>
            <div>
              <label htmlFor="growth_impact" className="block text-white mb-2">Growth impact</label>
              <Textarea
                id="growth_impact"
                name="growth_impact"
                placeholder="If you could grow revenue exponentially, how would it serve humanity?"
                value={formData.growth_impact}
                onChange={handleChange}
                className="bg-white/30 border-white/50 text-white placeholder-indigo-500"
                rows={3}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gbs-lightPurple hover:bg-gbs-lavender text-white py-3 text-lg">
              Submit application
            </Button>
          </form>
        </section>

        <footer className="text-center space-y-4">
          <p className="text-xl">Ready to give back and grow forward?</p>
          <p>Contact us: <a href="mailto:hello@givingback.studio" className="underline hover:text-gbs-lavender transition-colors">hello@givingback.studio</a></p>
        </footer>
      </div>
    </div>
  );
};

export default Index;