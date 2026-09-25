import { Outlet } from "react-router";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function AppLayout() {
  return (
    <div className="flex h-dvh flex-col">
      <Topbar />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <main className="relative min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
