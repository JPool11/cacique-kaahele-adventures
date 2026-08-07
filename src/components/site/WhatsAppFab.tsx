import { WHATSAPP } from "@/data/tours";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp con Cacique Kaahele"
      className="focus-ring fixed right-4 bottom-4 z-50 inline-flex min-h-14 min-w-14 items-center gap-2 rounded-full bg-jungle px-4 text-on-ocean shadow-float transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="size-7 shrink-0 fill-current" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 2C6.5 2 2 6.5 2 12.05c0 1.77.46 3.5 1.34 5.02L2 22l5.05-1.32a10 10 0 0 0 5 1.28h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2zm0 18.13h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3 .78.8-2.92-.2-.3a8.28 8.28 0 0 1-1.27-4.4c0-4.6 3.74-8.34 8.35-8.34 2.23 0 4.32.87 5.9 2.45a8.28 8.28 0 0 1 2.44 5.9c0 4.6-3.74 8.34-8.34 8.34z" />
      </svg>
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
