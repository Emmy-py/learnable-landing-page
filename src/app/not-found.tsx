import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1100px] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-[96px] leading-none font-light tracking-tight text-[#777] sm:text-[140px]">404</p>
      <h1 className="mt-6 text-xl sm:text-2xl">Page not found</h1>
      <p className="mt-2 text-sm text-muted">This page doesn’t exist or has been moved.</p>
      <Button href="/" className="mt-8">
        Go back Home
      </Button>
    </section>
  );
}
