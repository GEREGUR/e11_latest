import { GlobeIcon, CodeIcon, BotIcon, LayoutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";

const projects = [
  {
    name: "Company Central",
    description: "Business directory and company registry platform",
    tech: "Next.js, TypeScript, Tailwind CSS, Zustand",
    role: "Frontend Developer",
    url: "companycentral.co.uk",
  },
  {
    name: "Casher Collection",
    description: "E-commerce fashion platform",
    tech: "Next.js, TypeScript, Tailwind CSS, Zustand",
    role: "Frontend Developer",
    url: "cashercollection.com",
  },
  {
    name: "MyAI Dol Bot",
    description: "Telegram AI assistant bot",
    tech: "Next.js, TypeScript, Tailwind CSS, OpenAI",
    role: "Frontend Developer",
    url: "t.me/myaidol_bot",
  },
  {
    name: "MyAI Dol Bot",
    description: "Telegram AI assistant bot",
    tech: "Next.js, TypeScript, Tailwind CSS, OpenAI",
    role: "Frontend Developer",
    url: "t.me/myaidol_bot",
  },
];

const features = [
  {
    Icon: GlobeIcon,
    name: "Company Central",
    description: "Lead frontend developer for business directory platform",
    href: "https://companycentral.co.uk",
    cta: "Visit Site",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {projects.slice(0, 2).map((p, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-col">
              <figcaption className="font-mono text-sm font-bold dark:text-white">
                {p.name}
              </figcaption>
              <div className="text-muted-foreground mt-1 text-xs">{p.role}</div>
            </div>
            <blockquote className="mt-2 text-xs">{p.tech}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: CodeIcon,
    name: "Casher Collection",
    description: "E-commerce platform development",
    href: "https://cashercollection.com",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {projects.slice(1, 3).map((p, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-col">
              <figcaption className="font-mono text-sm font-bold dark:text-white">
                {p.name}
              </figcaption>
              <div className="text-muted-foreground mt-1 text-xs">{p.role}</div>
            </div>
            <blockquote className="mt-2 text-xs">{p.tech}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BotIcon,
    name: "MyAI Dol Bot",
    description: "Telegram AI assistant development",
    href: "https://t.me/myaidol_bot",
    cta: "Try Bot",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {projects.slice(2, 4).map((p, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-col">
              <figcaption className="font-mono text-sm font-bold dark:text-white">
                {p.name}
              </figcaption>
              <div className="text-muted-foreground mt-1 text-xs">{p.role}</div>
            </div>
            <blockquote className="mt-2 text-xs">{p.tech}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: LayoutIcon,
    name: "PIR-EX",
    description: "Financial platform frontend development",
    href: "https://pir-ex.ru",
    cta: "Visit Site",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {[projects[3], projects[0]].map((p, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-col">
              <figcaption className="font-mono text-sm font-bold dark:text-white">
                {p.name}
              </figcaption>
              <div className="text-muted-foreground mt-1 text-xs">{p.role}</div>
            </div>
            <blockquote className="mt-2 text-xs">{p.tech}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export function PortfolioGrid() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
