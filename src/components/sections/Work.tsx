"use client";

import { useReveal } from "@/components/motion/RevealHooks";
import { RevealLine, SectionHead } from "@/components/ui/SectionHead";

const WORK = [
  { span: "lg:col-span-7",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683197/motion_graphics_l.webm" ,resolution:"1920x1080", ratio: "16/10", title: "", meta: "", num: "" },
  { span: "lg:col-span-5",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683196/motion_graphics_p.webm" ,resolution:"1920x1080", ratio: "4/5", title: "", meta: "", num: "" },
  { span: "lg:col-span-7",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683206/social_media_l.webm" ,resolution:"1920x1080", ratio: "16/10", title: "", meta: "", num: "" },
  { span: "lg:col-span-5",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683198/social_media_p.webm" ,resolution:"1920x1080", ratio: "16/10", title: "", meta: "", num: "" },
  { span: "lg:col-span-4",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683219/arkose_p.webm" ,resolution:"1920x1080", ratio: "4/5", title: "", meta: "", num: "" },
  { span: "lg:col-span-8",source: "https://res.cloudinary.com/scucsl9b/video/upload/v1794683199/arkose_l.webm" ,resolution:"1920x1080", ratio: "16/10", title: "", meta: "", num: "" },
];
//https://lorem.video/test_1920x1080_vp9_30fps_30s_25crf_opus_128kbps.webm
export function Work() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="work" className="relative bg-cream">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <SectionHead index="03" label="work">
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[1.02] tracking-[-0.01em] text-ink">
            <span className="block">
              <RevealLine>Recent</RevealLine>{" "}
              <RevealLine romance>
                <span className="font-romance font-normal italic lowercase">work</span>
              </RevealLine>{" "}
              <RevealLine>for</RevealLine>
            </span>
            <span className="mt-2 block">
              <RevealLine>
                clients <span className="text-blood">we love</span>
              </RevealLine>
              <span className="text-blood">.</span>
            </span>
          </h2>
        </SectionHead>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
          {WORK.map((w, i) => (
            <article key={i} className={`reveal-up ${w.span}`} data-cursor="media">
              <figure
                className="relative flex w-full items-center justify-center "
                // style={{ aspectRatio: w.ratio }}
              >
                {/* <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
                  {w.num}
                </span> */}
                {/* <span
                  className="absolute right-4 top-4 h-[10px] w-[10px] border-r border-t border-blood transition-transform duration-300"
                  aria-hidden
                /> */}
                {/* <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                  Drop visual to replace
                </span> */}
                <video
                  //data-autoplay
                  src={w.source}
                  autoPlay
                  muted
                  playsInline
                  loop
                  //src={`https://lorem.video/test_${w.resolution}_vp9_30fps_30s_25crf_opus_128kbps.webm`}
                ></video>
              </figure>
              {/* <figcaption className="mt-5 flex items-baseline justify-between gap-6 border-t border-ink/10 pt-4">
                <span className="font-display text-[18px] uppercase tracking-tight text-ink">{w.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-whisper">
                  {w.meta}
                </span>
              </figcaption> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
