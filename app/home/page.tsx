import { PortfolioGrid } from "@/components/bento-grid/home-grid";
import { AboutMe } from "@/components/text/AboutMe";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { TechStack } from "@/components/sections/tech-stack";
import { ContactForm } from "@/components/sections/contact-form";
import HyperText from "@/components/ui/hyper-text";
import { BrowserComponent } from "@/components/ui/mock-browser";
import { DockDemo } from "@/components/dock/Dock";

const HomePage = () => {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <section className="grid min-h-screen w-full place-items-center">
        <div className="z-30 mb-6 rounded-xl border bg-white p-12">
          <HyperText
            className="text-4xl font-bold text-black dark:text-white"
            text="3gorRuba1l0_"
          />
        </div>
      </section>

      <section className="w-full">
        <BrowserComponent className="h-[800px]">
          <AboutMe />
        </BrowserComponent>
      </section>

      <ExperienceTimeline />

      <TechStack />

      <section className="w-full py-4">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="projects"
        />
        <PortfolioGrid />
        <div className="text-muted-foreground text-center text-lg">
          and many more... hit me up if you want to collaborate
        </div>
      </section>

      <ContactForm />

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <DockDemo />
      </div>

      <div className="h-[100px]" />
    </div>
  );
};

export default HomePage;
