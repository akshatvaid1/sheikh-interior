"use client";

import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}

