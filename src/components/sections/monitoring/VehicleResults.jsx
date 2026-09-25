import StatusFilter from "@/components/sections/monitoring/StatusFilter";
import VehicleCard from "@/components/sections/monitoring/VehicleCard";
import Button from "@/components/ui/Button";
import { useMonitoringStore } from "@/store/useMonitoringStore";

export default function VehicleResults({ total, vehicles, visibleVehicles, onClear }) {
  const selectedVehicleId = useMonitoringStore((state) => state.selectedVehicleId);
  const selectVehicle = useMonitoringStore((state) => state.selectVehicle);

  const counts = vehicles.reduce(
    (acc, { status }) => ({ ...acc, [status]: (acc[status] ?? 0) + 1 }),
    {},
  );
  const isTruncated = total > vehicles.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm text-body" aria-live="polite">
          <span className="font-semibold text-heading">{total}</span>{" "}
          {total === 1 ? "veículo encontrado" : "veículos encontrados"}
          {isTruncated && <span className="text-muted"> · exibindo {vehicles.length}</span>}
        </p>
        <Button variant="ghost" size="sm" onClick={onClear}>
          Limpar
        </Button>
      </div>

      <StatusFilter counts={counts} />

      {visibleVehicles.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted">
          Nenhum veículo com os status selecionados.
        </p>
      ) : (
        <ul className="-mx-1 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-1 pb-1">
          {visibleVehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <VehicleCard
                vehicle={vehicle}
                isSelected={vehicle.id === selectedVehicleId}
                onSelect={selectVehicle}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
