import AppSidebar from "@/components/shared/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-row w-full">
        <div className="flex flex-col w-full">
          <AppSidebar />
          <div className="p-4 w-fit">
            <SidebarTrigger />
          </div>
          <main className="flex-grow p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
