import Button from "../Button";
import { reveal } from "@/components/motion/reveal";
import { Accent } from "../SectionHeading";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden px-4 py-16 text-center sm:py-20">
        <span
          aria-hidden
          data-reveal="corner-tl"
          className="absolute top-0 left-0 h-24 w-20 bg-teal sm:h-44 sm:w-40 lg:h-[178px] lg:w-[160px]"
          style={{ borderBottomRightRadius: "100% 100%" }}
        />
        <span
          aria-hidden
          data-reveal="corner-br"
          className="absolute right-0 bottom-0 size-24 rounded-tl-full bg-sun sm:size-36 lg:size-[178px]"
        />
        <div {...reveal("blur", 200)} className="relative">
          <p className="text-sm text-navy sm:text-base">Get Started</p>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-[34px]">
            Your Tech Career Starts <Accent>Here</Accent>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-muted sm:text-lg">
            Take the first step toward building real skills, real projects, and real opportunities in tech.
          </p>
          <Button href="/apply" className="mt-10 bg-[#ff5c00]! px-12! text-base">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
