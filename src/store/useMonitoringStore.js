import { create } from "zustand";

export const useMonitoringStore = create((set) => ({
  searchTerm: "",
  selectedVehicleId: null,
  hiddenStatuses: [],
  setSearchTerm: (searchTerm) => set({ searchTerm, selectedVehicleId: null, hiddenStatuses: [] }),
  clearSearch: () => set({ searchTerm: "", selectedVehicleId: null, hiddenStatuses: [] }),
  selectVehicle: (selectedVehicleId) => set({ selectedVehicleId }),
  toggleStatus: (status) =>
    set((state) => ({
      hiddenStatuses: state.hiddenStatuses.includes(status)
        ? state.hiddenStatuses.filter((item) => item !== status)
        : [...state.hiddenStatuses, status],
    })),
}));
