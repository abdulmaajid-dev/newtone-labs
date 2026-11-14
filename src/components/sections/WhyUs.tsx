"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

const ROWS = [
  {
    num: "01",
    title: ["Six-year retention", "with global clients"],
    desc: "Embedded in cybersecurity orgs since 2018. We hand-off cleanly, but we rarely have to.",
  },
  {
    num: "02",
    // arrow: true,
    // accent: true,
    title: ["One-to-two day", "turnaround default"],
    desc: "Most deliverables ship within 1–2 business days. Rush windows handled inside the retainer.",
  },
  {
    num: "03",
    title: ["No hand-offs", "between disciplines"],
    desc: "The same designer who built your deck system also animates the launch reel. Context never leaves the room.",
  },
  {
    num: "04",
    title: ["Cyber-fluent,", "industry-flexible"],
    desc: "Seven years deep in cybersecurity visual language, with case studies across five other verticals.",
  },
  {
    num: "05",
    // arrow: true,
    // accent: true,
    title: ["$26–$30/hr —", "global rates, premium output"],
    desc: "Mid-range pricing against US/UK agencies, without the freelancer hand-off risk.",
  },
  {
    num: "06",
    title: ["Referred", "across companies"],
    desc: "Former clients have followed us to their next roles. It's our quietest, proudest metric.",
  },
];

export function WhyUs() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="why" className="relative bg-ink text-cream">
      <div className="mx-auto max-w-page px-6 pt-20 sm:px-8 lg:px-20 lg:pt-28">
        <SectionHead index="05" label="Why us" dark>
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em]">
            <span className="block">
              <RevealLine>Six reasons teams</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance italic font-normal lowercase">stay</span>
              </RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>
                with us <span className="text-blood">for years</span>
              </RevealLine>
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 lg:mt-14">
          {ROWS.map((r, i) => (
            <div
              key={r.num}
              className="group reveal-up grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-cream/15 py-9 transition-[padding] duration-500 hover:pl-6 lg:grid-cols-[80px_1fr_360px] lg:gap-x-12 lg:py-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-2 font-mono text-[12px] uppercase tracking-eyebrow text-cream/55">
                   {/* The Animated Reveal Arrow (Now renders on all rows) */}
                  <div 
                    className="inline-flex items-center overflow-hidden w-0 max-w-0 opacity-0 text-blood
                              group-hover:animate-[revealArrow_1.2s_theme(transitionTimingFunction.out-expo)_forwards]"
                    aria-hidden="true"
                  >
                    <span className="pr-1.5 transition-transform duration-300 -translate-x-2 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                {/* {r.arrow && <span className="text-blood">→</span>} ${
                  r.accent ? "text-blood" : "text-cream"
                }*/}
                <span>{r.num}</span>
              </div>
              <h3
                className={`font-display text-[clamp(28px,4vw,56px)] uppercase leading-[1.05] tracking-tight  group-hover:text-blood`}
              >
                <span className="block">{r.title[0]}</span>
                <span className="block">{r.title[1]}</span>
              </h3>
              <p className="col-span-2 max-w-[36ch] text-[14px] leading-[1.65] text-cream/55 lg:col-span-1">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* red handoff to contact */}
      <div className="mt-16 h-[60px] bg-blood lg:mt-20" aria-hidden />
    </section>
  );
}
