import { Bell, List } from "@phosphor-icons/react";
import { Link } from "react-router";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import UserMenu from "@/components/layout/UserMenu";
import Button from "@/components/ui/Button";
import { useUiStore } from "@/store/useUiStore";

export default function Topbar() {
  const openMobileNav = useUiStore((state) => state.openMobileNav);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-surface px-2 md:px-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={openMobileNav}
        aria-label="Abrir menu"
        className="lg:hidden"
      >
        <List size={24} aria-hidden="true" />
      </Button>

      <Link
        to="/"
        aria-label="Velotrack — ir para o mapa"
        className="flex items-center gap-4 rounded-lg px-2"
      >
        <Logo />
        <span className="hidden h-6 border-l border-border md:block" aria-hidden="true" />
        <span className="hidden text-sm font-medium text-muted md:block">
          Central de Monitoramento
        </span>
      </Link>

      <div className="ml-auto flex items-center gap-1">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Alertas — nenhum alerta novo"
          title="Alertas"
        >
          <Bell size={20} aria-hidden="true" />
        </Button>
        <span className="mx-1 hidden h-6 border-l border-border sm:block" aria-hidden="true" />
        <UserMenu />
      </div>
    </header>
  );
}
