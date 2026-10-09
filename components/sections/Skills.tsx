import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Skills & Technologies
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Technologies I use to design and build digital products.
          </h2>
        </div>

        {/* 3-Column Clean Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 transition duration-300 hover:border-cyan-400/30 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}