'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Turnstile from "./Turnstile";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setErrorMessage('Please complete the security check.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setToken(null);
        // Reset turnstile if possible, or just let it expire/reload
        if (window.turnstile) {
          window.turnstile.reset();
        }
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Content - Contact Info */}
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.contact.title}
            </h2>
            <p className="text-slate-600 mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Phone */}
              <div>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.contact.phone}</h3>
                <a href="tel:+8613553338986" className="text-green-600 font-medium hover:underline">
                  +86 135 5333 8986
                </a>
              </div>

              {/* Whatsapp */}
              <div>
                <div className="mb-2">
                  <MessageCircle className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.contact.whatsapp}</h3>
                <a href="https://wa.me/8613553338986" className="text-green-600 font-medium hover:underline">
                  +86 135 5333 8986
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="mb-2">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.contact.email}</h3>
                <a href="mailto:zengkaoyuanfs@gmail.com" className="text-green-600 font-medium hover:underline break-all">
                  zengkaoyuanfs@gmail.com
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="mb-2">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.contact.address}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.contact.addressValue}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={`* ${t.contact.form.name}`}
                      className="w-full bg-slate-50 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={`* ${t.contact.form.email}`}
                      className="w-full bg-slate-50 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phone}
                      className="w-full bg-slate-50 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.form.company}
                      className="w-full bg-slate-50 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={`* ${t.contact.form.message}`}
                      className="w-full bg-slate-50 border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none transition-all placeholder:text-slate-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAACZut7zLv66aZWTk'} 
                    onVerify={(token) => {
                      setToken(token);
                      setErrorMessage('');
                    }}
                    onError={() => setErrorMessage('Security check failed. Please try again.')}
                    onExpire={() => setToken(null)}
                  />

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      t.contact.form.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
