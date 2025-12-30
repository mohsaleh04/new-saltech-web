import React from 'react';
import { Globe, Smartphone, Cloud, Shield, Database, Brain } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: 'Web Development',
      description: 'Custom web applications built with React, Next.js, and Node.js. We focus on SEO, performance, and accessibility.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: 'Mobile Apps',
      description: 'Native iOS and Android development using Swift, Kotlin, or React Native for cross-platform efficiency.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: 'Cloud Solutions',
      description: 'Serverless architectures, containerization (Docker/Kubernetes), and scalable infrastructure on AWS/GCP.'
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: 'AI & Machine Learning',
      description: 'Integration of LLMs (like Gemini), predictive analytics, and computer vision to automate business processes.'
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Cybersecurity',
      description: 'Security audits, penetration testing, and secure coding practices to protect your data and users.'
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: 'Big Data',
      description: 'Data warehousing, ETL pipelines, and visualization dashboards to turn data into actionable insights.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">We provide end-to-end technology solutions designed to scale with your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-primary-light border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-colors group">
            <div className="mb-6 bg-primary w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
