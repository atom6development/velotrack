import { Buildings, Clock, Gauge, MapPin } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { formatRelativeTime } from "@/lib/format/time";
import { VEHICLE_STATUS } from "@/lib/vehicle-status";

export default function VehicleCard({ vehicle, isSelected, onSelect }) {
  const status = VEHICLE_STATUS[vehicle.status];

  return (
    <button
      type="button"
      onClick={() => onSelect(vehicle.id)}
      aria-pressed={isSelected}
      className={twMerge(
        "flex w-full flex-col gap-2 rounded-lg border border-border bg-surface p-3 text-left transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-brand",
        isSelected && "border-brand bg-surface-hover",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-heading">{vehicle.plate}</span>
          <span className="text-xs text-muted">
            {vehicle.model} · {vehicle.brand}
          </span>
        </div>
        <span className={twMerge("flex items-center gap-1.5 text-xs font-medium", status.text)}>
          <span aria-hidden="true" className={twMerge("size-2 rounded-full", status.dot)} />
          {status.label}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-body">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Velocidade</dt>
          <Gauge size={16} aria-hidden="true" className="text-muted" />
          <dd>{vehicle.speed} km/h</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Última atualização</dt>
          <Clock size={16} aria-hidden="true" className="text-muted" />
          <dd>{formatRelativeTime(vehicle.updatedAt)}</dd>
        </div>
        <div className="col-span-2 flex items-center gap-1.5">
          <dt className="sr-only">Cliente</dt>
          <Buildings size={16} aria-hidden="true" className="shrink-0 text-muted" />
          <dd className="truncate">{vehicle.client}</dd>
        </div>
        <div className="col-span-2 flex items-center gap-1.5">
          <dt className="sr-only">Localização</dt>
          <MapPin size={16} aria-hidden="true" className="shrink-0 text-muted" />
          <dd className="truncate">{vehicle.address}</dd>
        </div>
      </dl>
    </button>
  );
}
