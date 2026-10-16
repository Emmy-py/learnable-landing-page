import Button from "../Button";
import { Accent } from "../SectionHeading";
import { stats } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm text-navy sm:text-base">About Us</p>
      <div className="mt-3 grid gap-6 md:grid-cols-2 md:gap-8">
        <h2 className="text-[28px] leading-tight tracking-tight sm:text-[34px]">
          Training Africa’s Next Generation of <Accent>Tech Professionals</Accent>.
        </h2>
        <div>
          <p className="text-muted">
            Learnable by Genesys is a practical, project-based tech training program designed to prepare beginners and
            career switchers for real industry work.
          </p>
          <Button href="/about" variant="arrow" className="mt-6">
            Learn More
          </Button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 rounded-xl bg-navy px-6 py-12 text-center text-white sm:grid-cols-3 sm:gap-4 sm:px-10">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl">{s.value}</p>
            <p className="mx-auto mt-2 max-w-60 text-sm sm:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
