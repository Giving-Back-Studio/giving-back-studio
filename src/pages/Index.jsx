import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Giving Back Studio</h1>
          <p className="text-xl md:text-2xl font-light">Catalyzing Humanity-Centered Innovation for a Thriving World</p>
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
            description="Discover and connect with a curated network of conscious investors, regenerative farms, and transformative grants. Your next collaboration for change is just a click away."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Collective Funding Platform"
            description="Fuel open-source projects that serve the greater good. Our integrated crowdfunding tools turn visionary ideas into world-changing realities through the power of community support."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="AI-Powered Growth Allies"
            description="Harness the potential of custom AI agents to supercharge your impact. From smart lead generation to personalized mentorship, our digital allies help you scale your vision efficiently and ethically."
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

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Join the Movement</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Whether you're a seasoned social entrepreneur, an aspiring changemaker, or an investor seeking meaningful returns, Giving Back Studio is your launchpad for impact. Together, we're not just building businesses—we're cultivating a regenerative future where everyone thrives.
          </p>
          <Button asChild className="text-lg px-6 py-3 bg-gbs-lightPurple hover:bg-gbs-lavender hover:text-gbs-darkPurple transition-all duration-300">
            <Link to="/build">
              Start Your Impact Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
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