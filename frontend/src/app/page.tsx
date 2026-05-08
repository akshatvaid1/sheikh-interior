import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <section className="py-20 text-center bg-charcoal">
        <p className="text-soft-ivory/20 uppercase tracking-[0.5em] text-xs">Experience Modern Luxury</p>       
      </section>
    </main>
  );
}

