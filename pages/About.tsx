import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">We Are SalTech</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A team of passionate engineers, designers, and strategists dedicated to redefining what's possible in the digital realm.
        </p>
      </div>

      {/* Mission Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400">To empower businesses with technology that is not just functional, but transformative.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
          <p className="text-gray-400">We stay ahead of the curve, constantly exploring new frameworks, AI models, and architectures.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
          <p className="text-gray-400">We work alongside our clients as partners, ensuring transparency and aligned goals.</p>
        </div>
      </div>

      {/* Story */}
      <div className="bg-primary-light border border-white/5 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in 2020, SalTech began as a small collective of freelance developers in Tehran. We shared a common vision: the local tech landscape needed a provider that prioritized code quality and user experience above all else.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, we have grown into a full-service agency with clients ranging from innovative startups to established enterprises. Despite our growth, we maintain our startup spirit—agile, hungry, and obsessed with excellence.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-accent blur-3xl opacity-20 rounded-full"></div>
             <img 
               src="https://picsum.photos/600/400?grayscale" 
               alt="Office" 
               className="relative rounded-xl shadow-2xl border border-white/10"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
