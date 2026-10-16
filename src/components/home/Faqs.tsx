import FaqAccordion from "../FaqAccordion";
import { Accent } from "../SectionHeading";
import { faqs } from "@/data/content";

export default function Faqs() {
  return (
    <section id="faqs" className="mx-auto grid max-w-[1100px] scroll-mt-24 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-8">
      <div>
        <p className="text-sm text-navy sm:text-base">FAQs</p>
        <h2 className="mt-3 text-[28px] leading-tight tracking-tight text-[#0f2a1d] sm:text-[34px]">
          <Accent>Everything</Accent> You Need to Know — Before You <Accent>Apply</Accent>
        </h2>
        <p className="mt-4 text-muted">
          Got questions? We’ve answered the most common ones about Learnable — from eligibility and duration to
          projects, mentorship, and career outcomes.
        </p>
      </div>
      <FaqAccordion items={faqs} />
    </section>
  );
}
