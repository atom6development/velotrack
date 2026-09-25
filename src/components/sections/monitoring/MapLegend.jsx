import { VEHICLE_STATUS, VEHICLE_STATUS_ORDER } from "@/lib/vehicle-status";

export default function MapLegend() {
  return (
    <div className="absolute right-3 bottom-20 hidden flex-col gap-2 rounded-lg border border-border bg-overlay px-3 py-2.5 shadow-lg lg:flex">
      <p className="text-eyebrow text-muted uppercase">Legenda</p>
      <ul className="flex flex-col gap-1.5">
        {VEHICLE_STATUS_ORDER.map((status) => (
          <li key={status} className="flex items-center gap-2 text-xs text-body">
            <span
              className={`size-2.5 rounded-full ${VEHICLE_STATUS[status].dot}`}
              aria-hidden="true"
            />
            {VEHICLE_STATUS[status].label}
          </li>
        ))}
      </ul>
    </div>
  );
}
