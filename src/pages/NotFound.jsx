import { Link } from "react-router";
import Logo from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Logo />
      <p className="text-eyebrow text-muted uppercase">Página não encontrada</p>
      <h1 className="text-responsive-lg font-bold text-heading">Este endereço não existe</h1>
      <p className="max-w-prose text-responsive-md text-muted">
        O link pode estar errado ou a página foi movida.
      </p>
      <Link
        to="/"
        className="flex h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
      >
        Voltar para o mapa
      </Link>
    </main>
  );
}
