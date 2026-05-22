// src/data/pricing-data.ts

export type PricingDataType = {
  id: number;
  title: string;
  price: number;
  description: string;
  features: string[];
};

export const pricingData: PricingDataType[] = [
  {
    id: 1,
    title: "Optimized & SEO",
    price: 20,
    description: "Monthly Package",
    features: [
      "Unlimited updates & Projects",
      "Custom Permission",
      "Custom Instructors",
      "Custom design & Features",
    ],
  },
  {
    id: 2,
    title: "Designing",
    price: 50,
    description: "Monthly Package",
    features: [
      "Unlimited updates & Projects",
      "Custom Permission",
      "Custom Instructors",
      "Custom design & Features",
    ],
  },
  {
    id: 3,
    title: "Developement",
    price: 60,
    description: "Monthly Package",
    features: [
      "Unlimited updates & Projects",
      "Custom Permission",
      "Custom Instructors",
      "Custom design & Features",
    ],
  },
  {
    id: 4,
    title: "Supporting",
    price: 80,
    description: "Monthly Package",
    features: [
      "Unlimited updates & Projects",
      "Custom Permission",
      "Custom Instructors",
      "Custom design & Features",
    ],
  },
];