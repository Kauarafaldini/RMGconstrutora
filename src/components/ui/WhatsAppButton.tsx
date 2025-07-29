import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLink = "https://wa.me/19995867384";

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
    aria-label="Fale conosco no WhatsApp"
  >
    <FaWhatsapp size={28} />
  </a>
);

export default WhatsAppButton;