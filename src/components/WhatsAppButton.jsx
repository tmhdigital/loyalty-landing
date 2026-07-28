"use client";

const WHATSAPP_NUMBER = "923035540807"; // +92 303 5540807, no leading + or 0
const DEFAULT_MESSAGE = "Hi Rewaldo, I'd like to know more about your loyalty platform.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rewaldo on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
        <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.7-.7 1.95-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.56-.35z" />
        <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.87c0 1.76.46 3.48 1.34 5L2 22l5.28-1.38a9.9 9.9 0 004.76 1.21h.01c5.46 0 9.9-4.42 9.9-9.87C21.95 6.42 17.5 2 12.04 2zm0 18.05h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 01-1.26-4.32c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.41a8.16 8.16 0 012.41 5.82c0 4.53-3.7 8.17-8.24 8.17z" />
      </svg>
    </a>
  );
}
