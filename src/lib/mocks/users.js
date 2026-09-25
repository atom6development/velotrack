// Credenciais da POC — informe na entrega.
import operatorAvatar from "@/assets/avatars/operador.jpg";

export const users = [
  {
    id: 1,
    name: "Marina Alves",
    email: "operador@velotrack.demo",
    password: "123456",
    role: "Central de Monitoramento",
    avatarUrl: operatorAvatar,
  },
];

export function toPublicUser({ id, name, email, role, avatarUrl }) {
  return { id, name, email, role, avatarUrl };
}

export function findUser(email, password) {
  return users.find((u) => u.email === email && u.password === password) ?? null;
}
