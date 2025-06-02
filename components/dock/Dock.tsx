"use client";

import React from "react";

import { Dock, DockIcon } from "../ui/dock";
import { cn } from "@/lib/utils";
import { FaTelegram, FaGithub, FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo({ className }: { className?: string }) {
  const { push } = useRouter();

  const handleDockLinkClick = ({
    link,
    scrollToTop,
  }: {
    link: string;
    scrollToTop?: boolean;
  }) => {
    push(link, { scroll: scrollToTop ? true : false });
  };
  return (
    <div className={cn(`relative`, className)}>
      <Dock direction="middle">
        <DockIcon>
          <div onClick={() => handleDockLinkClick({ link: "/home" })}>
            <FaHome size={24} />
          </div>
        </DockIcon>
        <DockIcon>
          <div
            onClick={() =>
              handleDockLinkClick({ link: "https://t.me/geregur" })
            }
          >
            <FaTelegram size={24} />
          </div>
        </DockIcon>
        <DockIcon>
          <div
            onClick={() =>
              handleDockLinkClick({ link: "https://x.com/GeregurGeregur" })
            }
          >
            <FaXTwitter size={24} />
          </div>
        </DockIcon>
        <DockIcon>
          <div
            onClick={() =>
              handleDockLinkClick({
                link: "https://github.com/GEREGUR",
                scrollToTop: true,
              })
            }
          >
            <FaGithub size={24} />
          </div>
        </DockIcon>
      </Dock>
    </div>
  );
}
