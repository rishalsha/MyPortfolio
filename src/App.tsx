/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Cpu, 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Layers,
  ChevronRight,
  Download,
  Package,
  Bot,
  Radio,
  Sparkles
} from 'lucide-react';

const RESUME_DATA = {
  name: "Muhammad Rishal P",
  location: "Kannur, Kerala",
  email: "rishal.p.786@gmail.com",
  phone: "+91 8138058739",
  website: "rishal.me",
  github: "github.com/rishalsha",
  linkedin: "linkedin.com/in/muhammad-rishal",
  summary: "Computer Science & Engineering undergraduate specializing in systems programming, local AI & RAG architectures, terminal tooling, and embedded IoT. Proficient in Python, TypeScript, C/C++, and Java, with hands-on experience in full-stack architectures and low-level system implementations.",
  education: [
    {
      institution: "Government Engineering College, Kannur",
      degree: "B.Tech – Computer Science and Engineering",
      period: "2024 – Present",
      details: "Relevant coursework: Data Structures, OOP, DBMS, Operating Systems"
    },
    {
      institution: "E.K. Nayanar Memorial Model Polytechnic College",
      degree: "Diploma – Electronics and Communication Engineering",
      period: "2020 – 2023",
      details: "CGPA: 8.77. Strong foundation in electronics, networking, and low-level programming"
    }
  ],
  experience: [
    {
      company: "Infosys Springboard",
      role: "Software Development Intern (Virtual)",
      period: "2025 – 2026",
      description: [
        "Developing a Resume Analysis and Job Recommendation system using Python and Streamlit.",
        "Implementing authentication with bcrypt, SQLite3, and LangChain-based resume parsing."
      ]
    },
    {
      company: "KELTRON",
      role: "Network Supervisor & Digital Signature Project Coordinator",
      period: "2023",
      description: [
        "Managed IT and network operations at the Department of Treasuries, Government of Kerala.",
        "Coordinated DSC implementation for secure authentication and document workflows.",
        "Provided system configuration and troubleshooting in a production environment."
      ]
    },
    {
      company: "SFO Technologies",
      role: "Production Technician – Wire Harnessing",
      period: "2023",
      description: [
        "Worked on wire harness assembly and inspection for electronic systems.",
        "Followed industrial manufacturing standards and quality control processes."
      ]
    }
  ],
  skills: {
    languages: ["Python", "TypeScript", "C / C++", "Java", "SQL", "NASM Assembly"],
    systemsAndAi: ["Local LLMs (Ollama)", "RAG & Vector Search (SQLite FTS5)", "Piper TTS (ONNX)", "Ratatui TUI", "Tokio Async"],
    backend: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Docker", "SQLite (WAL)", "PostgreSQL"],
    hardwareAndIot: ["ESP32 / Tasmota", "MQTT (Mosquitto)", "Linux (Hyprland / Wayland)", "Embedded C", "Flutter"]
  },
  projects: [
    {
      title: "J.A.R.V.I.S. — Voice AI Companion",
      category: "AI & Voice",
      badge: "Flagship",
      tech: "Python, Ollama (Qwen2.5 GPU), Piper TTS (75ms), SQLite FTS5 RAG, Web Audio HUD, MQTT",
      description: "100% private, local voice-interactive personal AI assistant with local RTX 3060 GPU inference, ultra-low-latency in-memory speech synthesis (~75ms Piper TTS), real-time RAG memory vault (<1ms BM25 recall), conversational barge-in detection, and integrated smart home IoT control.",
      link: "https://github.com/rishalsha/Jarvis",
      highlights: ["Local GPU Inference", "Sub-1ms Memory Recall", "Real-Time Barge-In"]
    },
    {
      title: "papr — Terminal Typesetting Engine",
      category: "Systems & CLI",
      badge: "Crates.io",
      tech: "Rust, Tectonic, XeTeX, KaTeX, CLI",
      description: "Lightning-fast CLI tool to compile Markdown, LaTeX, and plain text files into publication-grade PDFs directly inside the terminal. Supports full GitHub Flavored Markdown, embedded KaTeX math, multi-file LaTeX projects, and automatic package resolution.",
      link: "https://github.com/rishalsha/papr",
      crateLink: "https://crates.io/crates/papr-cli",
      highlights: ["Published on Crates.io", "Zero-Config PDF Generation", "Multi-file LaTeX"]
    },
    {
      title: "qmit — AI Conventional Commit CLI",
      category: "Systems & CLI",
      badge: "Crates.io",
      tech: "Rust, LLM APIs, Git CLI",
      description: "Blazing-fast Rust CLI tool that inspects staged Git diffs and automatically generates standardized, high-quality Conventional Commit messages (v1.0.0 compliant) with interactive staging and approval.",
      link: "https://github.com/rishalsha/qmit",
      crateLink: "https://crates.io/crates/qmit",
      highlights: ["Published on Crates.io", "Git Diff Inspection", "Conventional Commits v1.0"]
    },
    {
      title: "SpeedTest CLI & Ratatui TUI",
      category: "Systems & CLI",
      badge: "Terminal UI",
      tech: "Rust, Ratatui, Crossterm, Tokio Async",
      description: "High-performance network benchmark suite and real-time latency monitor written in Rust. Features a rich Ratatui terminal UI with live throughput graphs, alongside headless CLI modes supporting JSON and CSV exports across Linux, macOS, and Windows.",
      link: "https://github.com/rishalsha/SpeedTest",
      highlights: ["Interactive TUI Graphs", "Async Tokio Engine", "Cross-Platform Binaries"]
    },
    {
      title: "gpt-cli — AI Terminal Assistant",
      category: "AI & Voice",
      badge: "CLI Tool",
      tech: "Go, Markdown Streaming, Unix Piping, LLM APIs",
      description: "Lightning-fast terminal AI companion in Go featuring real-time Markdown response streaming, multi-provider presets, interactive multi-turn chats, clipboard synchronization, and seamless Unix piping integration.",
      link: "https://github.com/rishalsha/GPT-CLI",
      highlights: ["Real-Time Streaming", "Unix Pipes Compatible", "Multi-Provider"]
    },
    {
      title: "JsonBin — Self-Hosted JSON Engine",
      category: "Backend & Cloud",
      badge: "API & Backend",
      tech: "Python 3.12, FastAPI, SQLite (WAL Mode), Docker, Swagger",
      description: "Lightweight, self-hosted JSON storage backend compatible with the JSONBin.io v3 API. Engineered for frontend-only web apps and mobile clients with sub-millisecond SQLite WAL persistence, full CORS control, and Docker packaging.",
      link: "https://github.com/rishalsha/JsonBin",
      highlights: ["JSONBin.io v3 Drop-in", "SQLite WAL Engine", "Docker Ready"]
    },
    {
      title: "IPadDock — Mission Control Station",
      category: "Hardware & IoT",
      badge: "Hardware Hack",
      tech: "Python, Mosquitto MQTT, Linux Hyprland/Wayland, Pure ES5 SVG",
      description: "Hardware & software setup repurposing a retired iPad Gen 4 (iOS 10.3 / WebKit 602) into a dedicated mission-control battlestation dashboard, smart home controller, multi-machine stream deck, and cross-device clipboard bridge.",
      link: "https://github.com/rishalsha/IPadDock",
      highlights: ["Legacy iOS 10.3 Support", "MQTT Telemetry", "Hyprland Wayland IPC"]
    },
    {
      title: "ghcli — GitHub Management TUI",
      category: "Systems & CLI",
      badge: "Terminal UI",
      tech: "Rust, Ratatui, GitHub REST API",
      description: "Fast terminal-based user interface for browsing, creating, cloning, searching, and managing GitHub repositories with interactive keyboard navigation directly from the shell.",
      link: "https://github.com/rishalsha/GitHubCLI",
      highlights: ["Full Repo Lifecycle", "Ratatui TUI", "Keyboard Driven"]
    },
    {
      title: "Smart Home Automation – Habitat",
      category: "Hardware & IoT",
      badge: "Smart Home",
      tech: "ESP32, Tasmota, MQTT, Flutter",
      description: "Custom IoT smart home automation system powered by ESP32 microcontrollers and Tasmota firmware. Features a cross-platform Flutter client for zero-latency local IP control alongside voice assistant bridging.",
      link: "https://github.com/rishalsha/Habitat",
      highlights: ["Local IP Control", "ESP32 + Tasmota", "Cross-Platform Flutter"]
    },
    {
      title: "Rumbly (Run Assembly)",
      category: "Backend & Cloud",
      badge: "Open Source",
      tech: "Node.js, TypeScript, NASM Assembly, Sandboxing",
      description: "Backend execution engine and isolated sandboxing environment for compiling and running NASM assembly code safely in the cloud with real-time output capture.",
      link: "https://github.com/IamShaDoW666/rumbly",
      highlights: ["Isolated Sandbox", "NASM Assembly Execution", "TypeScript Backend"]
    }
  ]
};

