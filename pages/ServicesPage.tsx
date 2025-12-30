import React from 'react';
import { Globe, Smartphone, Cloud, Shield, Database, Brain } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: 'توسعه وب',
      description: 'وب‌اپلیکیشن‌های اختصاصی ساخته شده با React، Next.js و Node.js. ما بر سئو، عملکرد و دسترس‌پذیری تمرکز داریم.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: 'اپلیکیشن موبایل',
      description: 'توسعه نیتیو iOS و Android با استفاده از Swift، Kotlin یا React Native برای کارایی چند پلتفرمی.'
    },
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: 'راهکارهای ابری',
      description: 'معماری‌های بدون سرور (Serverless)، کانتینرسازی (Docker/Kubernetes) و زیرساخت مقیاس‌پذیر در AWS/GCP.'
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: 'هوش مصنوعی و یادگیری ماشین',
      description: 'یکپارچه‌سازی مدل‌های زبانی بزرگ (مانند Gemini)، تحلیل‌های پیش‌بینانه و بینایی ماشین برای خودکارسازی فرآیندها.'
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'امنیت سایبری',
      description: 'ممیزی امنیتی، تست نفوذ و شیوه‌های کدنویسی امن برای محافظت از داده‌ها و کاربران شما.'
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: 'کلان‌داده (Big Data)',
      description: 'انبار داده‌ها، خطوط لوله ETL و داشبوردهای مصورسازی برای تبدیل داده‌ها به بینش‌های عملی.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">خدمات ما</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">ما راهکارهای فناوری پایان‌به‌پایان را طراحی می‌کنیم که همگام با کسب‌وکار شما رشد کنند.</p>
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