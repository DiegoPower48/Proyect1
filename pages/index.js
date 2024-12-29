import { Suspense } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import { Metadata } from "next";
import content from "@/content/pageContent.json";

// Dynamically import components
const Hero = dynamic(() => import("@/components/Hero"), { suspense: true });
const ProblemStatement = dynamic(
  () => import("@/components/ProblemStatement"),
  {
    suspense: true,
  }
);
const ServiceOverview = dynamic(() => import("@/components/ServiceOverview"), {
  suspense: true,
});
const Features = dynamic(() => import("@/components/Features"), {
  suspense: true,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  suspense: true,
});
const UseCases = dynamic(() => import("@/components/UseCases"), {
  suspense: true,
});
const Process = dynamic(() => import("@/components/Process"), {
  suspense: true,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  suspense: true,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  suspense: true,
});
const Resources = dynamic(() => import("@/components/Resources"), {
  suspense: true,
});
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
  suspense: true,
});

// Example iconMap used in <Features/>
const iconMap = {
  analytics: "📊",
  integration: "🔗",
  support: "🤖",
};

export const metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Hero data={content.hero} />
        <ProblemStatement data={content.problemStatement} />
        <ServiceOverview data={content.serviceOverview} />
        <Features data={content.features} iconMap={iconMap} />
        <WhyChooseUs data={content.whyChooseUs} />
        <UseCases data={content.useCases} />
        <Process data={content.process} />
        <Testimonials data={content.testimonials} />
        <Pricing data={content.pricing} />
        <Resources data={content.resources} />
        <FinalCTA data={content.finalCTA} />
      </Suspense>
    </main>
  );
}
