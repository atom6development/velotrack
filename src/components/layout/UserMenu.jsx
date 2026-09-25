import { CaretDown, SignOut, UserCircle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Avatar from "@/components/ui/Avatar";
import { useAuth } from "@/hooks/useAuth";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointer(event) {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    }
    function handleKey(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="flex h-11 items-center gap-3 rounded-lg px-2 text-left transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-brand"
      >
        <Avatar src={user.avatarUrl} name={user.name} />
        <span className="hidden flex-col md:flex">
          <span className="text-sm font-medium text-heading">{user.name}</span>
          <span className="text-xs text-muted">{user.role}</span>
        </span>
        <CaretDown
          size={16}
          aria-hidden="true"
          className={twMerge(
            "hidden text-muted transition-transform md:block",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-full right-0 z-50 mt-2 w-56 rounded-lg border border-border bg-overlay p-1 shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-border px-3 py-2.5 md:hidden">
            <Avatar src={user.avatarUrl} name={user.name} size="md" />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-heading">{user.name}</p>
              <p className="text-xs text-muted">{user.role}</p>
            </div>
          </div>
          <button
            type="button"
            role="menuitem"
            disabled
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-disabled"
          >
            <UserCircle size={20} aria-hidden="true" />
            Editar perfil
            <span className="ml-auto text-xs">Em breve</span>
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-body transition-colors hover:bg-surface-hover hover:text-heading"
          >
            <SignOut size={20} aria-hidden="true" />
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
