import { api } from "@/lib/api/client";
import { delay, USE_MOCKS } from "@/lib/api/mock";
import { vehicles } from "@/lib/mocks/vehicles";

export const MAP_VEHICLE_LIMIT = 50;

function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export async function searchVehicles(term) {
  if (USE_MOCKS) {
    await delay(700);
    const query = normalize(term);
    const now = Date.now();

    const matches = vehicles.filter((vehicle) =>
      [vehicle.plate, vehicle.model, vehicle.brand, vehicle.client].some((field) =>
        normalize(field).includes(query),
      ),
    );

    return {
      total: matches.length,
      items: matches.slice(0, MAP_VEHICLE_LIMIT).map(({ minutesAgo, ...vehicle }) => ({
        ...vehicle,
        updatedAt: new Date(now - minutesAgo * 60_000).toISOString(),
      })),
    };
  }
  return api.get("/vehicles", { params: { q: term, limit: MAP_VEHICLE_LIMIT } });
}
