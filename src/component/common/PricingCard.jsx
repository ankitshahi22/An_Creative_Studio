"use client";

import { motion } from "motion/react";
import { PLANS, RETAINERS } from "../../store/data";
import Link from "next/link";

const TieredCard = ({ plan }) => (
  <div className="flex flex-col gap-6 bg-white p-7 h-full border border-[#e8e8e8]">
    <div>
      <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#111]">
        {plan.name}
      </h3>
    </div>

    <div className="flex flex-col gap-5 flex-1">
      {plan.tiers.map((tier, i) => (
        <div key={tier.label}>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-sm font-semibold text-[#111]">
              {tier.label}
            </span>
            <span className="text-xs font-semibold text-[#0EA5E9]">
              {tier.price}
            </span>
          </div>
          <p className="text-xs text-[#999] leading-relaxed">{tier.desc}</p>
          {i < plan.tiers.length - 1 && (
            <div className="border-b border-[#f0f0f0] mt-5" />
          )}
        </div>
      ))}
    </div>

    <div className="border-t border-[#f0f0f0] pt-5 flex flex-col gap-2.5">
      {plan.addons.map((addon) => (
        <div key={addon.label} className="flex items-center justify-between">
          <span className="text-xs text-[#ccc]">{addon.label}</span>
          <span className="text-xs font-medium text-[#999]">{addon.price}</span>
        </div>
      ))}
    </div>

    <Link
      href="/contact"
      className="w-full py-2.5 text-center text-sm font-medium text-[#888] border border-[#e8e8e8] hover:text-[#111] hover:border-[#bbb] transition-colors"
    >
      {plan.cta}
    </Link>
  </div>
);

const ServicesCard = ({ plan }) => (
  <div
    className={`flex flex-col gap-6 bg-white p-7 h-full border border-[#e8e8e8] ${
      plan.featured ? "border-t-2 border-t-[#0EA5E9]" : ""
    }`}
  >
    <div className="flex items-center justify-between">
      <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#111]">
        {plan.name}
      </h3>
      {plan.featured && (
        <span className="text-[10px] font-semibold text-[#0EA5E9] border border-[#0EA5E9]/30 px-2 py-0.5 tracking-widest uppercase">
          Popular
        </span>
      )}
    </div>

    <div className="flex flex-col gap-3.5 flex-1">
      {plan.services.map((service, i) => (
        <div key={service.label}>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#555]">{service.label}</span>
            {service.custom ? (
              <span className="text-xs font-semibold text-[#0EA5E9]">
                {service.price}
              </span>
            ) : (
              <span className="text-xs font-medium text-[#999]">
                {service.price}
              </span>
            )}
          </div>
          {i < plan.services.length - 1 && (
            <div className="border-b border-[#f5f5f5] mt-3.5" />
          )}
        </div>
      ))}
    </div>

    {plan.addons && (
      <div className="border-t border-[#f0f0f0] pt-5 flex flex-col gap-2.5">
        {plan.addons.map((addon) => (
          <div key={addon.label} className="flex items-center justify-between">
            <span className="text-xs text-[#ccc]">{addon.label}</span>
            <span className="text-xs font-medium text-[#999]">
              {addon.price}
            </span>
          </div>
        ))}
      </div>
    )}

    {plan.retainerNote && (
      <div className="border-t border-[#f0f0f0] pt-5 flex items-center justify-between">
        <span className="text-xs text-[#bbb]">{plan.retainerNote}</span>
        <Link
          href="/contact"
          className="text-xs font-semibold text-[#0EA5E9] hover:text-[#0284c7] transition-colors"
        >
          {plan.cta}
        </Link>
      </div>
    )}

    {!plan.retainerNote && (
      <Link
        href="/contact"
        className={`w-full text-center py-2.5 text-sm font-medium transition-colors ${
          plan.featured
            ? "bg-[#0EA5E9] text-white hover:bg-[#0284c7]"
            : "text-[#888] border border-[#e8e8e8] hover:text-[#111] hover:border-[#bbb]"
        }`}
      >
        {plan.cta}
      </Link>
    )}
  </div>
);

const PricingCards = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {PLANS.map((plan) =>
          plan.type === "tiered" ? (
            <TieredCard key={plan.name} plan={plan} />
          ) : (
            <ServicesCard key={plan.name} plan={plan} />
          ),
        )}
      </motion.div>

      <div className="border border-[#e8e8e8] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-[#bbb] text-xs tracking-widest uppercase mb-3">
            Monthly Retainers
          </p>
          <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-(--fg) mb-2">
            Ready to scale?
          </h3>
          <p className="text-sm text-[#999] max-w-sm">
            Guaranteed availability and priority turnarounds for ongoing work.
          </p>
        </div>

        <div className="flex gap-4 shrink-0 flex-wrap flex-1">
          {RETAINERS.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center gap-1 border border-[#e8e8e8] px-8 py-5 flex-1"
            >
              <span className="text-xs uppercase tracking-widest text-[#bbb] font-medium">
                {r.label}
              </span>
              <span className="font-[family-name:var(--font-sora)] text-center text-xl font-bold text-(--fg) mt-1">
                {r.price}
              </span>
              <span className="text-xs text-[#bbb] mt-0.5">{r.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
