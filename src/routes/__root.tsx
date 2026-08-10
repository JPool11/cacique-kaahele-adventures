import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PlaneCursor } from "@/components/site/PlaneCursor";
import { MaintenancePage } from "@/components/site/MaintenancePage";
import { Toaster } from "@/components/ui/sonner";
import { isMaintenanceMode } from "@/lib/maintenance";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-gradient-sunset text-7xl font-extrabold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Este destino no existe</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas se fue de viaje. Vuelve al inicio y elige tu próxima aventura.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-gradient-sunset px-6 py-3 text-sm font-bold text-on-sun"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo salió mal. Puedes reintentar o volver al inicio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-bold text-foreground"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cacique Kaahele | Agencia de turismo" },
      { name: "description", content: "Experiencias de viaje inolvidables por Colombia y el mundo." },
      { name: "author", content: "Cacique Kaahele" },
      { name: "theme-color", content: "#0d4657" },
      { property: "og:site_name", content: "Cacique Kaahele" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cacique Kaahele",
          url: "/",
          logo: "/favicon.png",
          sameAs: ["https://instagram.com", "https://facebook.com", "https://youtube.com"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  if (isMaintenanceMode) {
    return (
      <QueryClientProvider client={queryClient}>
        <MaintenancePage />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#contenido"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-card focus:px-5 focus:py-3 focus:font-bold"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <PlaneCursor />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
