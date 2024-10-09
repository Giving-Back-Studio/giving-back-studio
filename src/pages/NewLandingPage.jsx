import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap } from 'lucide-react';

const NewLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Giving Back Studio</h1>
          <p className="text-xl md:text-2xl font-light">Empowering Humanity-Centered Innovation</p>
        </header>

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Vision</h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            We are an open-source humanity-centered innovation agency, designed to empower individuals and communities to create positive social impact. Our mission is to foster regenerative social enterprises by providing accessible tools, knowledge, and support.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="w-12 h-12" />}
            title="Directory of Social Enterprises"
            description="Connect impact-driven entrepreneurs with conscious investors, permaculture farms, and public good grants."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Crowdfunding Platform"
            description="Support open-source public goods and empower projects that serve the common good."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="AI Agents for Growth"
            description="Streamline lead generation, optimize workflows, and nurture connections across the community."
          />
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Giving Back Studio?</h2>
          <ul className="text-lg space-y-4">
            <li>Humanity-Centered Innovation</li>
            <li>Open Source & Accessible</li>
            <li>Community-Led Growth</li>
          </ul>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Get Involved</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join us in building a better world, one venture at a time. Whether you're a social entrepreneur, an impact investor, or simply someone who believes in creating positive change, Giving Back Studio is your partner in making a difference.
          </p>
          <Button asChild className="text-lg px-6 py-3">
            <Link to="/build">
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>

        <footer className="text-center">
          <p>Contact: hello@givingback.studio</p>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 p-6 rounded-lg space-y-4">
    <div className="text-gbs-lavender">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default NewLandingPage;