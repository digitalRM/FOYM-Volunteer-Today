import Hero from "@/components/sections/1 - Hero";
import InfoSectionOne from "@/components/sections/2 - InfoSection";
import CallToAction from "@/components/sections/3 - CallToAction";
import Footer from "@/components/sections/4 - Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex w-screen scroll-smooth">  
      <Hero />
      <InfoSectionOne />
      <CallToAction />
      <Footer />
    </div>
  );
}
