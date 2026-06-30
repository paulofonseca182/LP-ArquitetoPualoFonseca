import { DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/data/site";

export function createWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildContactMessage(formData) {
  const lines = [
    DEFAULT_WHATSAPP_MESSAGE,
    "",
    `Nome: ${formData.name.trim()}`,
    `WhatsApp: ${formData.phone.trim()}`,
    `Cidade: ${formData.city.trim() || "Não informado"}`,
    `Tipo de projeto: ${formData.projectType}`
  ];

  if (formData.message.trim()) {
    lines.push(`Mensagem: ${formData.message.trim()}`);
  }

  return lines.join("\n");
}
