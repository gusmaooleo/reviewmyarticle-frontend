"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "../ui/sidebar";
import logo from "@/public/logo-icon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = {
  "/articles": "Artigos",
  "/review": "Revisões",
  "/admin": "Administração",
} as const;

type keyofRoutes = keyof typeof routes;

export default function AppSidebar() {
  const pathname = usePathname();
  const classnameRule = (route: keyofRoutes) =>
    pathname.includes(route)
      ? "text-(--primary-light-blue) hover:text-(--primary-light-blue-hover)"
      : "";

  return (
    <Sidebar className="flex md:flex-row md:w-full md:h-fit">
      <SidebarContent className="flex py-4 px-4 md:flex-row md:bg-white md:px-6 md:py-2">
        <Image src={logo} alt="logo" width={35} height={100} />
        <SidebarGroup className="flex gap-2 md:flex-row md:gap-6">
          {Object.keys(routes).map((k: string) => (
            <Link
              key={k}
              href={k}
              className={classnameRule(k as keyofRoutes)}
            >
              {routes[k as keyofRoutes]}
            </Link>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
