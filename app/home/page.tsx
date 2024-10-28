import { BentoDemo } from "@/components/bento-grid/home-grid";
import { AboutMe } from "@/components/text/AboutMe";
import HyperText from "@/components/ui/hyper-text";
import { BrowserComponent } from "@/components/ui/mock-browser";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <section className="min-h-screen w-full grid place-items-center">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="3gorRuba1l0_"
        />
      </section>

      <section className="w-full">
        <BrowserComponent className="h-[800px]">
          <AboutMe />
        </BrowserComponent>
      </section>

      <section className="w-full py-4">
        <BentoDemo />
      </section>
    </div>
  );
};

export default HomePage;
