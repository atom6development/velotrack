export const VEHICLE_STATUS = {
  moving: { label: "Em movimento", dot: "bg-status-moving", text: "text-status-moving" },
  idle: { label: "Parado ligado", dot: "bg-status-idle", text: "text-status-idle" },
  off: { label: "Desligado", dot: "bg-status-off", text: "text-status-off" },
  offline: { label: "Sem comunicação", dot: "bg-status-offline", text: "text-status-offline" },
};

export const VEHICLE_STATUS_ORDER = ["moving", "idle", "off", "offline"];
