import { journeyItems } from "@/data/journey";

export default function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              My Journey
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Education, industry exposure, and practical project experience.
            </h2>
          </div>

          <div className="lg:flex lg:items-end">
            <p className="max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
              My development journey combines academic learning, professional
              exposure, teamwork, and practical experience gained through
              building software projects.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-white/10">
          {journeyItems.map((item, index) => (
            <div
              key={item.id}
              className="group grid gap-6 border-b border-white/10 py-8 transition duration-300 sm:py-10 md:grid-cols-[130px_1fr] lg:grid-cols-[180px_1fr]"
            >
              {/* Timeline Meta */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                  <p className="text-sm text-cyan-400/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <p className="mt-3 text-sm font-medium text-neutral-400">
                  {item.period}
                </p>
              </div>

              {/* Content */}
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-10">
                <div>
                  <h3 className="text-xl font-semibold leading-snug transition duration-300 group-hover:text-cyan-400 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400">
                    {item.organization}
                  </p>
                </div>

                <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}