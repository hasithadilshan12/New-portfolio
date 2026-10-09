import BackToTop from "@/components/ui/BackToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-6">
          © {currentYear}{" "}
          <span className="text-neutral-400">
            Hasitha Dilshan
          </span>
          . All rights reserved.
        </p>

        <BackToTop />
      </div>
    </footer>
  );
}