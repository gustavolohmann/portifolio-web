import erpImage from "./assets/project-erp.jpg";
import lockerImage from "./assets/project-locker.jpg";
import crmImage from "./assets/project-crm.jpg";

const skills = [
  {
    label: "01 / Frontend",
    title: "Vue.js & React",
    desc: "Interfaces reativas com Vue.js, React e JavaScript moderno.",
  },
  {
    label: "02 / Backend",
    title: "Node & NestJS",
    desc: "APIs robustas com Node.js, Express e NestJS.",
  },
  {
    label: "03 / Dados",
    title: "MySQL & PHP",
    desc: "Modelagem e manutenção de bancos de dados e sistemas legados.",
  },
  {
    label: "04 / Ferramentas",
    title: "Git & Postman",
    desc: "Versionamento, testes de API e fluxo de deploy contínuo.",
  },
];

const timeline = [
  {
    year: "2023 — atualmente",
    title: "Desenvolvedor @ Cluster Tech",
    desc: "Desenvolvimento de ERPs e apps embarcados para gestão de lockers (Silimed, Laudry).",
  },
  {
    year: "2022 — 2023",
    title: "Desenvolvedor @ Smart In Tech",
    desc: "Manutenção e integrações no CRM Consignado Rápido com jQuery, PHP e MySQL.",
  },
  {
    year: "2022 — 2022",
    title: "Estagiário @ Titan Software",
    desc: "Manutenção de ERP, correção de bugs e acompanhamento com devs experientes.",
  },
  {
    year: "2022 — 2024",
    title: "Análise e Desenvolvimento de Sistemas",
    desc: "Formação superior completa na área de tecnologia.",
  },
];

const projects = [
  {
    title: "Silimed ERP",
    client: "Cluster Tech",
    desc: "ERP para gestão de lockers, relatórios, cadastro de produtos e controle de estoque.",
    tags: ["Vue.js", "Express", "MySQL", "AWS"],
    image: erpImage,
  },
  {
    title: "Silimed ASH",
    client: "Cluster Tech",
    desc: "App embarcado em lockers para o modelo de negócio 'ASH'.",
    tags: ["Python", "Kivy", "MySQL", "RFID"],
    image: lockerImage,
  },
  {
    title: "Silimed ASC",
    client: "Cluster Tech",
    desc: "App embarcado em lockers para o modelo de negócio 'ASC'.",
    tags: ["Python", "Kivy", "MySQL", "RFID"],
    image: lockerImage,
  },
  {
    title: "Laudry",
    client: "Cluster Tech",
    desc: "ERP para gestão de lockers e lavanderia, com cadastro de terceiros e acompanhamento em tempo real.",
    tags: ["Vue.js", "NestJS", "MySQL"],
    image: erpImage,
  },
  {
    title: "CRM Consignado Rápido",
    client: "Smart In Tech",
    desc: "Manutenção do CRM e integração com APIs de terceiros.",
    tags: ["jQuery", "PHP", "MySQL"],
    image: crmImage,
  },
  {
    title: "ERP Titan",
    client: "Titan Software",
    desc: "Manutenção de ERP, correção de bugs e acompanhamento técnico.",
    tags: ["jQuery", "PHP", "MySQL"],
    image: erpImage,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-accent">
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tighter uppercase font-bold">G. Lohmann</span>
          <div className="flex gap-8">
            <a href="#experience" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              Experiência
            </a>
            <a href="#projects" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              Projetos
            </a>
            <a href="#contact" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-24 px-6 overflow-hidden grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-fade-up">
            <span className="size-2 bg-accent rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-accent">Disponível para novos projetos</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 animate-fade-up-1 text-balance">
            Gustavo Lohmann Linz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-2 leading-relaxed">
            Desenvolvedor Fullstack especializado em construir interfaces de alto desempenho e sistemas escaláveis com foco em experiência do usuário.
          </p>
          <div className="mt-12 flex justify-center gap-4 animate-fade-up-3">
            <a
              href="#contact"
              className="px-8 py-3 bg-foreground text-background font-medium rounded-sm hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Entrar em Contato
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-border font-medium rounded-sm hover:border-accent/50 transition-all duration-300"
            >
              Ver Projetos
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-6 animate-fade-up-4">
            <a
              href="https://www.linkedin.com/in/gustavolohmannlinz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/gustavolohmann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {skills.map((skill, i) => (
              <div key={skill.label} className="bg-background p-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="font-mono text-[10px] text-accent mb-4 uppercase">{skill.label}</p>
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">Trajetória</p>
            <h2 className="text-4xl font-bold tracking-tight">Experiência & Formação</h2>
          </div>
          <div className="space-y-12 border-l border-border ml-4">
            {timeline.map((item, i) => (
              <div key={item.title} className="relative pl-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute left-[-5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                <span className="text-xs font-mono text-muted-foreground mb-1 block">{item.year}</span>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[56ch]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">Portfolio Selecionado</p>
              <h2 className="text-4xl font-bold tracking-tight">Projetos em Destaque</h2>
            </div>
            <a
              href="https://github.com/gustavolohmann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Ver GitHub &rarr;
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <div key={project.title} className="group animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative aspect-video bg-zinc-900 overflow-hidden mb-6 border border-border">
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      {project.client}
                    </p>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground max-w-[48ch] mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono border border-border px-2 py-0.5 rounded text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://github.com/gustavolohmann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-full border border-border grid place-items-center hover:bg-foreground hover:text-background transition-colors shrink-0"
                    aria-label={`Ver repositório de ${project.title}`}
                  >
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Vamos construir o amanhã.</h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Interessado em colaborar ou apenas quer bater um papo técnico?
          </p>
          <a href="mailto:gustavolohmannlinz@gmail.com" className="text-3xl font-mono text-accent hover:underline">
            gustavolohmannlinz@gmail.com
          </a>

          <div className="mt-24 flex justify-center gap-12 border-t border-border pt-12">
            <a
              href="https://www.linkedin.com/in/gustavolohmannlinz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gustavolohmann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="mt-12 text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
            © 2026 Gustavo Lohmann Linz — São Paulo, Brasil
          </p>
        </div>
      </footer>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
