const icons = {
  architecture: (
    <>
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M3 11l9-7 9 7" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  interiors: (
    <>
      <path d="M6 12V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <path d="M5 12h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2Z" />
      <path d="M6 18v3" />
      <path d="M18 18v3" />
    </>
  ),
  lighting: (
    <>
      <path d="M9 14.5a5 5 0 1 1 6 0c-.8.65-1.2 1.35-1.2 2.5h-3.6c0-1.15-.4-1.85-1.2-2.5Z" />
      <path d="M10 20h4" />
      <path d="M11 22h2" />
      <path d="M12 2v2" />
    </>
  ),
  electrical: <path d="M13 2 5 14h6l-1 8 9-13h-6l1-7Z" />,
  ceiling: (
    <>
      <path d="M4 6h16" />
      <path d="M6 10h12" />
      <path d="M8 14h8" />
      <path d="M10 18h4" />
    </>
  ),
  finishes: (
    <>
      <rect x="4" y="5" width="6" height="6" rx="1" />
      <rect x="14" y="5" width="6" height="6" rx="1" />
      <rect x="4" y="15" width="6" height="6" rx="1" />
      <path d="M14 18h6" />
      <path d="M17 15v6" />
    </>
  ),
  construction: (
    <>
      <rect x="6" y="5" width="12" height="16" rx="2" />
      <path d="M9 5a3 3 0 0 1 6 0" />
      <path d="m9 14 2 2 4-5" />
    </>
  ),
  regularization: (
    <>
      <path d="M7 3h7l4 4v14H7Z" />
      <path d="M14 3v5h5" />
      <path d="M10 13h6" />
      <path d="M10 17h6" />
    </>
  )
};

export function ServiceIcon({ name }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[name]}</svg>
    </span>
  );
}
