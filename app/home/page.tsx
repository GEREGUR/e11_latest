import { CanvasRevealEffectDemo } from "@/components/card/Card";
import { AboutMe } from "@/components/text/AboutMe";
import HyperText from "@/components/ui/hyper-text";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <section className="min-h-screen w-full grid place-items-center">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="3gorRuba1l0"
        />
      </section>

      <section>
        <AboutMe />
      </section>

      <section className="w-full"></section>
    </div>
  );
};

export default HomePage;
