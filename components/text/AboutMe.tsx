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
    <div className="w-full py-12  font-mono md:py-24 lg:py-32">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg md:text-xl text-center leading-relaxed">
            Hi! My name is Egor Rubailo and I&apos;m a freelance frontend
            developer from Moscow who is passionate about optimization and
            UX/UI. Over time, I&apos;ve developed a skill set in a range of
            technologies and frameworks, where I really value clean and readable
            code.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-sm cursor-crosshair select-none md:text-base px-3 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md badge-hover-effect"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="mt-6 group" asChild>
              <a
                href="https://drive.google.com/file/d/1W3_J2KiFULwxfJbhPN51Uv-dADwLVn7-/view?usp=sharing"
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
