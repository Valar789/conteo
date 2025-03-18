import React, { ReactNode } from "react";
import Breadcrumb from "./ui/breadcrum";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="px-8">
      <Breadcrumb />
      {children}
    </div>
  );
}
