"use client";

import { useRef } from "react";

export function useSwipe(onSwipe, threshold = 42) {
  const touchStart = useRef(null);

  function handleTouchStart(event) {
    if (event.touches.length !== 1) return;
    touchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }

  function handleTouchEnd(event) {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      onSwipe(deltaX < 0 ? "next" : "previous");
    }

    touchStart.current = null;
  }

  return { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd };
}
