"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { INSTAGRAM_URL, projectTypeOptions } from "@/data/site";
import { buildContactMessage, createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

const initialFormData = {
  name: "",
  phone: "",
  city: "",
  projectType: projectTypeOptions[0],
  message: ""
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Informe seu nome para iniciarmos o atendimento.";
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Informe um WhatsApp válido com DDD.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback("");

    if (!validateForm()) {
      setFeedback("Revise os campos destacados antes de enviar.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("Abrindo o WhatsApp com sua mensagem.");
    window.open(createWhatsAppLink(buildContactMessage(formData)), "_blank", "noopener");

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 900);
  }

  return (
    <section className="section section-light contact" id="contato" aria-labelledby="contato-title">
      <div className="container contact-layout">
        <Reveal className="section-heading">
          <p className="eyebrow">Formulário</p>
          <h2 id="contato-title">Envie um resumo do seu projeto.</h2>
          <p>Preencha os dados principais e o WhatsApp será aberto com uma mensagem pronta para iniciar o atendimento.</p>

          <address className="contact-data">
            <a className="contact-data-link" href="mailto:pfonseca.arq@gmail.com">
              <span className="contact-link-icon" aria-hidden="true">
                <Mail strokeWidth={1.55} />
              </span>
              <span>pfonseca.arq@gmail.com</span>
            </a>
            <a className="contact-data-link" href={INSTAGRAM_URL} target="_blank" rel="noopener">
              <span className="contact-link-icon" aria-hidden="true">
                <Instagram strokeWidth={1.55} />
              </span>
              <span>@arquitetopaulofonseca</span>
            </a>
            <a className="contact-data-link" href="tel:+5537999061018">
              <span className="contact-link-icon" aria-hidden="true">
                <Phone strokeWidth={1.55} />
              </span>
              <span>(37) 9 9906-1018</span>
            </a>
          </address>
        </Reveal>

        <Reveal as="form" className="contact-form" id="contact-form" noValidate onSubmit={handleSubmit} delay={0.08}>
          <div className="form-field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={updateField}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <small className="field-error" id="name-error">
              {errors.name}
            </small>
          </div>

          <div className="form-field">
            <label htmlFor="phone">WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(37) 9 9999-9999"
              value={formData.phone}
              onChange={updateField}
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <small className="field-error" id="phone-error">
              {errors.phone}
            </small>
          </div>

          <div className="form-field">
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Dores do Indaiá"
              value={formData.city}
              onChange={updateField}
            />
          </div>

          <div className="form-field">
            <label htmlFor="project-type">Tipo de projeto</label>
            <select id="project-type" name="projectType" value={formData.projectType} onChange={updateField}>
              {projectTypeOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Conte brevemente o que você deseja construir ou reformar."
              value={formData.message}
              onChange={updateField}
            />
          </div>

          <button className="btn btn-primary form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Redirecionando..." : "Enviar pelo WhatsApp"}
          </button>
          <p className="form-feedback" id="form-feedback" role="status" aria-live="polite">
            {feedback}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
