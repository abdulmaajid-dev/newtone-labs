"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

type FeaturedClient = {
  idx: string;
  year: string;
  source: string;
  name: string;
  industry: string;
  status?: string;
};

const ALL_CLIENTS: string[] = [
  "Arkose Labs",
  "Anomali",
  "Simility by PayPal",
  "Monnai",
  "Bank of Ireland",
  "Aditya Birla Hospital",
  "Leelavati Hospital",
  "Supreme Furniture",
  "Maharaja Bhog",
  "Five Fat Monks",
  "Persian Darbar",
  "Aquavera",
];

const FEATURED: FeaturedClient[] = [
  { idx: "03", year: "2021",source: "/assets/images/logo/0_al.png", name: "Simility by PayPal", industry: "Fintech · USA" },
  { idx: "02", year: "2020",source: "/assets/images/logo/0_anomali.png", name: "Anomali", industry: "Cybersecurity · USA", status: "Active" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_boi.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_m.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_s.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_mb.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_lhrc.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "01", year: "2018",source: "/assets/images/logo/0_abmh.png", name: "Arkose Labs", industry: "Cybersecurity · USA", status: "Active · 6 yrs" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_sf.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_pd.png", name: "Bank of Ireland", industry: "Banking · IE" },
  { idx: "04", year: "2022",source: "/assets/images/logo/0_av.png", name: "Monnai", industry: "Fintech · USA" },
  { idx: "05", year: "2022",source: "/assets/images/logo/0_ffm.png", name: "Bank of Ireland", industry: "Banking · IE" },



];

const MORE_COUNT = 7;
const MORE_INDUSTRIES = "Healthcare · F&B · Home decor · FMCG";

export function Clients() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="clients" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="04" label="Clients">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>Trusted by teams</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>shipping to</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">30,000+</span>
              </RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>
                <span className="text-blood">followers</span>
              </RevealLine>
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        {/* Wordmark marquee — every client, scrolling on a 60s loop */}
        <div className="mt-12 overflow-hidden border-y border-ink/10 py-7 lg:mt-16">
          <div className="marquee-track flex w-max items-center whitespace-nowrap">
            {[...FEATURED, ...FEATURED].map((item, i) => (
              <span key={i} className="flex items-center" style={{ width: '350px', height: '150px', marginRight: '1rem' }}>
                {/* <span className="font-display text-[32px] uppercase leading-none tracking-tight text-ink/70">
                  {item.name}
                </span> */}
                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                 src={item.source} alt={item.name} />
                {/* <span className="mx-10 inline-block h-[6px] w-[6px] rounded-full bg-blood" /> */}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
