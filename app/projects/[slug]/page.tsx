import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Hasitha Dilshan`,
      description: project.description,
      type: "website",
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Hasitha Dilshan`,
      description: project.description,
      images: [project.image],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main
        id="top"
        className="min-h-screen overflow-hidden bg-neutral-950 text-white"
      >
        {/* =========================
            1. HEADER & META
        ========================== */}
        <section className="px-5 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:pt-36">
          <div className="mx-auto max-w-5xl">
            {/* Back Link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition duration-200 hover:text-cyan-400"
            >
              ← Back to Projects
            </Link>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                {project.category}
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
                {project.description}
              </p>

              {/* Meta & Links */}
              <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400">
                  {project.role && (
                    <p>
                      <span className="text-neutral-600">Role:</span>{" "}
                      {project.role}
                    </p>
                  )}
                  {project.projectType && (
                    <p>
                      <span className="text-neutral-600">Type:</span>{" "}
                      {project.projectType}
                    </p>
                  )}
                </div>

                {/* External Action Links */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-medium text-black transition duration-200 hover:bg-cyan-300 sm:text-sm"
                    >
                      View Code ↗
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-white transition duration-200 hover:border-cyan-400/50 hover:text-cyan-400 sm:text-sm"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-white transition duration-200 hover:border-cyan-400/50 hover:text-cyan-400 sm:text-sm"
                    >
                      Figma Prototype ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            2. PROJECT MEDIA & OVERVIEW
        ========================== */}
        <section className="px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-5xl space-y-12">
            {/* Main Cover Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 sm:rounded-3xl">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>

            {/* Overview */}
            {project.overview && (
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-10">
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                  Project Overview
                </p>
                <p className="mt-4 text-base leading-8 text-neutral-300 sm:text-lg sm:leading-8">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Gallery (if provided) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                  Interface Screenshots
                </p>
                <div
                  className={`grid gap-4 ${
                    project.galleryType === "mobile"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "sm:grid-cols-2"
                  }`}
                >
                  {project.gallery.map((img, idx) => (
                    <div
                      key={img}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                      style={{
                        aspectRatio:
                          project.galleryType === "mobile"
                            ? "9/19"
                            : "16/10",
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================
            3. KEY HIGHLIGHTS & LEARNINGS
        ========================== */}
        {(project.features?.length || project.learned?.length) && (
          <section className="border-t border-white/10 px-5 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-white">
                    Key Features
                  </h2>
                  <ul className="mt-6 space-y-3.5 text-sm leading-6 text-neutral-300 sm:text-base">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What I Learned */}
              {project.learned && project.learned.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold text-white">
                    Key Takeaways & Learnings
                  </h2>
                  <ul className="mt-6 space-y-3.5 text-sm leading-6 text-neutral-300 sm:text-base">
                    {project.learned.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================
            BOTTOM NAVIGATION
        ========================== */}
        <section className="border-t border-white/10 px-5 py-12 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              ← Back to All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}