import type { NextPage } from "next";

import AppLayout from "@/layouts/AppLayout";

import HeroSection from "@/components/partials/HeroSection";
import AboutSection from "@/components/partials/AboutSection";
import ExperienceSection from "@/components/partials/ExperienceSection";
import SkillSection from "@/components/partials/SkillSection";
import Testimonial from "@/components/partials/Testimonial";
import BlogSection from "@/components/partials/BlogSection";
import ContactSection from "@/components/partials/ContactSection";
import PortfolioSection from "@/components/partials/PortfolioSection";

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      {/* Hero stays default (no menu item) */}
      <section className="scroll-mt-24">
        <HeroSection />
      </section>

      <section id="about" className="container pt-20 pb-10 scroll-mt-24">
        <AboutSection />
      </section>

      <section id="experience" className="container py-16 scroll-mt-24">
        <ExperienceSection />
      </section>

      <section id="skills" className="container py-16 scroll-mt-24">
        <SkillSection />
      </section>

      <section id="portfolio" className="container py-16 scroll-mt-24">
        <PortfolioSection />
      </section>

      <section id="testimonials" className="container py-16 scroll-mt-24">
        <Testimonial />
      </section>

      <section id="blog" className="container py-16 scroll-mt-24">
        <BlogSection />
      </section>

      <section id="contact" className="container py-16 scroll-mt-24">
        <ContactSection />
      </section>
    </AppLayout>
  );
};

export default Home;
