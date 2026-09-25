import { twMerge } from "tailwind-merge";
import { VEHICLE_STATUS, VEHICLE_STATUS_ORDER } from "@/lib/vehicle-status";
import { useMonitoringStore } from "@/store/useMonitoringStore";

export default function StatusFilter({ counts }) {
  const hiddenStatuses = useMonitoringStore((state) => state.hiddenStatuses);
  const toggleStatus = useMonitoringStore((state) => state.toggleStatus);

  return (
    <div role="group" aria-label="Filtrar por status" className="flex flex-wrap gap-2">
      {VEHICLE_STATUS_ORDER.filter((status) => counts[status]).map((status) => {
        const isActive = !hiddenStatuses.includes(status);
        return (
          <button
            key={status}
            type="button"
            aria-pressed={isActive}
            onClick={() => toggleStatus(status)}
            className={twMerge(
              "flex h-9 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium transition-colors hover:bg-surface-hover",
              isActive ? "text-heading" : "text-disabled line-through",
            )}
          >
            <span
              aria-hidden="true"
              className={twMerge(
                "size-2 rounded-full",
                VEHICLE_STATUS[status].dot,
                !isActive && "opacity-40",
              )}
            />
            {VEHICLE_STATUS[status].label}
            <span className="text-muted">{counts[status]}</span>
          </button>
        );
      })}
    </div>
  );
}
