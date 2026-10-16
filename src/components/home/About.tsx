import Button from "../Button";
import { Accent } from "../SectionHeading";
import { stats } from "@/data/content";
import CountUp from "@/components/motion/CountUp";
import { reveal } from "@/components/motion/reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <p {...reveal("up")} className="text-sm text-navy sm:text-base">
        About Us
      </p>
      <div className="mt-3 grid gap-6 md:grid-cols-2 md:gap-8">
        <h2 {...reveal("blur", 100)} className="text-[28px] leading-tight tracking-tight sm:text-[34px]">
          Training Africa’s Next Generation of <Accent>Tech Professionals</Accent>.
        </h2>
        <div {...reveal("right", 200)}>
          <p className="text-muted">
            Learnable by Genesys is a practical, project-based tech training program designed to prepare beginners and
            career switchers for real industry work.
          </p>
          <Button href="/about" variant="arrow" className="mt-6">
            Learn More
          </Button>
        </div>
      </div>

      <div {...reveal("zoom")} className="mt-12 grid grid-cols-1 gap-8 rounded-xl bg-navy px-6 py-12 text-center text-white sm:grid-cols-3 sm:gap-4 sm:px-10">
        {stats.map((s, i) => {
          // "720+" -> counts up to 720, keeps the "+"
          const [, num, suffix] = s.value.match(/^(\d+)(.*)$/) ?? [];
          return (
            <div key={s.value} {...reveal("up", 200 + i * 120)}>
              <p className="text-4xl">{num ? <CountUp to={Number(num)} suffix={suffix} /> : s.value}</p>
              <p className="mx-auto mt-2 max-w-60 text-sm sm:text-base">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