const Section = ({ title, children, id, className = "" }: { title: string, children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-12 border-b border-border ${className}`}>
    <div className="max-w-5xl mx-auto px-6">
      <span className="section-label">{title}</span>
      {children}
    </div>
  </section>
);

const RESUME_PDF_URL = '/Muhammad%20Rishal%20P.pdf';

export default function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);
  const [popupOffset, setPopupOffset] = React.useState({ x: 0, y: 0 });
  const dragStateRef = React.useRef<{
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);

  React.useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragStateRef.current) {
        return;
      }

      const deltaX = event.clientX - dragStateRef.current.startX;
      const deltaY = event.clientY - dragStateRef.current.startY;

      setPopupOffset({
        x: dragStateRef.current.originX + deltaX,
        y: dragStateRef.current.originY + deltaY,
      });
    };

    const handlePointerUp = () => {
      dragStateRef.current = null;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const handlePopupDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: popupOffset.x,
      originY: popupOffset.y,
    };
  };

  const handleResumeDownload = async () => {
    const response = await fetch(RESUME_PDF_URL);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = blobUrl;
    link.download = 'Muhammad Rishal P.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div className="min-h-screen data-grid">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-bg font-bold">R</div>
            <span className="mono font-bold hidden sm:block">RISHAL.P</span>
          </div>
          <div className="flex gap-6 mono text-muted">
            <a href="#experience" className="hover:text-accent transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-accent transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-accent transition-colors">SKILLS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-8xl font-bold mb-6 leading-none">
              {RESUME_DATA.name.split(' ')[0]} <br />
              <span className="text-accent">{RESUME_DATA.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8 text-muted mono">
              <a 
                href={`https://${RESUME_DATA.website}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10 hover:border-accent hover:text-accent transition-colors"
              >
                <Globe size={14} className="text-accent" />
                {RESUME_DATA.website}
              </a>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
                <MapPin size={14} className="text-accent" />
                {RESUME_DATA.location}
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
                <Mail size={14} className="text-accent" />
                {RESUME_DATA.email}
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
                <Phone size={14} className="text-accent" />
                {RESUME_DATA.phone}
              </div>
            </div>

            <p className="text-xl text-muted max-w-2xl leading-relaxed mb-10">
              {RESUME_DATA.summary}
            </p>

            <div className="flex gap-4">
              <a 
                href={`https://${RESUME_DATA.github}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${RESUME_DATA.linkedin}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin size={20} />
              </a>
              <button
                type="button"
                onClick={() => {
                  setPopupOffset({ x: 0, y: 0 });
                  setIsResumeOpen(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-bg font-bold rounded-full hover:opacity-90 transition-all"
              >
                <Download size={18} />
                RESUME.PDF
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      </header>

      {isResumeOpen && (
        <div className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div
            className="relative border border-border rounded-2xl bg-bg/95 overflow-hidden shadow-2xl"
            style={{
              width: 'min(92vw, calc(88vh / 1.414))',
              aspectRatio: '1 / 1.414',
              transform: `translate(${popupOffset.x}px, ${popupOffset.y}px)`,
            }}
          >
            <div
              className="absolute top-3 right-3 z-10 flex justify-end gap-2 cursor-move select-none"
              onPointerDown={handlePopupDragStart}
            >
              <button
                type="button"
                onClick={handleResumeDownload}
                onPointerDown={(event) => event.stopPropagation()}
                className="px-3 py-1.5 rounded border border-border bg-bg/90 text-sm mono hover:border-accent hover:text-accent transition-colors"
              >
                DOWNLOAD
              </button>
              <button
                type="button"
                onClick={() => setIsResumeOpen(false)}
                onPointerDown={(event) => event.stopPropagation()}
                className="px-3 py-1.5 rounded border border-border bg-bg/90 text-sm mono hover:border-accent hover:text-accent transition-colors"
              >
                CLOSE
              </button>
            </div>

            <div className="relative w-full h-full">
              <iframe
                src={`${RESUME_PDF_URL}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Resume Preview"
                className="absolute left-0 right-0 bottom-0 top-14 w-full h-full bg-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      <Section title="Experience" id="experience">
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4"
            >
              <div className="mono text-muted">{exp.period}</div>
              <div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="text-accent mono mb-4">{exp.company}</div>
                <ul className="space-y-2 text-muted">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <ChevronRight size={16} className="text-accent shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects" id="projects">
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Systems & CLI', 'AI & Voice', 'Backend & Cloud', 'Hardware & IoT'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs mono transition-all ${
                selectedCategory === cat 
                  ? 'bg-accent text-bg font-bold shadow-sm' 
                  : 'bg-white/5 text-muted hover:text-ink hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.projects
            .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
            .map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass p-6 rounded-2xl group hover:border-accent/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] mono border border-accent/40 bg-accent/10 text-accent font-semibold tracking-wide uppercase">
                        {project.badge}
                      </span>
                      <span className="text-muted text-xs mono">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.crateLink && (
                        <a 
                          href={project.crateLink} 
                          target="_blank" 
                          rel="noreferrer" 
                          title="View on Crates.io"
                          className="text-muted hover:text-accent p-1 transition-colors"
                        >
                          <Package size={17} />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          title="View Repository"
                          className="text-muted hover:text-accent p-1 transition-colors"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="mono text-accent/90 mb-3 text-xs leading-relaxed">
                    {project.tech}
                  </div>
                  
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="text-[10px] mono px-2 py-0.5 rounded bg-white/5 text-muted border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Arsenal" id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-5 rounded-xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Code2 size={18} />
              <span className="mono font-bold">LANGUAGES</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.languages.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>
          
          <div className="glass p-5 rounded-xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Bot size={18} />
              <span className="mono font-bold">SYSTEMS & AI</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.systemsAndAi.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass p-5 rounded-xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Terminal size={18} />
              <span className="mono font-bold">BACKEND & CLOUD</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.backend.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass p-5 rounded-xl border border-white/5 space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Radio size={18} />
              <span className="mono font-bold">HARDWARE & IOT</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.hardwareAndIot.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <div className="space-y-8">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <div className="text-accent mono">{edu.degree}</div>
                <div className="text-muted text-sm mt-2">{edu.details}</div>
              </div>
              <div className="mono text-muted shrink-0">{edu.period}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border bg-bg/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's build something <span className="text-accent italic font-serif">extraordinary</span>.</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href={`https://${RESUME_DATA.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors mono">
              <Globe size={18} />
              WEBSITE
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="flex items-center gap-2 text-muted hover:text-accent transition-colors mono">
              <Mail size={18} />
              EMAIL
            </a>
            <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors mono">
              <Linkedin size={18} />
              LINKEDIN
            </a>
            <a href={`https://${RESUME_DATA.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors mono">
              <Github size={18} />
              GITHUB
            </a>
          </div>
          <p className="mono text-[10px] text-muted opacity-50">
            DESIGNED & DEVELOPED BY MUHAMMAD RISHAL P &copy; 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
