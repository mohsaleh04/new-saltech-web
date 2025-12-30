import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ما صالتک هستیم</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          تیمی از مهندسان، طراحان و استراتژیست‌های مشتاق که متعهد به بازتعریف آنچه در دنیای دیجیتال ممکن است، هستند.
        </p>
      </div>

      {/* Mission Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">ماموریت ما</h3>
          <p className="text-gray-400">توانمندسازی کسب‌وکارها با فناوری‌هایی که نه تنها کاربردی، بلکه تحول‌آفرین هستند.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">نوآوری</h3>
          <p className="text-gray-400">ما همیشه پیشرو هستیم و دائماً فریم‌ورک‌های جدید، مدل‌های هوش مصنوعی و معماری‌های نوین را بررسی می‌کنیم.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">همکاری</h3>
          <p className="text-gray-400">ما در کنار مشتریانمان به عنوان شریک کار می‌کنیم و شفافیت و اهداف همسو را تضمین می‌کنیم.</p>
        </div>
      </div>

      {/* Story */}
      <div className="bg-primary-light border border-white/5 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">داستان ما</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              صالتک در سال ۱۳۹۹ به عنوان گروه کوچکی از توسعه‌دهندگان فریلنسر در تهران تاسیس شد. ما یک چشم‌انداز مشترک داشتیم: فضای فناوری محلی به ارائه‌دهنده‌ای نیاز داشت که کیفیت کد و تجربه کاربری را بالاتر از هر چیز دیگری قرار دهد.
            </p>
            <p className="text-gray-400 leading-relaxed">
              امروز، ما به یک آژانس خدمات کامل تبدیل شده‌ایم که مشتریانی از استارتاپ‌های نوآور تا شرکت‌های بزرگ دارد. با وجود رشد ما، روحیه استارتاپی خود را حفظ کرده‌ایم: چابک، تشنه یادگیری و وسواس‌گونه نسبت به عالی بودن.
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