import Link from "next/link";
import { serviceItems } from "@/constants/sidebar";
import { cn } from "@/lib/utils";
import { StarBorder } from "../common/star-border";

type SidebarCardProps = {
  pathname: string;
};

export function SidebarCard({ pathname }: SidebarCardProps) {
  return (
    <aside className={cn("mt-8")}>
      <StarBorder className="w-full max-w-xs " color="white" speed="8s">
        <div className="px-5 py-4">
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
                <span
                  className={cn(
                    "font-medium text-base",
                    pathname === item.route &&
                      "bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </StarBorder>
    </aside>
  );
}
