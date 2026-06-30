import { createWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span className="wa-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            className="wa-mark-bg"
            d="M12.04 2a9.94 9.94 0 0 0-8.56 15.02L2.2 21.8l4.88-1.28A9.94 9.94 0 1 0 12.04 2Z"
          />
          <path
            className="wa-mark-phone"
            d="M16.94 14.86c-.27-.14-1.6-.8-1.85-.88-.25-.1-.43-.14-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.46h-.52c-.18 0-.48.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.62 1.1 2.8.14.18 1.9 2.9 4.61 4.07.64.28 1.14.44 1.53.57.65.2 1.24.18 1.7.11.52-.08 1.6-.65 1.82-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.31Z"
          />
        </svg>
      </span>
      <span className="wa-label">Fale conosco</span>
    </a>
  );
}
