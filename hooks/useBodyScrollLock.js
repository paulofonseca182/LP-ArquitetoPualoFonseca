"use client";

import { useEffect } from "react";

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    document.body.classList.toggle("scroll-locked", Boolean(isLocked));

    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isLocked]);
}
