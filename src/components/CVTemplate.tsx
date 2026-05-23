import { cvData, type CVData } from "@/data/cv";
import type { Locale, UILabels } from "@/i18n/ui";

function stripUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}

function MainSection({
  num,
  title,
  children,
  className = "",
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mb-1 flex items-baseline gap-2">
        <span className="section-num">{num}</span>
        <h2 className="section-heading">{title}</h2>
        <span className="ml-auto h-px flex-1 max-w-[40%] bg-gradient-to-r from-brand-accent/50 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 mb-3.5">
      <h2 className="sidebar-heading">{title}</h2>
      {children}
    </div>
  );
}

function SkillPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span key={item} className="skill-pill">
          {item}
        </span>
      ))}
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="contact-chip">
      <span className="block text-[6.5px] font-bold uppercase tracking-widest text-brand-glow/70">
        {label}
      </span>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium">
          {value}
        </a>
      ) : (
        <span className="font-medium">{value}</span>
      )}
    </div>
  );
}

type CVTemplateProps = {
  data?: CVData;
  labels: UILabels;
  locale?: Locale;
};

export default function CVTemplate({
  data = cvData,
  labels,
  locale = "vi",
}: CVTemplateProps) {
  const { header, technicalSkills } = data;
  const sg = labels.sidebar.skillGroups;

  return (
    <article
      className="cv-page relative mx-auto overflow-hidden bg-white font-sans text-cv-body shadow-cv print:shadow-none"
      aria-label={locale === "vi" ? "Sơ yếu lý lịch" : "Curriculum Vitae"}
      lang={locale}
    >
      {/* Accent stripe */}
      <div className="cv-header-accent h-1 w-full" aria-hidden />

      {/* HEADER — business band */}
      <header className="cv-header-cut relative bg-brand-navy px-5 pb-5 pt-3.5 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[7px] font-bold uppercase tracking-[0.35em] text-brand-glow/80">
              {labels.cvDocument}
            </p>
            <h1 className="mt-0.5 font-sans text-[26px] font-extrabold leading-none tracking-tight text-white">
              {header.fullName}
            </h1>
            <p className="mt-1 text-[12px] font-bold tracking-wide text-brand-accent">
              {header.position}
            </p>
            <p className="mt-1.5 max-w-[95%] font-serif text-[10px] italic leading-snug text-white/80">
              {header.tagline}
            </p>
            {header.highlights.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {header.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-white"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="shrink-0 rounded-sm border border-white/15 bg-white/5 p-2 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-1.5">
              <ContactItem label={labels.contact.phone} value={header.phone} href={`tel:${header.phone.replace(/\s/g, "")}`} />
              <ContactItem label={labels.contact.email} value={header.email} href={`mailto:${header.email}`} />
              <ContactItem label={labels.contact.location} value={header.address} />
              <ContactItem label={labels.contact.github} value={stripUrl(header.github)} href={header.github} />
              <ContactItem label={labels.contact.linkedin} value={stripUrl(header.linkedin)} href={header.linkedin} />
            </div>
          </div>
        </div>
      </header>

      <div className="cv-body flex">
        {/* Sidebar 1/3 */}
        <aside className="cv-sidebar w-[33.333%] shrink-0 px-3 py-3.5 text-white">
          <SidebarSection title={labels.sidebar.technicalSkills}>
            <div className="space-y-2">
              {(
                [
                  [sg.languages, technicalSkills.languages],
                  [sg.frameworks, technicalSkills.frameworks],
                  [sg.tools, technicalSkills.tools],
                  [sg.databases, technicalSkills.databases],
                ] as const
              ).map(([label, items]) =>
                items.length > 0 ? (
                  <div key={label}>
                    <p className="mb-1 text-[7px] font-semibold text-white/60">{label}</p>
                    <SkillPills items={[...items]} />
                  </div>
                ) : null,
              )}
            </div>
          </SidebarSection>

          {data.certifications.length > 0 && (
            <SidebarSection title={labels.sidebar.certifications}>
              <ul className="space-y-1.5">
                {data.certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-brand-accent/60 pl-2 text-[8px] leading-snug"
                  >
                    <span className="font-semibold text-white">{cert.name}</span>
                    {cert.detail && (
                      <span className="mt-0.5 block text-[7px] text-white/65">{cert.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </SidebarSection>
          )}

          <SidebarSection title={labels.sidebar.languages}>
            <ul className="space-y-1.5">
              {data.languages.map((lang, i) => (
                <li key={i} className="text-[8px] leading-snug">
                  <span className="font-bold text-brand-glow">{lang.name}</span>
                  <p className="mt-0.5 text-white/70">{lang.level}</p>
                </li>
              ))}
            </ul>
          </SidebarSection>

          <div
            className="relative z-10 mt-auto pt-2 text-[6.5px] uppercase tracking-widest text-white/40"
            aria-hidden
          >
            {labels.sidebar.footer}
          </div>
        </aside>

        {/* Main 2/3 */}
        <main className="w-[66.667%] bg-brand-paper px-4 py-3">
          <MainSection num="01" title={labels.main.careerObjective} className="mb-2.5">
            <blockquote className="relative border-l-[3px] border-brand-accent bg-white px-2.5 py-1.5 text-[8.5px] leading-relaxed text-cv-body shadow-card">
              <span
                className="pointer-events-none absolute -left-0.5 -top-1 font-serif text-2xl leading-none text-brand-accent/30"
                aria-hidden
              >
                "
              </span>
              {data.careerObjective}
            </blockquote>
          </MainSection>

          <MainSection num="02" title={labels.main.education} className="mb-2.5">
            {data.education.map((edu, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-2 rounded-sm border border-cv-line/60 bg-white px-2 py-1"
              >
                <div>
                  <p className="text-[9.5px] font-bold text-cv-ink">{edu.school}</p>
                  <p className="text-[8.5px] text-cv-muted">{edu.major}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[8px] font-semibold text-brand-ocean">{edu.period}</p>
                  {edu.gpa && (
                    <p className="mt-0.5 rounded bg-brand-mist px-1.5 py-px text-[7.5px] font-bold text-brand-navy">
                      {edu.gpa}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </MainSection>

          <MainSection num="03" title={labels.main.projects} className="mb-2">
            <div className="space-y-2">
              {data.projects.map((project, i) => (
                <article key={i} className="project-card">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[9.5px] font-bold leading-tight text-cv-ink">
                      {project.name}
                    </h3>
                    <time className="shrink-0 rounded bg-brand-navy px-1.5 py-px text-[7px] font-bold text-white">
                      {project.period}
                    </time>
                  </div>
                  <p className="mt-0.5 text-[8px] font-semibold text-brand-ocean">
                    {project.role}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-[8.5px] leading-snug text-cv-body">{project.summary}</p>
                  <ul className="mt-1 space-y-0.5">
                    {project.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-1.5 text-[8px] leading-snug text-cv-muted before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-brand-accent before:content-['']"
                      >
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {(project.result || project.githubUrl) && (
                    <p className="mt-1 flex flex-wrap items-center gap-1 text-[7.5px]">
                      {project.result && (
                        <span className="font-bold text-brand-navy">{project.result}</span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="font-semibold text-brand-sky underline decoration-brand-accent/50 underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {labels.main.viewSource}
                        </a>
                      )}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </MainSection>

          {data.activities.length > 0 && (
            <MainSection num="04" title={labels.main.activities}>
              <ul className="space-y-1">
                {data.activities.map((act, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[8px] leading-snug border-b border-cv-line/50 pb-1 last:border-0"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <div>
                      <span className="font-bold text-cv-ink">
                        {act.title}
                        {act.period && (
                          <span className="ml-1 font-normal text-brand-ocean">· {act.period}</span>
                        )}
                      </span>
                      <span className="text-cv-muted"> — {act.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </MainSection>
          )}
        </main>
      </div>
    </article>
  );
}
