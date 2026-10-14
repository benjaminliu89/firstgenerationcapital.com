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
  {
    id: "startups",
    label: "Startups",
    description: "Small direct cheques into early-stage companies, usually alongside a lead investor we know.",
  },
  {
    id: "private-equity",
    label: "Private Equity",
    description: "Fund commitments and co-investments across buyout, growth and secondaries.",
  },
  {
    id: "venture-capital",
    label: "Venture Capital",
    description: "Limited partner commitments to seed and early-stage venture funds, including first-time managers.",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    description: "Residential and commercial property, through specialist funds and a small number of direct positions.",
  },
  {
    id: "hedge-funds",
    label: "Hedge Funds",
    description: "A small allocation to liquid strategies alongside the private portfolio.",
  },
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
