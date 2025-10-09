"use client";

import logo from "@/public/logo-icon.svg";
import { ICongress } from "@/types/congress";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarTrigger,
} from "../ui/sidebar";
import { IUser } from "@/types/user";




export default function AppSidebar({
  congress,
  user,
}: {
  congress: ICongress;
  user: IUser;
}) {
  const routes = (user as any).roles[0].id === 3 ? {
    "/articles": "Artigos",
    "/review": "Revisões",
    // "/admin": "Administração",
  } : (user as any).roles[0].id === 2 ? {
    "/articles": "Artigos",
  } : {
    "/articles": "Artigos",
    "/review": "Revisões",
    "/admin": "Administração",
  };

  type keyofRoutes = keyof typeof routes;

  const pathname = usePathname();
  const classnameRule = (route: keyofRoutes) =>
    pathname.includes(route)
      ? "text-(--primary-light-blue) hover:text-(--primary-light-blue-hover)"
      : "";

  return (
    <>
      <Sidebar className="flex md:flex-row md:w-full md:h-fit">
        <SidebarContent className="flex py-4 px-4 md:flex-row md:bg-white md:px-6 md:py-2">
          <Image src={logo} alt="logo" width={35} height={100} />
          <SidebarGroup className="flex md:flex-row gap-4">
            <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
              {Object.keys(routes).map((k: string) => (
                <Link
                  key={k}
                  href={k}
                  className={classnameRule(k as keyofRoutes)}
                >
                  {routes[k as keyofRoutes]}
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-full md:items-center md:justify-center md:flex-row gap-3">
              <Dialog>
                <DialogTrigger className="flex flex-row gap-2 max-[766px]:max-w-fit max-w-[200px] rounded-full bg-(--default-dark) px-3 py-1 text-white font-medium items-center cursor-pointer">
                  <SearchIcon />
                  <p className="truncate">Pesquisar artigo</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Pesquisar artigos</DialogTitle>
                  </DialogHeader>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <div className="flex flex-row gap-2 max-[766px]:max-w-full max-[990px]:max-w-[100px] max-w-[300px] rounded-full bg-(--primary-light-blue) px-1 py-1 text-white font-semibold items-center">
                <Image
                  src={congress.imageThumbnail ?? ""}
                  alt="congress-icon"
                  width={24}
                  height={24}
                  className="rounded-full aspect-square object-cover"
                />
                <p className="truncate">{congress.name}</p>
              </div>
            </div>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      {/* icon, settings section */}
      <div className="flex flex-row py-4 px-4 md:px-6 md:py-2 w-full justify-between items-center">
        <SidebarTrigger />
        <div className="flex flex-row gap-3 items-center">
          <p className="z-1000">{user.usernameUser}</p>
          <Image
            src={`data:image/jpeg;base64,${user.profileImage}`}
            alt="userImage"
            height={40}
            width={40}
            className="rounded-full z-1000"
          />
        </div>
      </div>
    </>
  );
}
