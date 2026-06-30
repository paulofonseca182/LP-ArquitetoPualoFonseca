"use client";

import { useEffect, useState } from "react";

const storageKey = "pf_cookie_choice";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!localStorage.getItem(storageKey));
  }, []);

  function acceptCookies() {
    localStorage.setItem(storageKey, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <aside className="cookie-banner" id="cookie-banner" aria-labelledby="cookie-title">
      <div>
        <h2 id="cookie-title">Aviso de cookies</h2>
        <p>Usamos cookies essenciais para melhorar sua experiência de navegação neste site.</p>
      </div>
      <button className="btn btn-primary cookie-accept" type="button" onClick={acceptCookies}>
        Entendi
      </button>
    </aside>
  );
}
