"use client";

import { motion } from "motion/react";
import { PLANS, RETAINERS } from "../../store/data";

const TieredCard = ({ plan }) => (
  <div className="flex flex-col gap-5 bg-neutral-900 p-6 h-full rounded-3xl border border-neutral-800">
    <div className="flex items-center gap-2">
      <span className="text-2xl">{plan.emoji}</span>
      <h3 className="text-lg font-bold text-neutral-50">{plan.name}</h3>
    </div>

    <div className="flex flex-col gap-4 flex-1">
      {plan.tiers.map((tier, i) => (
        <div key={tier.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-neutral-200">
              {tier.label}
            </span>
            <span className="text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2.5 py-1 rounded-full">
              {tier.price}
            </span>
          </div>
          <p className="text-xs text-neutral-500">{tier.desc}</p>

          {i < plan.tiers.length - 1 && (
            <div className="border-b border-neutral-800 mt-4" />
          )}
        </div>
      ))}
    </div>

    <div className="border-t border-neutral-800 pt-4 flex flex-col gap-2">
      {plan.addons.map((addon) => (
        <div key={addon.label} className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">{addon.label}:</span>
          <span className="text-xs font-semibold text-neutral-300">
            {addon.price}
          </span>
        </div>
      ))}
    </div>

    <button className="w-full py-2.5 rounded-xl text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors">
      {plan.cta}
    </button>
  </div>
);

const ServicesCard = ({ plan }) => (
  <div
    className={`flex flex-col gap-5 bg-neutral-900 p-6 rounded-3xl h-full ${
      plan.featured ? "border border-transparent" : "border border-neutral-800"
    }`}
  >
    <div className="flex items-center gap-2">
      <span className="text-2xl">{plan.emoji}</span>
      <h3 className="text-lg font-bold text-neutral-50">{plan.name}</h3>
    </div>

    <div className="flex flex-col gap-3 flex-1">
      {plan.services.map((service, i) => (
        <div key={service.label}>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-300">{service.label}</span>

            {service.custom ? (
              <span className="text-xs font-semibold text-sky-400">
                {service.price}
              </span>
            ) : (
              <span className="text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700 px-2.5 py-1 rounded-full">
                {service.price}
              </span>
            )}
          </div>

          {i < plan.services.length - 1 && (
            <div className="border-b border-neutral-800/70 mt-3" />
          )}
        </div>
      ))}
    </div>

    {plan.addons && (
      <div className="border-t border-neutral-800 pt-4 flex flex-col gap-2">
        {plan.addons.map((addon) => (
          <div key={addon.label} className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">{addon.label}:</span>
            <span className="text-xs font-semibold text-neutral-300">
              {addon.price}
            </span>
          </div>
        ))}
      </div>
    )}

    {plan.retainerNote && (
      <div className="border-t border-neutral-800 pt-4 flex items-center justify-between">
        <span className="text-xs text-neutral-500">{plan.retainerNote}</span>
        <button className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors">
          {plan.cta}
        </button>
      </div>
    )}

    {!plan.retainerNote && (
      <button
        className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
          plan.featured
            ? "bg-sky-500 hover:bg-sky-400 text-white"
            : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700"
        }`}
      >
        {plan.cta}
      </button>
    )}
  </div>
);

const PricingCard = ({ plan }) => {
  const inner =
    plan.type === "tiered" ? (
      <TieredCard plan={plan} />
    ) : (
      <ServicesCard plan={plan} />
    );

  return <div className="ai-card-border h-full rounded-3xl">{inner}</div>;
};

const RetainersSection = () => (
  <div className="w-full max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="flex flex-col gap-3">
      <span className="text-xs uppercase tracking-widest font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full w-fit">
        📅 Monthly Retainers
      </span>
      <h3 className="text-2xl font-bold text-neutral-50">
        Ready to scale content on demand?
      </h3>
      <p className="text-sm text-neutral-500 max-w-sm">
        Get guaranteed availability and premium turnarounds on recurring
        projects.
      </p>
    </div>

    <div className="flex gap-4 shrink-0">
      {RETAINERS.map((r) => (
        <div
          key={r.label}
          className="flex flex-col items-center gap-1 bg-neutral-800 border border-neutral-700 rounded-2xl px-8 py-5"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
            {r.label}
          </span>
          <span className="text-2xl font-bold text-neutral-50">{r.price}</span>
          <span className="text-xs text-neutral-500">{r.sub}</span>
        </div>
      ))}
    </div>
  </div>
);

const PricingCards = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[80%] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
      >
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <RetainersSection />
      </motion.div>
    </div>
  );
};

export default PricingCards;
