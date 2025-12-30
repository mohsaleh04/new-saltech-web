import React from 'react';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                Sal<span className="text-accent">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through cutting-edge technology and digital innovation. We build the future, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-accent transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-accent transition-colors cursor-pointer">AI Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:info@saltech.ir" className="text-gray-400 hover:text-accent transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">Tehran, Iran</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} SalTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
