import React from "react";
import AppIbadahSheetView from "../app-ibadah-sheet";
import AppSummeryView from "../app-summary-view";

const HomeView = () => {
  return (
    <div>
      <AppSummeryView />
      <AppIbadahSheetView />
    </div>
  );
};

export default HomeView;
