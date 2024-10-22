import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap, Heart } from 'lucide-react';

const NewLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Catalyze Change,<br />
            <span className="text-gbs-lavender">Amplify Impact</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Giving Back Studio empowers visionaries like you to build thriving social enterprises. 
            Together, we'll create innovative solutions for a regenerative future.
          </p>
          <Button asChild className="text-lg px-6 py-3 bg-gbs-lightPurple hover:bg-gbs-lavender hover:text-gbs-darkPurple transition-all duration-300">
            <Link to="/build">
              Start Your Impact Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </header>

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Commitment</h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            At Giving Back Studio, we're more than just a platform – we're your partners in positive change. 
            Our ecosystem nurtures social enterprises that harmonize profit with purpose, leveraging open-source tools 
            and collaborative strategies to amplify your impact on humanity and our planet.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="w-12 h-12" />}
            title="Impact Ecosystem Directory"
            description="Connect with a curated network of conscious investors, regenerative farms, and transformative grants. Your next world-changing collaboration awaits."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Collective Funding Platform"
            description="Fuel open-source projects that serve the greater good. Our integrated crowdfunding tools turn visionary ideas into tangible impact through community support."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="AI-Powered Growth Allies"
            description="Harness custom AI agents to supercharge your impact. From intelligent lead generation to personalized mentorship, scale your vision efficiently and ethically."
          />
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">The Giving Back Advantage</h2>
          <ul className="text-lg space-y-4">
            <li className="flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Human-Centered Innovation: Every project prioritizes people and planet</span>
            </li>
            <li className="flex items-center justify-center">
              <Globe className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Open Source & Accessible: Fostering transparency and collaborative growth</span>
            </li>
            <li className="flex items-center justify-center">
              <Users className="w-6 h-6 mr-2 text-gbs-lavender" />
              <span>Community-Led Impact: Your success amplifies our collective positive change</span>
            </li>
          </ul>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Co-Create Change?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Whether you're a seasoned social entrepreneur, an aspiring changemaker, or an investor seeking meaningful returns, 
            Giving Back Studio is your launchpad for impact. Join us in building a regenerative future where everyone thrives.
          </p>
          <Button asChild className="text-lg px-6 py-3 bg-gbs-lightPurple hover:bg-gbs-lavender hover:text-gbs-darkPurple transition-all duration-300">
            <Link to="/build">
              Apply to Co-Create <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>

        <footer className="text-center space-y-4">
          <p className="text-xl">Let's give back and grow forward, together.</p>
          <p>Get in touch: <a href="mailto:hello@givingback.studio" className="underline hover:text-gbs-lavender transition-colors">hello@givingback.studio</a></p>
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

export default NewLandingPage;