const integer = new Intl.NumberFormat("pt-BR");

export function formatKm(value) {
  return `${integer.format(value)} km`;
}

export function formatInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}
