"use client";

import React from "react";

import { Dock, DockIcon } from "../ui/dock";
import { cn } from "@/lib/utils";
import { FaTelegram, FaGithub, FaHome } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo({ className }: { className?: string }) {
  return (
    <div className={cn(`relative`, className)}>
      <Dock direction="middle">
        <DockIcon>
          <FaHome size={24} />
        </DockIcon>
        <DockIcon>
          <FaTelegram size={24} />
        </DockIcon>
        <DockIcon>
          <FaXTwitter size={24} />
        </DockIcon>
        <DockIcon>
          <FaGithub size={24} />
        </DockIcon>
      </Dock>
    </div>
  );
}
