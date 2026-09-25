import { useMemo } from "react";
import MapLegend from "@/components/sections/monitoring/MapLegend";
import VehicleMap from "@/components/sections/monitoring/VehicleMap";
import VehicleSearchPanel from "@/components/sections/monitoring/VehicleSearchPanel";
import { useVehicleSearch } from "@/hooks/queries/useVehicleSearch";
import { useMonitoringStore } from "@/store/useMonitoringStore";

const NO_VEHICLES = [];

export default function Monitoring() {
  const searchTerm = useMonitoringStore((state) => state.searchTerm);
  const hiddenStatuses = useMonitoringStore((state) => state.hiddenStatuses);
  const query = useVehicleSearch(searchTerm);
  const items = searchTerm ? query.data?.items : undefined;

  const visibleVehicles = useMemo(
    () => (items ?? NO_VEHICLES).filter((vehicle) => !hiddenStatuses.includes(vehicle.status)),
    [items, hiddenStatuses],
  );

  return (
    <div className="absolute inset-0">
      <h1 className="sr-only">Mapa de monitoramento</h1>
      <VehicleMap vehicles={visibleVehicles} />
      <MapLegend />
      <VehicleSearchPanel query={query} visibleVehicles={visibleVehicles} />
    </div>
  );
}
