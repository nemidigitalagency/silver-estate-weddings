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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-gold tracking-[0.4em] text-xs uppercase">404</p>
        <h1 className="mt-4 font-display text-5xl text-foreground">Page Not Found</h1>
        <div className="gold-divider mx-auto mt-6" />
        <p className="mt-6 text-sm text-muted-foreground">
          The page you are looking for has moved or no longer exists.
        </p>
        <div className="mt-8">
          <Link to="/" className="px-6 py-3 text-[11px] tracking-[0.28em] uppercase bg-gradient-gold text-onyx rounded-sm">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-5 py-2.5 text-xs tracking-[0.22em] uppercase bg-gradient-gold text-onyx rounded-sm">
            Try Again
          </button>
          <a href="/" className="px-5 py-2.5 text-xs tracking-[0.22em] uppercase border border-border rounded-sm">Home</a>
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
      { title: "Silver Estate Resort — Luxury Wedding Destination in Tikamgarh" },
      { name: "description", content: "Silver Estate Resort, Tikamgarh — the perfect destination for grand weddings, royal celebrations, luxury stays and corporate events in Madhya Pradesh." },
      { name: "author", content: "Silver Estate Resort" },
      { name: "theme-color", content: "#0f0e0c" },
      { property: "og:title", content: "Silver Estate Resort — Luxury Wedding Destination in Tikamgarh" },
      { property: "og:description", content: "Silver Estate Resort, Tikamgarh — the perfect destination for grand weddings, royal celebrations, luxury stays and corporate events in Madhya Pradesh." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Silver Estate Resort — Luxury Wedding Destination in Tikamgarh" },
      { name: "twitter:description", content: "Silver Estate Resort, Tikamgarh — the perfect destination for grand weddings, royal celebrations, luxury stays and corporate events in Madhya Pradesh." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fc4dcf0f-f065-4189-bd8c-04bc46018954/id-preview-86eba874--4b021132-7fb6-4e52-914b-80a5a609a236.lovable.app-1781847145654.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fc4dcf0f-f065-4189-bd8c-04bc46018954/id-preview-86eba874--4b021132-7fb6-4e52-914b-80a5a609a236.lovable.app-1781847145654.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&family=Pinyon+Script&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
