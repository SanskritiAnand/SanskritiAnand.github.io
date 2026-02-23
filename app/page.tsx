import HomeSection from "@/components/section/home-section";
import ExperienceSection from "@/components/section/service-section";
import AchievementsSection from "@/components/section/pricing-section";
import ProjectSection from "@/components/section/testimonial-section";
import AboutSection from "@/components/section/about-section";
import EducationSection from "@/components/section/education-section";

export default function Home() {
  return (
    <main className="flex flex-col pad-x py-6 md:py-24 items-center gap-y-8 md:gap-y-16">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <AchievementsSection />
      <EducationSection />
    </main>
  );
}
