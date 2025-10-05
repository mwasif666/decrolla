import HeroSectionTwo from "@/components/PageSections/HeroSectionTwo";
import AboutSectionTwo from "@/components/PageSections/AboutSectionTwo";
import FeatureSection from "@/components/PageSections/FeatureSection";
import CounterSection from "@/components/PageSections/CounterSection";
import ServiceSectionTwo from "@/components/PageSections/ServiceSectionTwo";
import ProjectSectionTwo from "@/components/PageSections/ProjectSectionTwo";
import ProcessSectionTwo from "@/components/PageSections/ProcessSectionTwo";
import AwardSection from "@/components/PageSections/AwardSection";
import TestimonialSectionTwo from "@/components/PageSections/TestimonialSectionTwo";
import FeatureLineSection from "@/components/PageSections/FeatureLineSection";
import FaqSection from "@/components/PageSections/FaqSection";
import BlogSectionTwo from "@/components/PageSections/BlogSectionTwo";
import ClientSection from "@/components/PageSections/ClientSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import HowItWorks from "@/components/HowItWorks";
import FinestDesigners from "@/components/FinestDesigners";
import Testimonial from "@/components/Founder";
import MakeoverShowcase from "../components/MakeoverShowcase";
import VendorsShowcase from "../components/VendorsShowcase";
import SpacesTransformed from "../components/SpacesTransformed";
import TestimonialsMasonry from "../components/TestimonialsMasonry";
import BenefitsThree from "../components/BenefitsThree";
import ConsultationCTA from "../components/ConsultationCTA";
import FeaturedTrusted from "../components/FeaturedTrusted";

export default function HomeTwo() {
  return (
    <>
      {/* Hero Area*/}
      <HeroSectionTwo />

      <HowItWorks />

      <FinestDesigners />

      <MakeoverShowcase />

      <VendorsShowcase />

      <Testimonial />

      <SpacesTransformed />

      <TestimonialsMasonry />

      <BenefitsThree />

      <ConsultationCTA />

      <FeaturedTrusted />
    </>
  );
}
