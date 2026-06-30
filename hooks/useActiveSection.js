"use client";

import { useEffect, useState } from "react";

const sectionMap = {
  conceito: "servicos",
  valor: "processo",
  whatsapp: "contato"
};

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mappedSection = sectionMap[entry.target.id] || entry.target.id;
            setActiveSection(mappedSection);
          }
        });
      },
      { rootMargin: "-45% 0px -48% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
