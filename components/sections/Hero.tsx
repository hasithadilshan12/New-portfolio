import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-12"
    >
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute -left-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px]" />

      <div className="hero-enter mx-auto grid w-full max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ======================
            LEFT CONTENT
        ======================= */}
        <div>
          {/* Role Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-xs text-neutral-400 sm:text-sm">
              {profile.role}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Building digital
            <span className="text-cyan-400"> experiences </span>
            for web and mobile.
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            {profile.introduction}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-medium text-black transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.20)]"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-medium text-white transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* ======================
            RIGHT HIGHLIGHT CARD
        ======================= */}
        <div className="hidden lg:block">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-xs uppercase tracking-wider text-neutral-500">
                Current Focus
              </span>
              <span className="text-xs font-medium text-cyan-400">
                {profile.location}
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs text-neutral-500">Specialization</p>
                <p className="mt-1 text-base font-medium text-neutral-200">
                  Full-Stack Web & Mobile App Development
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500">Core Technologies</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Java",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-neutral-500">Education</p>
                <p className="mt-1 text-sm text-neutral-300">
                  Bachelor of Software Engineering (Honours), OUSL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}