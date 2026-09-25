import { useState } from "react";
import { twMerge } from "tailwind-merge";
import EmptyState from "@/components/sections/monitoring/EmptyState";
import { NoResults, SearchError } from "@/components/sections/monitoring/ResultState";
import ResultsSkeleton from "@/components/sections/monitoring/ResultsSkeleton";
import SearchForm from "@/components/sections/monitoring/SearchForm";
import VehicleResults from "@/components/sections/monitoring/VehicleResults";
import { useMonitoringStore } from "@/store/useMonitoringStore";

export default function VehicleSearchPanel({ query, visibleVehicles }) {
  const searchTerm = useMonitoringStore((state) => state.searchTerm);
  const setSearchTerm = useMonitoringStore((state) => state.setSearchTerm);
  const clearSearch = useMonitoringStore((state) => state.clearSearch);
  const [inputValue, setInputValue] = useState(searchTerm);
  const hasResults = Boolean(searchTerm && query.data?.total);

  function handleClear() {
    setInputValue("");
    clearSearch();
  }

  function handlePickExample(example) {
    setInputValue(example);
    setSearchTerm(example);
  }

  function renderContent() {
    if (!searchTerm) return <EmptyState onPickExample={handlePickExample} />;
    if (query.isLoading) return <ResultsSkeleton />;
    if (query.isError) return <SearchError message={query.error.message} onRetry={query.refetch} />;
    if (query.data.total === 0) return <NoResults term={searchTerm} onClear={handleClear} />;

    return (
      <VehicleResults
        total={query.data.total}
        vehicles={query.data.items}
        visibleVehicles={visibleVehicles}
        onClear={handleClear}
      />
    );
  }

  return (
    <section
      aria-label="Busca de veículos"
      className={twMerge(
        "absolute inset-x-0 bottom-0 z-10 flex max-h-1/2 flex-col gap-4 rounded-t-2xl border-t border-border bg-surface p-4 shadow-2xl lg:top-4 lg:left-4 lg:max-h-none lg:w-96 lg:rounded-xl lg:border",
        hasResults ? "lg:bottom-4" : "lg:bottom-auto",
      )}
    >
      <SearchForm
        value={inputValue}
        onValueChange={setInputValue}
        onSearch={setSearchTerm}
        onClear={handleClear}
      />
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">{renderContent()}</div>
    </section>
  );
}
