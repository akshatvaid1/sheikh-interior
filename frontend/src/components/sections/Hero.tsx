"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.to(".hero-bg", {
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg w-full h-full bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")`,
            filter: "brightness(0.35)"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm font-light">Design Excellence</span>    
        </motion.div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-8xl font-heading text-soft-ivory leading-[1.1] mb-8"
        >
          Transform Your Space, <br className="hidden sm:block" />
          <span className="text-gold italic">Transform Your Life.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base md:text-xl text-soft-ivory/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Luxury interior and exterior solutions crafted with modern elegance and timeless functionality in Dehradun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
        >
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-gold text-matte-black font-bold uppercase tracking-widest hover:bg-white transition-all text-xs md:text-sm">
            Schedule a Consultation
          </button>
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 border border-white/20 text-soft-ivory font-bold uppercase tracking-widest hover:bg-white hover:text-matte-black transition-all text-xs md:text-sm">
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Mobile Stats */}
      <div className="absolute bottom-6 left-0 w-full z-10 md:hidden">
         <div className="flex justify-around text-soft-ivory/40 text-[10px] uppercase tracking-[0.1em] px-4">
            <div>100+ Projects</div>
            <div>300+ Materials</div>
            <div>100+ Happy Clients</div>
         </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between text-soft-ivory/40 text-xs uppercase tracking-[0.2em]">
          <div>100+ Projects</div>
          <div>300+ Materials</div>
          <div>100+ Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
