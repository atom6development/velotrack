import { LngLatBounds, Map as MapLibreMap, Marker, NavigationControl } from "maplibre-gl";
import { useEffect, useRef } from "react";
import { getMapPadding, getMapStyle, MAP_CENTER, MAP_ZOOM } from "@/lib/map-style";
import { VEHICLE_STATUS } from "@/lib/vehicle-status";
import { useMonitoringStore } from "@/store/useMonitoringStore";
import { useUiStore } from "@/store/useUiStore";

function createMarkerElement(vehicle, onSelect) {
  const element = document.createElement("button");
  element.type = "button";
  element.className = "group flex flex-col items-center gap-1 focus-visible:outline-none";
  element.setAttribute("aria-label", `${vehicle.plate} — ${VEHICLE_STATUS[vehicle.status].label}`);

  const dot = document.createElement("span");
  dot.className = `block size-4 rounded-full border-2 border-white shadow-md ${VEHICLE_STATUS[vehicle.status].dot}`;

  const label = document.createElement("span");
  label.className =
    "rounded bg-overlay px-1.5 py-0.5 text-xs font-semibold text-heading shadow-md ring-1 ring-border";
  label.textContent = vehicle.plate;

  element.append(dot, label);
  element.addEventListener("click", () => onSelect(vehicle.id));
  return { element, dot, label };
}

export default function VehicleMap({ vehicles }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef(new Map());
  const appliedThemeRef = useRef(null);
  const theme = useUiStore((state) => state.theme);
  const selectedVehicleId = useMonitoringStore((state) => state.selectedVehicleId);
  const selectVehicle = useMonitoringStore((state) => state.selectVehicle);

  useEffect(() => {
    const initialTheme = useUiStore.getState().theme;
    appliedThemeRef.current = initialTheme;
    const map = new MapLibreMap({
      container: containerRef.current,
      style: getMapStyle(initialTheme),
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      attributionControl: { compact: true },
    });
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;
    const markers = markersRef.current;

    return () => {
      markers.clear();
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (appliedThemeRef.current === theme) return;
    appliedThemeRef.current = theme;
    mapRef.current?.setStyle(getMapStyle(theme));
  }, [theme]);

  useEffect(() => {
    const map = mapRef.current;
    const markers = markersRef.current;
    markers.forEach(({ marker }) => marker.remove());
    markers.clear();

    vehicles.forEach((vehicle) => {
      const parts = createMarkerElement(vehicle, selectVehicle);
      const marker = new Marker({ element: parts.element, anchor: "top" })
        .setLngLat([vehicle.lng, vehicle.lat])
        .addTo(map);
      markers.set(vehicle.id, { marker, ...parts });
    });

    if (vehicles.length > 0) {
      const bounds = new LngLatBounds();
      vehicles.forEach((vehicle) => bounds.extend([vehicle.lng, vehicle.lat]));
      map.fitBounds(bounds, { padding: getMapPadding(), maxZoom: 15, duration: 800 });
    } else {
      map.easeTo({ center: MAP_CENTER, zoom: MAP_ZOOM, duration: 800 });
    }
  }, [vehicles, selectVehicle]);

  useEffect(() => {
    markersRef.current.forEach(({ element, dot, label }, id) => {
      const isSelected = id === selectedVehicleId;
      element.classList.toggle("z-10", isSelected);
      dot.classList.toggle("scale-150", isSelected);
      label.classList.toggle("ring-2", isSelected);
      label.classList.toggle("ring-brand", isSelected);
    });

    const selected = markersRef.current.get(selectedVehicleId);
    if (selected) {
      mapRef.current.flyTo({
        center: selected.marker.getLngLat(),
        zoom: 15,
        padding: getMapPadding(),
        duration: 900,
      });
    }
  }, [selectedVehicleId, vehicles]);

  return (
    <div className="absolute inset-0" role="region" aria-label="Mapa de veículos">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
