import Link from "next/link";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

export const metadata = {
  title: "Stockify",
  description: "Gestión de inventario para restaurantes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen">
        <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
          <h2 className="text-xl font-bold mb-6">Stockify</h2>
          <nav className="flex flex-col gap-3">
            <SidebarLink href="/" label="Dashboard" />
            <SidebarLink href="/productos" label="Products" />
            <SidebarLink href="/metricas" label="Metrics" />
            <SidebarLink href="/configuracion" label="Configs" />
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn("hover:bg-gray-700 px-3 py-2 rounded-md transition-all text-sm")}
    >
      {label}
    </Link>
  );
}
