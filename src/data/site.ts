export const site = {
  name: "First Generation Capital",
  legalName: "First Generation Capital Limited",
  tagline: "A family office investing for the long term.",
  description:
    "First Generation Capital is a single family office. Since 2018 we have invested in early-stage companies and committed to venture, private equity, real estate and hedge fund managers.",
  url: "https://www.firstgenerationcapital.com",
  contactUrl: "https://form.typeform.com/to/F9qWDmmj",
  linkedin: "https://www.linkedin.com/company/firstgenerationcapital/",
};

export const categories = [
  { id: "all", label: "All" },
  { id: "startups", label: "Startups" },
  { id: "private-equity", label: "Private Equity" },
  { id: "venture-capital", label: "Venture Capital Funds" },
  { id: "real-estate", label: "Real Estate" },
  { id: "hedge-funds", label: "Hedge Funds" },
] as const;

export type CategoryId = Exclude<(typeof categories)[number]["id"], "all">;

export type PortfolioItem = {
  name: string;
  year: number;
  logo: string;
  category: CategoryId;
  status: "Active" | "Exited";
  url: string;
};
