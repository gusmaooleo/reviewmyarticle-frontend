import AppSidebar from "@/components/shared/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { environments } from "@/environments/environments";
import { apiFetch } from "@/lib/api";
import { CongressService } from "@/lib/congress/congress.service";
import { getAppState } from "@/lib/state";
import { AppState } from "@/types/states";
import { IUser } from "@/types/user";
import { redirect } from "next/navigation";

export default async function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appState = await getAppState<AppState>("app_state");
  const congress = await (new CongressService()).getCongressById(appState.currentLoggedInCongress);
  const user: IUser = await apiFetch(`${environments.url}/users/me`);

  if (!user.id || appState.currentLoggedInCongress !== user.congressoId) {
    redirect("/login");
  }
  

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-row w-full">
        {congress ? (
          <div className="flex flex-col w-full">
            <AppSidebar congress={congress} />
            <main className="flex-grow p-6">{children}</main>
          </div>
        ): (<p>Não foi possível encontrar os congressos</p>)}
      </div>
    </SidebarProvider>
  );
}
