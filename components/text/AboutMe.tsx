import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const AboutMe = () => {
  const skills = [
    "NEXT.JS",
    "React",
    "Tailwind",
    "TypeScript",
    "TansTack Query",
    "Drizzle",
    "React Native",
    "Zustand",
    "Much more...",
  ];

  return (
    <div className="w-full py-12 font-mono md:py-24 lg:py-32">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-semibold md:text-5xl lg:text-6xl">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-lg leading-relaxed md:text-xl">
            Hi! My name is Egor Rubailo and I&apos;m a frontend developer from
            Moscow who is passionate about optimization and UX/UI. Over time,
            I&apos;ve developed a skill set in a range of technologies and
            frameworks, where I really value clean and readable code.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="badge-hover-effect cursor-crosshair select-none px-3 py-1 text-sm transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md md:text-base"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="group mt-6" asChild>
              <a
                href="https://drive.google.com/file/d/1P1Xp3iZpv0l89RFelTO2wHhb0k_632al/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
