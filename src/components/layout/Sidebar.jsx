import { CaretDoubleLeft, X } from "@phosphor-icons/react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/layout/Logo";
import SidebarNav from "@/components/layout/SidebarNav";
import Button from "@/components/ui/Button";
import { useUiStore } from "@/store/useUiStore";

export default function Sidebar() {
  const isCollapsed = useUiStore((state) => state.isSidebarCollapsed);
  const toggleSidebar = useUiStore((state) => state.toggleSidebar);
  const isMobileNavOpen = useUiStore((state) => state.isMobileNavOpen);
  const closeMobileNav = useUiStore((state) => state.closeMobileNav);

  useEffect(() => {
    if (!isMobileNavOpen) return;
    function handleKey(event) {
      if (event.key === "Escape") closeMobileNav();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMobileNavOpen, closeMobileNav]);

  return (
    <>
      <aside
        className={twMerge(
          "hidden shrink-0 flex-col border-r border-border bg-surface transition-all lg:flex",
          isCollapsed ? "w-20" : "w-72",
        )}
      >
        <div className="flex-1 overflow-y-auto p-4">
          <SidebarNav isCollapsed={isCollapsed} />
        </div>
        <div className="border-t border-border p-4">
          <Button
            variant="ghost"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
            className={twMerge("w-full", isCollapsed ? "px-0" : "justify-start")}
          >
            <CaretDoubleLeft
              size={20}
              aria-hidden="true"
              className={twMerge("transition-transform", isCollapsed && "rotate-180")}
            />
            {!isCollapsed && "Recolher menu"}
          </Button>
        </div>
      </aside>

      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMobileNav}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-full flex-col bg-surface shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <Logo />
              <Button variant="ghost" size="icon" onClick={closeMobileNav} aria-label="Fechar menu">
                <X size={20} aria-hidden="true" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <SidebarNav onNavigate={closeMobileNav} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
