// pricingData.js
export const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    frequency: "month",
    features: ["1 Project", "100MB Storage", "Community Support"],
    cta: "Get Started",
    isPopular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$9",
    frequency: "month",
    features: ["10 Projects", "10GB Storage", "Priority Support"],
    cta: "Upgrade Now",
    isPopular: true, // Highlight this
  },
  {
    id: 3,
    name: "Premium",
    price: "$29",
    frequency: "month",
    features: ["Unlimited Projects", "100GB Storage", "24/7 Premium Support"],
    cta: "Go Premium",
    isPopular: false,
  },
];
