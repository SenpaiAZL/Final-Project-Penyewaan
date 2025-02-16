"use client";
import { usePathname } from "next/navigation";
import NavbarView from "./Navbar.view";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")||("/admin")) {
    return null;
  }
  return <NavbarView />;
}
