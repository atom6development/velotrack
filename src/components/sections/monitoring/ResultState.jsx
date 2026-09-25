import { MagnifyingGlassMinus, WarningCircle } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";

export function NoResults({ term, onClear }) {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-surface-active text-muted">
        <MagnifyingGlassMinus size={28} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-heading">Nenhum veículo encontrado</h2>
        <p className="text-sm text-muted">
          Não encontramos resultados para “{term}”. Confira a placa ou tente o nome do cliente.
        </p>
      </div>
      <Button variant="secondary" size="sm" onClick={onClear}>
        Nova busca
      </Button>
    </div>
  );
}

export function SearchError({ message, onRetry }) {
  return (
    <div role="alert" className="flex flex-col items-center gap-4 px-2 py-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-danger/10 text-danger">
        <WarningCircle size={28} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-heading">Não foi possível buscar</h2>
        <p className="text-sm text-muted">{message}</p>
      </div>
      <Button variant="secondary" size="sm" onClick={onRetry}>
        Tentar novamente
      </Button>
    </div>
  );
}
