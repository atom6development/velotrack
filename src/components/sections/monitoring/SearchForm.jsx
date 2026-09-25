import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/ui/Button";

const MIN_LENGTH = 2;

export default function SearchForm({ value, onValueChange, onSearch, onClear }) {
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const term = value.trim();

    if (!term) return setError("Digite uma placa, veículo ou cliente para buscar.");
    if (term.length < MIN_LENGTH) return setError(`Digite ao menos ${MIN_LENGTH} caracteres.`);

    setError("");
    onSearch(term);
  }

  function handleChange(event) {
    onValueChange(event.target.value);
    if (error) setError("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate role="search" className="flex flex-col gap-2">
      <label htmlFor="vehicle-search" className="text-sm font-medium text-heading">
        Buscar veículos
      </label>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <MagnifyingGlass
            size={20}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
          />
          <input
            id="vehicle-search"
            type="text"
            enterKeyHint="search"
            value={value}
            onChange={handleChange}
            placeholder="Placa, veículo ou cliente"
            autoComplete="off"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "vehicle-search-error" : "vehicle-search-help"}
            className={twMerge(
              "h-11 w-full rounded-lg border border-border bg-background pr-11 pl-10 text-sm text-heading placeholder:text-muted focus:border-brand focus:outline-none",
              error && "border-danger focus:border-danger",
            )}
          />
          {value && (
            <button
              type="button"
              onClick={() => {
                setError("");
                onClear();
              }}
              aria-label="Limpar busca"
              className="absolute top-1/2 right-1 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:bg-surface-hover hover:text-heading"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        <Button type="submit">Buscar</Button>
      </div>

      {error ? (
        <p id="vehicle-search-error" role="alert" className="text-xs text-danger">
          {error}
        </p>
      ) : (
        <p id="vehicle-search-help" className="text-xs text-muted">
          Exibe até 50 veículos no mapa por busca.
        </p>
      )}
    </form>
  );
}
