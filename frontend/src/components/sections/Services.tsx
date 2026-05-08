"use client";

import { motion } from "framer-motion";
import { Home, Building2, Layout, Grid3X3, Box, Hammer, Ruler } from "lucide-react";

const services = [
  { title: "Interior Designing", icon: <Home className="w-6 h-6 md:w-8 md:h-8" />, desc: "Bespoke living spaces tailored to your lifestyle." },
  { title: "Exterior Designing", icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />, desc: "Architectural brilliance that makes a lasting impression." },
  { title: "PVC Ceiling", icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />, desc: "Modern, durable, and elegant ceiling solutions." },
  { title: "PVC Wall Panels", icon: <Grid3X3 className="w-6 h-6 md:w-8 md:h-8" />, desc: "Sophisticated wall treatments for every room." },
  { title: "Toughened Glass", icon: <Box className="w-6 h-6 md:w-8 md:h-8" />, desc: "Premium glass work for modern aesthetics and safety." },
  { title: "Aluminium Work", icon: <Hammer className="w-6 h-6 md:w-8 md:h-8" />, desc: "Precision-engineered aluminium solutions." },
  { title: "Front Elevation", icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />, desc: "Stunning facade designs that redefine luxury." },
  { title: "Renovation", icon: <Ruler className="w-6 h-6 md:w-8 md:h-8" />, desc: "Complete transformations for old spaces." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-matte-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <div className="max-w-2xl mb-8 md:mb-0">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Our Expertise</span>      
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading leading-tight">
              Premium Solutions <br className="hidden sm:block" /> 
              <span className="text-gold italic">For Every Space.</span>
            </h2>
          </div>
          <div className="text-soft-ivory/50 max-w-xs text-xs md:text-sm leading-relaxed">
            We combine architectural precision with artistic vision to create immersive environments.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="p-8 md:p-10 border border-white/5 bg-charcoal/50 backdrop-blur-sm group hover:bg-gold transition-all duration-500 cursor-pointer"
            >
              <div className="text-gold group-hover:text-matte-black transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-4 group-hover:text-matte-black transition-colors">{service.title}</h3>
              <p className="text-soft-ivory/60 text-xs md:text-sm leading-relaxed group-hover:text-matte-black/80 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
