import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import About from "@/components/home/About";
import Programs from "@/components/home/Programs";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import StudentWorks from "@/components/home/StudentWorks";
import Testimonials from "@/components/home/Testimonials";
import Partner from "@/components/home/Partner";
import Faqs from "@/components/home/Faqs";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Programs />
      <Features />
      <HowItWorks />
      <StudentWorks />
      <Testimonials />
      <Partner />
      <Faqs />
      <CtaBanner />
    </>
  );
}
