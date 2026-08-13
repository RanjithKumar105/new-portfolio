"use client";

import React, { useState } from "react";

import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Together"
          subtitle="Interested in collaborating on AI/ML research, discussing software engineering opportunities, or just having a tech chat?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-black tracking-tight uppercase">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 border border-black/10 hover:border-black/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 uppercase font-bold">
                        Email
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-black break-all">
                        {portfolioData.personal.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.email, "email")}
                    className="p-2 rounded-lg bg-white border border-black/10 hover:bg-gray-100 text-gray-600 hover:text-black transition-colors"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-black" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 border border-black/10 hover:border-black/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-600 uppercase font-bold">
                        Phone
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-black">
                        {portfolioData.personal.phone}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                    className="p-2 rounded-lg bg-white border border-black/10 hover:bg-gray-100 text-gray-600 hover:text-black transition-colors"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-black" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/5 border border-black/10">
                  <div className="w-9 h-9 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-black">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-600 uppercase font-bold">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-black">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">
                  Connect Online
                </p>
                <div className="flex gap-3">
                  <a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 text-xs font-bold text-black transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 text-xs font-bold text-black transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-5"
            >
              <h3 className="text-xl font-black text-black tracking-tight uppercase">
                Send a Message
              </h3>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-black/5 border border-black/10 text-black font-bold text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-black" />
                  Thank you! Your message has been received. I will respond promptly.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI / SWE Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/5 border border-black/10 text-sm text-black font-medium placeholder-gray-500 focus:outline-none focus:border-black/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl font-bold uppercase tracking-wider text-sm text-white bg-black hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md shadow-black/10 hover:shadow-black/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
