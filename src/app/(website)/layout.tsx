import MainLayout from "@/layouts/main";
import Script from "next/script";
import React, { FC } from "react";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const Layout: FC<IRootLayoutProps> = ({ children }) => (
  <MainLayout>{children}</MainLayout>
);

export default Layout;
