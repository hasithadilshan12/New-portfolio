import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Selected Projects
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            A selection of projects I&apos;ve designed and built.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 transition duration-300 hover:border-cyan-400/30"
            >
              {/* Cover Image */}
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-video overflow-hidden bg-neutral-950">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {project.category}
                </p>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="mt-2 text-2xl font-semibold text-white transition duration-200 group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Clean Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-white transition hover:text-cyan-400"
                  >
                    View Details →
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition hover:text-cyan-400"
                    >
                      Figma ↗
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition hover:text-cyan-400"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}