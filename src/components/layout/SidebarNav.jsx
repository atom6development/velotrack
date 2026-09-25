import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import { NAVIGATION } from "@/lib/navigation";

const itemBase =
  "flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand";

export default function SidebarNav({ isCollapsed = false, onNavigate }) {
  return (
    <nav aria-label="Navegação principal" className="flex flex-col gap-6">
      {NAVIGATION.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className={isCollapsed ? "sr-only" : "px-3 pb-1 text-eyebrow text-muted uppercase"}>
            {group.title}
          </p>

          {group.items.map(({ label, icon: Icon, to }) =>
            to ? (
              <NavLink
                key={label}
                to={to}
                end
                onClick={onNavigate}
                title={isCollapsed ? label : undefined}
                className={({ isActive }) =>
                  twMerge(
                    itemBase,
                    isCollapsed && "justify-center px-0",
                    isActive
                      ? "bg-primary/10 text-primary dark:bg-brand/15 dark:text-heading"
                      : "text-body hover:bg-surface-hover hover:text-heading",
                  )
                }
              >
                <Icon size={20} aria-hidden="true" />
                <span className={twMerge(isCollapsed && "sr-only")}>{label}</span>
              </NavLink>
            ) : (
              <span
                key={label}
                aria-disabled="true"
                title={isCollapsed ? `${label} (em breve)` : undefined}
                className={twMerge(
                  itemBase,
                  "cursor-default text-disabled",
                  isCollapsed && "justify-center px-0",
                )}
              >
                <Icon size={20} aria-hidden="true" />
                <span className={twMerge("truncate", isCollapsed && "sr-only")}>{label}</span>
                {!isCollapsed && (
                  <span className="ml-auto shrink-0 rounded-full border border-border px-2 py-0.5 text-xs whitespace-nowrap">
                    Em breve
                  </span>
                )}
              </span>
            ),
          )}
        </div>
      ))}
    </nav>
  );
}
