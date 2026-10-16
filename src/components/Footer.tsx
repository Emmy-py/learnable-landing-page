import Link from "next/link";
import Image from "next/image";
import { navLinks, socials } from "@/data/content";
import { reveal } from "@/components/motion/reveal";

const heading = "text-base text-navy";
const linkCls = "text-sm text-muted hover:text-navy";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1100px] px-4 pt-16 sm:px-6 lg:px-8">
      <div {...reveal("up")} className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_1.1fr_0.8fr_1.2fr] lg:gap-6">
        <div>
          <Image src="/images/footer-logos.png" alt="Learnable by Genesys" width={168} height={40} />
          <p className="mt-5 max-w-64 text-sm text-muted">
            We are training people in tech and outsourcing them to tech companies.
          </p>
        </div>

        <div>
          <h3 className={heading}>Quick Links</h3>
          <ul className="mt-5 space-y-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Location</h3>
          <a
            href="https://maps.google.com/?q=Genesys+Tech+Hub+Enugu"
            target="_blank"
            rel="noreferrer"
            className={`${linkCls} mt-5 block max-w-48 underline`}
          >
            Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City, Enugu, Nigeria.
          </a>
        </div>

        <div>
          <h3 className={heading}>Follow Us</h3>
          <ul className="mt-5 space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className={linkCls}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Need Help?</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li>
              📞 Phone
              <a href="tel:+2348139833301" className="block pl-5 hover:text-navy">
                +234 813 983 3301
              </a>
            </li>
            <li>
              📧 Email
              <a href="mailto:learnable@genesystechhub.com" className="block break-all pl-5 underline hover:text-navy">
                learnable@genesystechhub.com
              </a>
            </li>
            <li>
              ⏳ Business Hours
              <span className="block pl-5">Mon-Fri: 8am-5pm</span>
              <span className="block pl-5">Sat-Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-12 border-t border-black/10 py-5 text-center text-sm text-muted">
        © 2026 Genesys Tech Hub
      </p>
    </footer>
  );
}
