export const domainTracks = {
  "mission-control": {
    label: "Mission-Control",
    tagline: "National-scale dashboards, LGU ops, logistics, public safety.",
    projects: [
      "LGU Incident Dashboard",
      "Citizen Signal Pipeline",
      "Logistics & Supply Chain",
      "Field Ops Mobile Tools",
    ],
  },
  ecommerce: {
    label: "E-Commerce",
    tagline: "Carts, checkout, analytics, inventory systems.",
    projects: [
      "Product Feed System",
      "Checkout Engine",
      "Order Tracking Panel",
      "Offer & Promotions Engine",
    ],
  },
  fintech: {
    label: "Fintech",
    tagline: "Wallets, payouts, compliance, transaction monitoring.",
    projects: ["Ledger System", "KYC/KYB Flow", "Risk Dashboard", "Payout Engine"],
  },
} as const;

// Keys derived from the domain track registry.
export type DomainKey = keyof typeof domainTracks;

// Concrete domain metadata type used throughout the dashboard.
export type DomainTrack = (typeof domainTracks)[DomainKey];

export type DomainInfo = DomainTrack;
