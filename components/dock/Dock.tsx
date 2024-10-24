"use client";

import React from "react";

import { Dock, DockIcon } from "../ui/dock";
import { cn } from "@/lib/utils";
import { Home, Joystick, Lasso, Pen } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo({ className }: { className?: string }) {
  return (
    <div className={cn(`relative`, className)}>
      <Dock direction="middle">
        <DockIcon>
          <Home />
        </DockIcon>
        <DockIcon>
          <Pen />
        </DockIcon>
        <DockIcon>
          <Joystick />
        </DockIcon>
        <DockIcon>
          <Lasso />
        </DockIcon>
      </Dock>
    </div>
  );
}
