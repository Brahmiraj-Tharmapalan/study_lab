import Link from "next/link";
import { serviceItems } from "@/constants/sidebar";
import { cn } from "@/lib/utils";

export function SidebarCard() {
  return (
    <aside
      className={cn(
        "max-w-7xl mx-auto mt-8 rounded-xl border border-sidebar-border bg-sidebar/80 shadow-lg backdrop-blur-md p-4 flex flex-col gap-2"
      )}
    >
      <h2
        className={cn(
          "text-4xl font-semibold mb-3 text-center",
          "bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400",
          "bg-clip-text text-transparent",
          "tracking-[.2em]"
        )}
      >
        Services
      </h2>
      <nav className="flex flex-col gap-1">
        {serviceItems.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              "focus-visible:ring-2 focus-visible:ring-sidebar-ring outline-none"
            )}
          >
            <item.icon className="size-5 shrink-0" />
            <span className="font-medium text-base">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
