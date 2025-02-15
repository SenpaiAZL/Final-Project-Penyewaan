"use client";
import { usePathname } from "next/navigation";
import FooterView from "./FooterView";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return null;
  }
  return <FooterView />;
}
