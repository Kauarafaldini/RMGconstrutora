import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappLink = "https://wa.me/19995867384";

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
    aria-label="Fale conosco no WhatsApp"
  >
    <FaWhatsapp size={28} />
  </a>
);

export default WhatsAppButton;