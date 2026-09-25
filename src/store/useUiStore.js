import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUiStore = create(
  persist(
    (set) => ({
      theme: "dark",
      isSidebarCollapsed: false,
      isMobileNavOpen: false,
      toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
      toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
      openMobileNav: () => set({ isMobileNavOpen: true }),
      closeMobileNav: () => set({ isMobileNavOpen: false }),
    }),
    {
      name: "velotrack.ui",
      partialize: ({ theme, isSidebarCollapsed }) => ({ theme, isSidebarCollapsed }),
    },
  ),
);
