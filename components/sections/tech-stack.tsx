"use client";

import { motion } from "framer-motion";
import { BrowserComponent } from "@/components/ui/mock-browser";
import HyperText from "@/components/ui/hyper-text";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "TanStack Query", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "Redux", level: 75 },
    ],
  },
  {
    category: "Mobile & Other",
    items: [
      { name: "React Native", level: 80 },
      { name: "Drizzle", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
];

export function TechStack() {
  return (
    <section className="w-full py-12">
      <HyperText
        className="mb-8 text-4xl font-bold text-black dark:text-white"
        text="tech_stack"
      />
      <BrowserComponent className="h-[600px] overflow-hidden max-md:h-[1100px]">
        <div className="grid h-full gap-8 bg-white p-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">{tech.category}</h3>
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: (categoryIndex + itemIndex) * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </BrowserComponent>
    </section>
  );
}
