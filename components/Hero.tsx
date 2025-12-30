import React from 'react';
import { ArrowLeft, Code, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent ml-2 animate-pulse"></span>
              پذیرش پروژه‌های جدید برای فصل پاییز
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
              ساختن <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-purple-500">
                آینده دیجیتال
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              صالتک ایده‌های بلندپروازانه را به راهکارهای دیجیتال قدرتمند تبدیل می‌کند. از تحلیل‌های مبتنی بر هوش مصنوعی تا معماری‌های ابری مقیاس‌پذیر، ما موفقیت را مهندسی می‌کنیم.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-4 sm:gap-y-0 sm:gap-x-4">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-glow text-white font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center ml-4 sm:ml-0">
                شروع پروژه
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center justify-center">
                مشاهده خدمات
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-x-8 text-gray-500">
               <div className="flex items-center gap-x-2">
                 <Code className="h-5 w-5" />
                 <span className="text-sm">کد تمیز</span>
               </div>
               <div className="flex items-center gap-x-2">
                 <Shield className="h-5 w-5" />
                 <span className="text-sm">امنیت بالا</span>
               </div>
               <div className="flex items-center gap-x-2">
                 <Cpu className="h-5 w-5" />
                 <span className="text-sm">عملکرد عالی</span>
               </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-primary-light/50 backdrop-blur-sm group">
              {/* Abstract decorative tech visualization */}
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-purple-500/10"></div>
              
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Floating Cards Mockup */}
              <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/5 rounded-xl bg-primary/80 p-6" dir="ltr">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse delay-75"></div>
                  <div className="h-32 w-full bg-white/5 rounded mt-4 border border-white/5 flex items-center justify-center">
                    <span className="text-gray-600 font-mono text-sm">&lt;SalTech /&gt;</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-20 bg-accent/10 rounded border border-accent/20"></div>
                    <div className="h-20 bg-purple-500/10 rounded border border-purple-500/20"></div>
                    <div className="h-20 bg-white/5 rounded border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;