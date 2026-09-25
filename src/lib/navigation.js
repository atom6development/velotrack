import {
  Bell,
  ChartBar,
  ClipboardText,
  FileText,
  GearSix,
  MapTrifold,
  Truck,
  Wrench,
} from "@phosphor-icons/react";

export const NAVIGATION = [
  {
    title: "Monitoramento",
    items: [
      { label: "Mapa", icon: MapTrifold, to: "/" },
      { label: "Dashboard", icon: ChartBar },
      { label: "Ordens (OS)", icon: ClipboardText },
    ],
  },
  {
    title: "Gestão",
    items: [
      { label: "Cadastros", icon: Truck },
      { label: "Controle", icon: Wrench },
      { label: "Relatórios", icon: FileText },
    ],
  },
  {
    title: "Sistema",
    items: [
      { label: "Alertas", icon: Bell },
      { label: "Configurações", icon: GearSix },
    ],
  },
];
