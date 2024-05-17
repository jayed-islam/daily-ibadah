import React, { ReactNode } from "react";
import Header from "./header";

interface MainLayoutPorps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutPorps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
