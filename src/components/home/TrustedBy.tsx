import Image from "next/image";
import { reveal } from "@/components/motion/reveal";

export default function TrustedBy() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-16 text-center sm:px-6 lg:px-8">
      <p {...reveal("up")} className="text-muted">
        Trusted by
      </p>
      <div {...reveal("blur", 150)} className="no-scrollbar mt-4 overflow-x-auto">
        <Image
          src="/images/trusted.png"
          alt="Tenece, Hubly, Google, TalentQL, SBSC, Wicrypt, Access"
          width={780}
          height={58}
          className="mx-auto h-10 w-auto max-w-none sm:h-auto sm:w-full sm:max-w-[780px]"
        />
      </div>
    </section>
  );
}
