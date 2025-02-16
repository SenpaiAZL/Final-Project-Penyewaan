"use client";
import { usePathname } from "next/navigation";
import NavbarAdmin from "./NavbarAdmin.view";
import NavbarAdminView from "./NavbarAdmin.view";

export default function NavbarAdmin() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return;
  }
    return <NavbarAdminView />;
  }
