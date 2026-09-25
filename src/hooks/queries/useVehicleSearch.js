import { useQuery } from "@tanstack/react-query";
import { searchVehicles } from "@/lib/api/vehicles";

export const vehicleKeys = {
  all: ["vehicles"],
  search: (term) => ["vehicles", "search", term],
};

export function useVehicleSearch(term) {
  return useQuery({
    queryKey: vehicleKeys.search(term),
    queryFn: () => searchVehicles(term),
    enabled: Boolean(term),
  });
}
