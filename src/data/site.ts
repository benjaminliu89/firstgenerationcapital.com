export const site = {
  name: "First Generation Capital",
  legalName: "First Generation Capital Limited",
  description:
    "First Generation Capital is a single family office investing its own capital since 2018, in early-stage companies and with venture, private equity, real estate and hedge fund managers.",
  url: "https://www.firstgenerationcapital.com",
  contactUrl: "https://form.typeform.com/to/F9qWDmmj",
  linkedin: "https://www.linkedin.com/company/firstgenerationcapital/",
};

export const categories = [
  { id: "startups", label: "Startups" },
  { id: "private-equity", label: "Private Equity" },
  { id: "venture-capital", label: "Venture Capital" },
  { id: "real-estate", label: "Real Estate" },
  { id: "hedge-funds", label: "Hedge Funds" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type PortfolioItem = {
  name: string;
  year: number | null;
  logo: string;
  category: CategoryId;
  status: "Active" | "Exited";
  url: string;
};
