import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 px-6 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20">
          {/* Background Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
                I&apos;m interested in internships, learning opportunities,
                collaborations, and software projects that help me grow as a
                developer.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-end">
              <p className="text-sm text-neutral-500">
                Get in touch
              </p>

              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-4 break-all text-xl font-medium leading-snug text-white transition duration-300 hover:text-cyan-400 sm:text-2xl md:text-3xl"
                >
                  {profile.email}
                </a>
              ) : (
                <p className="mt-4 text-lg text-neutral-400 sm:text-xl">
                  Contact information will be added soon.
                </p>
              )}

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-neutral-400 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:px-5 sm:py-3"
                  >
                    LinkedIn ↗
                  </a>
                )}

                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-neutral-400 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:px-5 sm:py-3"
                  >
                    GitHub ↗
                  </a>
                )}

                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-neutral-400 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:px-5 sm:py-3"
                  >
                    Resume ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}