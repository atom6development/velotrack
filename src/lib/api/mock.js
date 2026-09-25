// POC sem backend: mock é o padrão, só desliga com VITE_USE_MOCKS=false explícito
export const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== "false";

// latência fake: sem ela o loading nunca aparece em dev
export function delay(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
