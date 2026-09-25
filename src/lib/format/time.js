const relative = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });

export function formatRelativeTime(isoDate) {
  const minutes = Math.round((Date.now() - new Date(isoDate).getTime()) / 60_000);

  if (minutes < 1) return "agora";
  if (minutes < 60) return relative.format(-minutes, "minute");
  if (minutes < 60 * 24) return relative.format(-Math.round(minutes / 60), "hour");
  return relative.format(-Math.round(minutes / (60 * 24)), "day");
}
