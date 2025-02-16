"use client";
import { usePathname } from "next/navigation";
import NavbarView from "./Navbar.view";
import NavbarAdminView from "./NavbarAdmin.view";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/auth")) {
    return null;
  }

  if (pathname.startsWith("/admin")) {
    return <NavbarAdminView />;
  }

  return <NavbarView />;
}
