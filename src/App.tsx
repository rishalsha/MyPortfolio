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
  Download
} from 'lucide-react';

const RESUME_DATA = {
  name: "Muhammad Rishal P",
  location: "Kannur, Kerala",
  email: "rishal.p.786@gmail.com",
  phone: "+91 8138058739",
  github: "github.com/rishalsha",
  linkedin: "linkedin.com/in/muhammad-rishal",
  summary: "Computer Science and Engineering undergraduate with hands-on experience in backend development, systems programming, IoT, and government IT operations. Backed by a diploma in Electronics and Communication Engineering, offering strong foundations in electronics, networking, embedded systems, and low-level software.",
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
    languages: ["Python", "C", "Java", "SQL", "JavaScript", "NASM Assembly"],
    backend: ["Node.js", "TypeScript", "Express.js", "Spring Boot", "REST APIs"],
    frontend: ["Flutter", "React", "Streamlit", "HTML", "CSS"],
    tools: ["Docker", "Git", "Linux CLI", "Neovim", "PostgreSQL", "MongoDB", "SQLite"]
  },
  projects: [
    {
      title: "Smart Home Automation – Habitat",
      tech: "ESP32, Tasmota, Flutter",
      description: "Built an IoT-based home automation system using ESP32 and Tasmota. Developed a Flutter app (Habitat) for local IP-based device control with remote access via Alexa and Google Assistant.",
      link: "https://github.com/rishalsha/Habitat"
    },
    {
      title: "Rumbly (Run Assembly)",
      tech: "Node.js, TypeScript, NASM",
      description: "Contributed to a platform for executing NASM assembly code, working on backend execution logic using Node.js and TypeScript with controlled sandboxed execution.",
      link: "https://github.com/IamShaDoW666/rumbly"
    },
    {
      title: "RFID Based Attendance System",
      tech: "IoT, Embedded C",
      description: "Designed and implemented an RFID-based attendance management system to automatically record user entry, validate identities, and store attendance data digitally, reducing manual effort and improving accuracy."
    },
    {
      title: "Smart Car Parking System",
      tech: "Sensors, Control Logic",
      description: "Developed an automated parking management system to monitor parking slot availability and optimize space utilization using sensor-based detection and control logic."
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
      <Section title="Selected Projects" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl group hover:border-accent/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <div className="mono text-accent mb-4 text-xs">{project.tech}</div>
              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Arsenal" id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
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
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Terminal size={18} />
              <span className="mono font-bold">BACKEND</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.backend.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Globe size={18} />
              <span className="mono font-bold">FRONTEND</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.frontend.map(s => (
                <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded mono text-xs">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Layers size={18} />
              <span className="mono font-bold">TOOLS & DB</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.tools.map(s => (
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
