"use client";

import PortfolioHomePage from "@/app/ui-components/PortfolioHomePage";

export default function AmplifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioHomePage
      overrides={{
        WebWindow: { children },
        PortfolioNavBarHeader: { width: "100%" },
        PortfolioHomePage: { width: "100%" },
      }}
    />
  );
}
