import { profile } from "@/data/profile";

export default function About() {
  const coreCompetencies = [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Interface Design",
    "Database & API Integration",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Turning concepts into reliable, user-focused digital solutions.
          </h2>
        </div>

        {/* 2 Parallel Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* Left Card: Story & Background */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 md:p-10 transition duration-300 hover:border-cyan-400/20">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Background & Goals
              </h3>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
                <p className="text-neutral-200">
                  {profile.introduction}
                </p>
                <p>
                  {profile.about}
                </p>
                <p>
                  {profile.goal}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: At a Glance */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 md:p-10 transition duration-300 hover:border-cyan-400/20">
            <div>
              <h3 className="text-lg font-semibold text-white">
                At a Glance
              </h3>

              <div className="mt-6 space-y-6 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Location
                  </p>
                  <p className="mt-1 text-base font-medium text-cyan-400">
                    {profile.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Degree
                  </p>
                  <p className="mt-1 text-base font-medium text-neutral-200">
                    Bachelor of Software Engineering Honours (Year 3)
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    The Open University of Sri Lanka
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Core Focus Areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {coreCompetencies.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}