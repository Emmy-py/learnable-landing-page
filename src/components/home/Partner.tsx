import Image from "next/image";
import Button from "../Button";
import { reveal } from "@/components/motion/reveal";

export default function Partner() {
  return (
    <section id="partner" className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_1fr] lg:px-8">
      <div {...reveal("left")}>
        <h2 className="text-[28px] tracking-tight sm:text-[34px]">Partner with us</h2>
        <p className="mt-6 text-muted">
          Partnering with us means joining forces to achieve common goals and maximize mutual benefits. We believe that
          collaboration is essential for success, and we welcome partnerships with businesses, organizations, and
          individuals who share our vision and values.
        </p>
        <Button href="/partnership" className="mt-8">
          Become a Partner
        </Button>
      </div>
      <div {...reveal("zoom", 150)}>
        <Image
          src="/images/handshake.png"
          alt=""
          width={365}
          height={210}
          className="float mx-auto h-auto w-full max-w-[365px]"
        />
      </div>
    </section>
  );
}
