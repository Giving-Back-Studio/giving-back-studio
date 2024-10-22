import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Globe, Users, Zap, Heart } from 'lucide-react';
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
            Empowering Changemakers with AI Tools and Resources to Build a Thriving, Regenerative World
          </p>
        </header>

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Vision</h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Giving Back Studio is more than an agency; we're a movement. We empower visionaries to create regenerative social enterprises that harmonize profit with purpose. Our open-source tools and collaborative ecosystem nurture innovations that uplift humanity and heal our planet.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="w-12 h-12" />}
            title="Impact Ecosystem Directory"
            description="Connect with our curated network of conscious investors, regenerative farms, and transformative grants. Find your next collaboration for change with just a few clicks."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Collective Funding Platform"
            description="Fuel open-source projects serving the greater good. Our integrated crowdfunding tools turn visionary ideas into world-changing realities through community support."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="AI-Powered Growth Allies"
            description="Leverage our AI tools to automate lead generation, track impact metrics, and scale your social enterprise efficiently and ethically."
          />
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">The Giving Back Difference</h2>
          <ul className="text-lg space-y-4">
            <li className="flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Humanity-Centered Innovation: Every project prioritizes people and planet</span>
            </li>
            <li className="flex items-center justify-center">
              <Globe className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Open Source & Accessible: Transparency and collaboration at our core</span>
            </li>
            <li className="flex items-center justify-center">
              <Users className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Community-Led Growth: Your success amplifies our collective impact</span>
            </li>
          </ul>
        </section>

        <section id="apply-to-co-create" className="bg-white/10 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Apply to Co-Create</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              required
            />
            <Input
              name="enterprise_name"
              placeholder="Enterprise name"
              value={formData.enterprise_name}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              required
            />
            <Textarea
              name="enterprise_purpose"
              placeholder="In 1 sentence, what is the purpose of this enterprise?"
              value={formData.enterprise_purpose}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={2}
              required
            />
            <Textarea
              name="challenge"
              placeholder="What is your biggest challenge right now as a social enterprise creator?"
              value={formData.challenge}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={3}
              required
            />
            <Textarea
              name="growth_impact"
              placeholder="If you could grow revenue exponentially, how would it serve humanity?"
              value={formData.growth_impact}
              onChange={handleChange}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
              rows={3}
              required
            />
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

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 p-6 rounded-lg space-y-4 hover:bg-white/20 transition-all duration-300">
    <div className="text-gbs-lavender">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Index;
