import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaendgl';

export default function Contact() {
  const initialFormData = {
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Café / Hospitality',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const businessTypes = [
    'Café / Hospitality',
    'Beauty / Salon / Wellness',
    'Creative Studio / Agency',
    'Retail / E-Commerce',
    'Professional Services',
    'Other Concept',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          businessName: formData.businessName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          businessType: formData.businessType,
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#111111]/8 bg-[#FBFBF9]"
      style={{ backgroundColor: '#FBFBF9' }}
      aria-label="Contact Veyra Studio"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-0.5 bg-[#C58A55]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#84837E]">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-[1.05] mb-6">
            Let's build something good.
          </h2>

          <p className="text-base sm:text-lg text-[#5C5B56] leading-relaxed font-normal mb-8 max-w-md">
            Whether you are launching a new enterprise or elevating an existing presence, we'd love to learn about your vision.
          </p>

          {/* Quick Studio Details */}
          <div className="space-y-4 pt-6 border-t border-[#111111]/8 text-xs font-mono tracking-wider text-[#5C5B56]">
            <div>
              <span className="text-[#84837E] block text-[10px] uppercase tracking-[0.2em] mb-1">
                Studio Location
              </span>
              <span className="text-[#111111] font-sans font-medium text-sm">
                Independent Digital Creative Studio
              </span>
            </div>
            <div>
              <span className="text-[#84837E] block text-[10px] uppercase tracking-[0.2em] mb-1">
                Availability
              </span>
              <div className="inline-flex items-center gap-2 text-[#111111] font-sans font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>AVAILABLE FOR NEW PROJECTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#F5F5F0]/70 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#111111]/8 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                    Name <span className="text-[#C58A55]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] placeholder:text-[#A9A8A1] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                    Business Name <span className="text-[#C58A55]">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business or brand name"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] placeholder:text-[#A9A8A1] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                    Email <span className="text-[#C58A55]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] placeholder:text-[#A9A8A1] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone or WhatsApp number"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] placeholder:text-[#A9A8A1] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all disabled:opacity-60"
                >
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#111111] mb-2">
                  Message <span className="text-[#C58A55]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and goals..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FBFBF9] border border-[#111111]/12 text-[#111111] placeholder:text-[#A9A8A1] text-sm focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all resize-y disabled:opacity-60"
                ></textarea>
              </div>

              {/* Feedback States */}
              {status === 'success' && (
                <div
                  id="contact-success-message"
                  className="p-5 rounded-xl bg-[#F2F7F4] border border-[#2E6B44]/15 flex items-start gap-3.5 text-xs text-[#204E31] animate-fade-in"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B44] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#183B25] text-sm mb-0.5">
                      Thanks — your enquiry has been received.
                    </p>
                    <p className="text-xs text-[#2C5F3D]">
                      Veyra Studio will get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  id="contact-error-message"
                  className="p-4 rounded-xl bg-[#FDF2F2] border border-[#992B2B]/15 flex items-start gap-3 text-xs text-[#8A2424] animate-fade-in"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 text-[#C53939] shrink-0 mt-0.5" />
                  <p className="font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#111111] text-[#FBFBF9] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#262626] transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#111111] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C58A55]" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C58A55]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
