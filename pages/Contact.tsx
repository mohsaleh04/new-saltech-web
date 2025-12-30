import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('از تماس شما با صالتک متشکریم! به زودی با شما تماس خواهیم گرفت.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تماس با ما</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">پروژه‌ای در ذهن دارید؟ مشتاق شنیدن نظرات شما هستیم. پیام دهید و ما در کمتر از ۲۴ ساعت پاسخ می‌دهیم.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-primary-light p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">اطلاعات تماس</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-x-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">ایمیل</h4>
                  <p className="text-gray-400 font-sans" dir="ltr">info@saltech.ir</p>
                  <p className="text-gray-400 font-sans" dir="ltr">support@saltech.ir</p>
                </div>
              </div>
              <div className="flex items-start gap-x-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">تلفن</h4>
                  <p className="text-gray-400 font-sans" dir="ltr">+98 21 1234 5678</p>
                  <p className="text-gray-400 font-sans" dir="ltr">+98 912 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-x-4">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">دفتر</h4>
                  <p className="text-gray-400">برج نوآوری، طبقه ۸</p>
                  <p className="text-gray-400">تهران، ایران</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-4">گفتگو با صال</h3>
            <p className="mb-6 opacity-90 leading-relaxed">
              برای دریافت پاسخ‌های فوری درباره خدمات ما، دستیار هوشمند ما "صال" را امتحان کنید. روی آیکون چت در گوشه پایین راست کلیک کنید!
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-primary-light p-8 rounded-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">نام</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="علی محمدی"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-left"
                  placeholder="ali@example.com"
                  dir="ltr"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">موضوع</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">یک موضوع انتخاب کنید</option>
                <option value="web">توسعه وب</option>
                <option value="mobile">اپلیکیشن موبایل</option>
                <option value="cloud">سرویس‌های ابری</option>
                <option value="other">سایر</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">پیام</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="درباره پروژه خود برای ما بنویسید..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-glow text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center"
            >
              ارسال پیام
              <Send className="mr-2 h-4 w-4 rotate-180" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;