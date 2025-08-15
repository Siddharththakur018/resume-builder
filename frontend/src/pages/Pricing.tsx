import React, { useState } from "react";
import { motion } from "framer-motion"; // for smooth animations

type PricingPlan = {
  id: number;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  cta: string;
  highlight: boolean;
};

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");



  const data: PricingPlan[] = [
    {
      id: 1,
      name: "Free",
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "2 resume generations per month",
        "Basic templates only",
        "No AI optimization",
        "Watermarked download",
      ],
      cta: "Get Started Free",
      highlight: false,
    },
    {
      id: 2,
      name: "Pro",
      priceMonthly: 9.99,
      priceYearly: 99.99,
      features: [
        "Unlimited resume generations",
        "All premium templates",
        "AI-powered optimization",
        "ATS compatibility check",
        "PDF & Word download (no watermark)",
      ],
      cta: "Upgrade to Pro",
      highlight: true,
    },
    {
      id: 3,
      name: "Business",
      priceMonthly: 29.99,
      priceYearly: 299.99,
      features: [
        "Everything in Pro",
        "Multi-user team accounts (up to 10 users)",
        "Team analytics dashboard",
        "Priority customer support",
        "Custom branding for resumes",
      ],
      cta: "Get Business Plan",
      highlight: false,
    },
  ];

  const getDiscountInfo = (monthly: number, yearly: number) => {
    if (monthly === 0) return { discountPercent: 0, discountAmount: 0 };
    const monthlyTotal = monthly * 12;
    const discountAmount = monthlyTotal - yearly;
    const discountPercent = (discountAmount / monthlyTotal) * 100;
    return {
      discountPercent: Math.round(discountPercent),
      discountAmount: discountAmount.toFixed(2),
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16  min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-3 drop-shadow-md">
        Pricing Plans
      </h2>
      <p className="text-center text-indigo-500 mb-12 text-lg">
        Choose the plan that fits you best.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center mb-14 space-x-4">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`text-lg font-semibold px-4 py-2 rounded-full transition ${
            billingCycle === "monthly"
              ? "bg-indigo-600 text-white shadow-lg"
              : "text-indigo-600 hover:bg-indigo-100"
          }`}
        >
          Monthly
        </button>

        <div
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          className={`relative w-14 h-8 bg-indigo-300 rounded-full cursor-pointer transition-colors ${
            billingCycle === "yearly" ? "bg-indigo-600" : "bg-indigo-300"
          }`}
        >
          <motion.div
            layout
            className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            style={{ x: billingCycle === "yearly" ? 24 : 0 }}
          />
        </div>

        <button
          onClick={() => setBillingCycle("yearly")}
          className={`text-lg font-semibold px-4 py-2 rounded-full transition ${
            billingCycle === "yearly"
              ? "bg-indigo-600 text-white shadow-lg"
              : "text-indigo-600 hover:bg-indigo-100"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((plan) => {
          const { discountPercent, discountAmount } = getDiscountInfo(
            plan.priceMonthly,
            plan.priceYearly
          );

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.id * 0.15 }}
              className={`rounded-3xl shadow-xl p-8 flex flex-col justify-between bg-gradient-to-br ${
                plan.highlight
                  ? "from-indigo-600 to-indigo-700 text-white border-4 border-indigo-500"
                  : "from-white to-indigo-50 border border-indigo-200"
              } transform hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold tracking-wide">{plan.name}</h3>
                  {billingCycle === "yearly" && discountPercent > 0 && (
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        plan.highlight ? "bg-green-400 text-indigo-900" : "bg-green-100 text-green-800"
                      }`}
                    >
                      Save {discountPercent}% (${discountAmount})
                    </span>
                  )}
                </div>

                <p
                  className={`text-5xl font-extrabold mb-6 ${
                    plan.highlight ? "text-white" : "text-indigo-900"
                  }`}
                >
                  ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  <span className="text-xl font-semibold text-indigo-300 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </p>

                <ul className={`space-y-3 mb-8 ${plan.highlight ? "text-indigo-200" : "text-indigo-700"}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg
                        className={`w-6 h-6 ${
                          plan.highlight ? "text-green-300" : "text-green-500"
                        } flex-shrink-0`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold text-lg transition ${
                  plan.highlight
                    ? "bg-white text-indigo-700 hover:bg-gray-100 shadow-md"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
