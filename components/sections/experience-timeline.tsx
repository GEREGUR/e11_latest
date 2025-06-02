"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrowserComponent } from "@/components/ui/mock-browser";
import HyperText from "@/components/ui/hyper-text";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Company Central",
    description: "Lead frontend development of business directory platform",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Casher Collection",
    description: "Developed e-commerce platform features",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    year: "2021",
    role: "Lead Frontend Developer",
    company: "MyAI Dol Bot",
    description: "Created Telegram bot interface and features",
    tech: ["Node.js", "React", "Telegram API"],
  },
];

export function ExperienceTimeline() {
  return (
    <section className="w-full py-12">
      <HyperText
        className="mb-8 text-4xl font-bold text-black dark:text-white"
        text="experience"
      />
      <BrowserComponent className="h-[700px] max-md:h-[1100px]">
        <div className="space-y-8 p-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-semibold">
                      {exp.role}
                    </CardTitle>
                    <Badge variant="outline" className="text-lg">
                      {exp.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {exp.company} - {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="badge-hover-effect cursor-crosshair px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </BrowserComponent>
    </section>
  );
}
