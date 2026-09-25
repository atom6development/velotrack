import { MagnifyingGlass } from "@phosphor-icons/react";

const EXAMPLES = ["Kwid", "Transportes Cerrado", "S10"];

export default function EmptyState({ onPickExample }) {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-surface-active text-muted">
        <MagnifyingGlass size={28} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-heading">Nenhum veículo no mapa ainda</h2>
        <p className="text-sm text-muted">
          Busque por placa, modelo ou cliente para iniciar o atendimento e ver os veículos no mapa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-muted">Experimente:</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {EXAMPLES.map((example) => (
            <li key={example}>
              <button
                type="button"
                onClick={() => onPickExample(example)}
                className="h-9 rounded-full border border-border px-3 text-xs font-medium text-body transition-colors hover:bg-surface-hover hover:text-heading"
              >
                {example}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
