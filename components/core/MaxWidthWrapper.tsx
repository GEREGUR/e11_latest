import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full py-2 md:py-4 w-full max-w-screen-xl px-2.5 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
