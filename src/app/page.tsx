import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import VideoShowcase from "@/components/VideoShowcase";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-bg text-base-text overflow-hidden relative">


      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Testimonials />
        <Marquee />
        
        {/* Core Content Wrapper */}
        <div className="relative">
          
          <VideoShowcase />
          <Comparison />
          <HowItWorks />
          <Features />
          <Guarantee />
        </div>
        
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
