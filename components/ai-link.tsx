"use client";

import { useAISidebar } from "@/lib/ai-sidebar-context";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type AILinkProps = ComponentPropsWithoutRef<"a">;

export function AILink({ onClick, children, ...props }: AILinkProps) {
  const { open } = useAISidebar();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    open();
    onClick?.(e);
  };

  return (
    <a href="/ai" onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
