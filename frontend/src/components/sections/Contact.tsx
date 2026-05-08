"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  const phoneNumber = "090848 58282";
  const whatsappNumber = "919084858282";
  const whatsappMessage = "Hello! I am interested in your interior design services.";

  return (
    <section id="contact" className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/2">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading mb-8 leading-tight">
              Let us Create Your <br className="hidden sm:block" /> <span className="text-gold italic">Dream Space.</span>
            </h2>
            <p className="text-soft-ivory/60 mb-10 max-w-lg leading-relaxed text-base md:text-lg">
              Ready to transform your home or office? Contact us today for a consultation and let our experts bring your vision to life.
            </p>

            <div className="space-y-6 md:space-y-8">
              <motion.a
                href="tel:09084858282"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 md:gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-matte-black flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-matte-black transition-all duration-500 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-soft-ivory/40 text-[10px] uppercase tracking-widest mb-1">Call Us Directly</p>
                  <p className="text-xl md:text-2xl font-heading group-hover:text-gold transition-colors">{phoneNumber}</p>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 md:gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-matte-black flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-soft-ivory/40 text-[10px] uppercase tracking-widest mb-1">Chat on WhatsApp</p>
                  <p className="text-xl md:text-2xl font-heading group-hover:text-[#25D366] transition-colors">Start a Conversation</p>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-matte-black p-8 md:p-16 border border-white/5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -z-10"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
                <div>
                  <div className="text-gold mb-4 md:mb-6">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-heading mb-3 md:mb-4">Our Studio</h4>
                  <p className="text-soft-ivory/60 text-xs md:text-sm leading-relaxed">
                    Dehradun, Uttarakhand <br />
                    India
                  </p>
                </div>

                <div>
                  <div className="text-gold mb-4 md:mb-6">
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-heading mb-3 md:mb-4">Email Us</h4>
                  <p className="text-soft-ivory/60 text-xs md:text-sm leading-relaxed break-words">
                    info@sheikhinteriors.com <br />
                    sales@sheikhinteriors.com
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <div className="text-gold mb-4 md:mb-6">
                    <Clock className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-heading mb-3 md:mb-4">Working Hours</h4>
                  <p className="text-soft-ivory/60 text-xs md:text-sm leading-relaxed">
                    Monday - Saturday: 10:00 AM - 07:00 PM <br />
                    Sunday: Closed (By Appointment)
                  </p>
                </div>
              </div>

              <div className="mt-10 md:mt-16 pt-10 md:pt-16 border-t border-white/5">
                <button className="w-full py-4 md:py-5 bg-gold text-matte-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 text-xs md:text-sm">
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
