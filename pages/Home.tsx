import React from 'react';
import Hero from '../components/Hero';
import { Layout, Smartphone, Globe, Cloud, ChevronRight, Star } from 'lucide-react';
import { Service } from '../types';
import { motion } from 'framer-motion';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Responsive, high-performance websites utilizing React, Next.js, and modern frameworks tailored to your brand.',
    icon: 'globe'
  },
  {
    id: '2',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    icon: 'smartphone'
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture design, migration, and management on AWS, Azure, or Google Cloud.',
    icon: 'cloud'
  }
];

const projects = [
  {
    title: 'FinCore Dashboard',
    category: 'FinTech',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    title: 'MediSync App',
    category: 'Healthcare',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    title: 'Urban Logistics',
    category: 'Supply Chain',
    image: 'https://picsum.photos/600/400?random=3',
  }
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase mb-2">Our Expertise</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Tech Solutions</p>
            <p className="text-gray-400 max-w-2xl mx-auto">We leverage the latest technologies to build scalable, secure, and user-centric digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-light border border-white/5 p-8 rounded-2xl hover:border-accent/30 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  {service.icon === 'globe' && <Globe className="h-6 w-6" />}
                  {service.icon === 'smartphone' && <Smartphone className="h-6 w-6" />}
                  {service.icon === 'cloud' && <Cloud className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-accent hover:text-white transition-colors text-sm font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-primary-light relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-gray-400">A selection of our recent work.</p>
             </div>
             <a href="#" className="hidden md:flex items-center text-white hover:text-accent transition-colors">
               View all projects <ChevronRight className="ml-1 h-5 w-5" />
             </a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {projects.map((project, idx) => (
               <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-accent text-sm font-medium mb-1">{project.category}</span>
                   <h3 className="text-white text-xl font-bold">{project.title}</h3>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 md:hidden text-center">
             <a href="#" className="inline-flex items-center text-white hover:text-accent transition-colors">
               View all projects <ChevronRight className="ml-1 h-5 w-5" />
             </a>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
               <div className="flex text-yellow-500 mb-4">
                 {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
               </div>
               <p className="text-gray-300 italic mb-6">"SalTech completely transformed our digital infrastructure. Their team is incredibly skilled, responsive, and forward-thinking."</p>
               <div className="flex items-center">
                 <img src="https://picsum.photos/100/100?random=10" alt="Client" className="w-10 h-10 rounded-full mr-4" />
                 <div>
                   <h4 className="text-white font-semibold text-sm">Sarah Johnson</h4>
                   <p className="text-gray-500 text-xs">CTO, TechFlow</p>
                 </div>
               </div>
             </div>
             <div className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
               <div className="flex text-yellow-500 mb-4">
                 {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
               </div>
               <p className="text-gray-300 italic mb-6">"The AI integration they built for our customer service reduced response times by 60%. Absolutely game-changing."</p>
               <div className="flex items-center">
                 <img src="https://picsum.photos/100/100?random=11" alt="Client" className="w-10 h-10 rounded-full mr-4" />
                 <div>
                   <h4 className="text-white font-semibold text-sm">David Chen</h4>
                   <p className="text-gray-500 text-xs">Founder, StartUp Inc</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <h2 className="text-4xl font-bold text-white mb-6">Ready to elevate your business?</h2>
           <p className="text-xl text-gray-300 mb-8">Let's discuss how SalTech can help you achieve your digital goals.</p>
           <a href="/#/contact" className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl">
             Schedule a Consultation
           </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
