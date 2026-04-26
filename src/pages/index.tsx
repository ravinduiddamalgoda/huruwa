import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTheme } from "../lib/theme";
import Fish1 from "../asset/1.jpeg";
import Fish2 from "../asset/2.jpeg";
import Fish3 from "../asset/3.jpeg";
import Fish4 from "../asset/4.jpeg";
import Member1 from "../asset/team/1.jpeg";
import Member2 from "../asset/team/2.png";
import Member3 from "../asset/team/3.jpeg";
import Member4 from "../asset/team/4.jpeg";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const navLinks = [
  { id: "home", label: "Home" },
  { id: "introduction", label: "Introduction" },
  { id: "scope", label: "Scope" },
  { id: "methodology", label: "Methodology" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const heroStats = [
  { label: "AI Components", value: "4" },
  { label: "Phoneme accuracy", value: "94%" },
  { label: "Sinhala-first", value: "සිංහල" },
];

const researchGaps = [
  {
    title: "Limited Language-Specific Solutions",
    body: "Most existing systems are designed for high-resource languages, with very limited support for Sinhala. This reduces effectiveness in phoneme recognition and therapy accuracy for local children.",
  },
  {
    title: "Lack of Child-Specific Speech Recognition",
    body: "Many speech recognition models are trained on adult speech, resulting in poor performance when analyzing children's speech, which has unique acoustic and pronunciation patterns.",
  },
  {
    title: "Fragmented Therapy and Home Support",
    body: "Current solutions often separate clinical therapy from home practice, lacking a unified system that connects therapists, children, and parents for continuous learning.",
  },
  {
    title: "Insufficient Real-Time Adaptive Feedback",
    body: "Existing applications provide limited real-time feedback and do not dynamically adapt exercises based on a child's pronunciation errors or progress.",
  },
  {
    title: "Limited Personalization in Therapy",
    body: "Few systems use structured knowledge or adaptive mechanisms (such as phonology-based mappings) to generate personalized therapy content.",
  },
  {
    title: "Lack of Intelligent Parent Guidance",
    body: "Most platforms provide only static reports. There is a lack of AI-driven systems that offer contextual, understandable, and actionable guidance for caregivers.",
  },
];

const objectives = [
  {
    title: "Phoneme-Level Speech Recognition",
    body: "A child-specific speech recognition system that analyses Sinhala speech at the phoneme level to detect pronunciation errors and provide detailed feedback.",
  },
  {
    title: "Adaptive Therapy Generation",
    body: "Generate personalized therapy exercises using phonological knowledge graphs and rule-based mappings, adapting to each child's progress.",
  },
  {
    title: "Interactive AI–IoT Therapy",
    body: "An IoT-enabled smart toy that engages children through story-based conversations and real-time feedback to improve speech development.",
  },
  {
    title: "Real-Time Error Correction",
    body: "A closed-loop system that continuously evaluates speech, identifies errors, and dynamically adjusts learning tasks for higher therapy effectiveness.",
  },
  {
    title: "Parent Guidance with RAG",
    body: "An AI-powered RAG assistant that provides parents with clear insights, progress summaries, and actionable recommendations for home practice.",
  },
  {
    title: "Mobile Integration",
    body: "A mobile-first platform connecting children, parents, and therapists with accessibility, real-time interaction and seamless communication.",
  },
];

const literature = [
  {
    title: "AI–IoT Therapy Systems",
    body: "IoT-enabled smart devices and robotic systems improve engagement through interactive feedback, but lack language-specific adaptation and home support.",
  },
  {
    title: "Child Speech Recognition (ASR)",
    body: "Recognising children's speech is challenging due to variations in pitch and articulation. Child-specific phoneme-level ASR significantly improves accuracy.",
  },
  {
    title: "Phonological Error Detection",
    body: "Lightweight, optimised models such as SVM-RBF deliver practical real-time performance compared to heavier transformer alternatives.",
  },
  {
    title: "Personalised Therapy Generation",
    body: "Knowledge graphs and rule-based systems generate targeted exercises adapted to each child's specific phonological errors.",
  },
  {
    title: "Parent Awareness Systems",
    body: "Modern RAG-based assistants deliver personalised insights, progress tracking and actionable guidance for caregivers.",
  },
  {
    title: "Mobile Therapy Applications",
    body: "Mobile platforms with real-time AI feedback and gamified learning bridge clinical therapy and home practice effectively.",
  },
];

const scopeCards = [
  {
    title: "Speech Sound Detection",
    body: "AI-powered phoneme-level speech recognition designed to accurately identify pronunciation errors in Sinhala-speaking children using child-specific data.",
    icon: (
      <path d="M12 3v10m0 0a3 3 0 003-3V8a3 3 0 10-6 0v2a3 3 0 003 3zm5-3a5 5 0 01-10 0m5 5v4m-3 0h6" />
    ),
  },
  {
    title: "Personalised Therapy",
    body: "Adaptive exercises driven by knowledge-graph mappings and rule-based generation — targeted, effective, and tailored to each child's needs.",
    icon: (
      <path d="M10.325 4.317a1 1 0 011.35-.436l1.94.97a1 1 0 00.894 0l1.94-.97a1 1 0 011.35.436l.97 1.94a1 1 0 00.728.54l2.14.306a1 1 0 01.83 1.14l-.306 2.14a1 1 0 00.22.79l1.334 1.6a1 1 0 010 1.28l-1.334 1.6a1 1 0 00-.22.79l.306 2.14a1 1 0 01-.83 1.14l-2.14.306a1 1 0 00-.728.54l-.97 1.94a1 1 0 01-1.35.436l-1.94-.97a1 1 0 00-.894 0l-1.94.97a1 1 0 01-1.35-.436l-.97-1.94a1 1 0 00-.728-.54l-2.14-.306a1 1 0 01-.83-1.14l.306-2.14a1 1 0 00-.22-.79l-1.334-1.6a1 1 0 010-1.28l1.334-1.6a1 1 0 00.22-.79l-.306-2.14a1 1 0 01.83-1.14l2.14-.306a1 1 0 00.728-.54l.97-1.94zM12 15a3 3 0 100-6 3 3 0 000 6z" />
    ),
  },
  {
    title: "Mobile & IoT App",
    body: "An interactive mobile app integrated with the AI–IoT system: real-time speech analysis, engaging therapy sessions and parent dashboards, anywhere.",
    icon: (
      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm-2-9h3m10 0h3m-14 4h12" />
    ),
  },
];

const milestones = [
  { tag: "Sep 2025", title: "Project Proposal", body: "Presented to potential sponsors and clients to receive funding and approval.", marks: 6 },
  { tag: "Jan 2026", title: "Progress Presentation 1", body: "Reviews the 50% completion status of the project.", marks: 15 },
  { tag: "Mar 2026", title: "Progress Presentation 2", body: "Reviews the 90% completion status with demonstrations.", marks: 18 },
  { tag: "Apr 2026", title: "Website Assessment", body: "A website to promote the research project and share related information.", marks: 2 },
  { tag: "May 2026", title: "Final Report", body: "Individual and group reports containing details of the completed project.", marks: 19 },
  { tag: "May 2026", title: "Final Presentation & Viva", body: "Final presentation and viva to assess each member individually.", marks: 20 },
  { tag: "May 2026", title: "Logbook", body: "Project status and completion log.", marks: 2 },
  { tag: "May 2026", title: "Research Paper", body: "Research paper based on the completed project.", marks: 10 },
];

const team = [
  { img: Member1, name: "Divyani Piyathilake", role: "AI Therapy & Support Engineer" },
  { img: Member2, name: "Harshana Abeyrathne", role: "Mobile & RAG Engineer" },
  { img: Member3, name: "Dilum Pallebathagala", role: "Speech Recognition & ML Lead" },
  { img: Member4, name: "Ravindu Iddamalgoda", role: "IoT & Robotics Lead" },
];

const presentations = [
  { label: "Proposal Presentation — January 2026", url: "https://canva.link/33ug44972d033wx" },
  { label: "Progress Presentation 1 — January 2026", url: "https://canva.link/j47v574zelk1f4e" },
  { label: "Progress Presentation 2 — March 2026", url: "https://canva.link/h2iuz05qr4ln3ow" },
  { label: "Final Presentation — Pending", url: null },
];

const documents = [
  { label: "Topic Assessment — June 2025", url: "https://drive.google.com/file/d/1nSsij8NroVXbRVBGhBB3heETG9iFjYy0/view?usp=sharing" },
  { label: "Project Proposal — September 2025", url: "https://drive.google.com/drive/folders/1P9mFB-2cm0Im-aDjtavJyUQJFdDPQAcW?usp=sharing" },
  { label: "Research Paper — April 2026", url: "https://drive.google.com/file/d/15FKfdFjwk3nsGXlNZEYEMPqB0fILFNh2/view?usp=sharing" },
  { label: "Final Report — Pending", url: null },
  { label: "Poster — Pending", url: null },
];

export default function Home() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const fishImages = [Fish1, Fish2, Fish3, Fish4];
  const [currentFish, setCurrentFish] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setCurrentFish((p) => (p + 1) % fishImages.length),
      4500
    );
    return () => clearTimeout(t);
  }, [currentFish, fishImages.length]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="blob top-[-12rem] left-[-8rem] h-[28rem] w-[28rem] bg-brand-300/40" />
        <div className="blob top-[20%] right-[-10rem] h-[26rem] w-[26rem] bg-accent-200/40" />
        <div className="blob bottom-[-12rem] left-[20%] h-[30rem] w-[30rem] bg-brand-200/40" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft border-b border-slate-200/60 dark:bg-slate-950/70 dark:border-slate-800/70"
            : "bg-white/40 backdrop-blur-md border-b border-transparent dark:bg-slate-950/30"
        }`}
      >
        <div className="container-tight flex items-center justify-between py-4">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 text-white shadow-glow">
              <span className="font-display text-lg font-bold">හු</span>
              <span className="absolute inset-0 rounded-2xl ring-1 ring-white/40" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Huruwa
              </span>
              <span className="font-sinhala text-[11px] font-medium text-slate-500 dark:text-slate-400">
                හුරුව
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              className="theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.svg
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            <a href="#contact" className="hidden md:inline-flex btn-primary !px-5 !py-2.5">
              Get in touch
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90"
            >
              <div className="container-tight flex flex-col gap-2 py-4">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-brand-500/10 dark:hover:text-brand-200"
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 !w-full">
                  Get in touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <motion.section
        id="home"
        className="relative isolate pt-32 pb-24 md:pt-40 md:pb-32"
        initial="hidden"
        animate="show"
        variants={staggerParent}
      >
        <div aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fade noise" />

        <div className="container-tight relative">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7 space-y-8">
              <motion.div variants={heroChild} className="section-eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                AI · IoT · Adaptive Speech Therapy
              </motion.div>

              <motion.h1
                variants={heroChild}
                className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-slate-200 md:text-7xl"
              >
                Helping every child{" "}
                <span className="gradient-heading">find their voice.</span>
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                <span className="font-display font-semibold text-slate-900 dark:text-slate-200">Huruwa</span>{" "}
                <span className="font-sinhala text-slate-700 dark:text-slate-200">(හුරුව)</span> is an
                AI–IoT speech therapy system for Sinhala-speaking children with
                speech sound disorders — combining phoneme-level analysis,
                adaptive therapy generation, and a RAG-based parent assistant.
              </motion.p>

              <motion.div variants={heroChild} className="flex flex-wrap items-center gap-4">
                <a href="#introduction" className="btn-primary">
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </a>
                <a href="#scope" className="btn-secondary">
                  Project scope
                </a>
              </motion.div>

              <motion.div
                variants={heroChild}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                {heroStats.map((s) => (
                  <span key={s.label} className="stat-pill">
                    <span className="font-display text-sm font-bold text-brand-700">
                      {s.value}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">· {s.label}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={heroChild}
              className="md:col-span-5"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
                <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-500/30 via-brand-300/20 to-accent-300/30 blur-2xl" />
                <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border border-white/40 bg-white/40 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/30">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFish}
                      src={fishImages[currentFish].src}
                      alt={`Showcase ${currentFish + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>

                <motion.div
                  className="absolute -left-6 bottom-12 hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 sm:flex sm:items-center sm:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M5 8a7 7 0 1014 0" /></svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Live phoneme</span>
                    <span className="font-display text-sm font-bold text-slate-900 dark:text-slate-200">
                      /sa/ → 96% match
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-6 top-10 hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 sm:block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Therapy session active
                  </div>
                  <div className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-slate-200">
                    Story · සතුන්ගේ ලෝකය
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* INTRODUCTION */}
      <motion.section
        id="introduction"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Introduction</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              An adaptive companion for{" "}
              <span className="gradient-heading">early speech development</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Many Sinhala-speaking children with Speech Sound Disorders (SSD)
              face limited access to engaging, scalable speech therapy. Huruwa
              brings AI, IoT and child-specific speech analysis together to
              close that gap.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="feature-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v22M5 8a7 7 0 1014 0" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                The Challenge
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Shortages of specialised therapists, lack of low-resource
                language tools, and limited home-based support make early
                intervention difficult.
              </p>
            </div>

            <div className="feature-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-600 dark:bg-accent-500/15 dark:text-accent-300">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                The Opportunity
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Recent advances in AI, IoT and child-specific ASR allow
                personalised, real-time, phoneme-level intervention — at scale.
              </p>
            </div>

            <div className="feature-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11a4 4 0 118 0v2a4 4 0 11-8 0v-2zM3 11a4 4 0 018 0M21 11a4 4 0 00-8 0" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                Our Solution
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900">Huruwa</span>: an
                AI–IoT robotic speech therapy system tailored for Sinhala-speaking
                children — combining a smart toy, an adaptive engine, and parent
                guidance.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900/60 md:p-12">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Four AI components, one experience
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "AI-powered IoT robotic assistant",
                "Knowledge-graph therapy generation",
                "SVM-RBF phoneme detection",
                "RAG-based parent awareness",
              ].map((t, i) => (
                <div
                  key={t}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60"
                >
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* LITERATURE */}
      <motion.section
        id="literature"
        className="relative bg-slate-50/60 py-24 dark:bg-slate-900/40 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Literature Survey</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              What the research tells us
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Significant work has been done in AI, ASR and HCI for therapy.
              Challenges remain in low-resource languages, child-specific
              datasets, and adaptive interaction.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {literature.map((item, i) => (
              <motion.div
                key={item.title}
                className="feature-card"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-8 dark:border-amber-500/20 dark:from-amber-500/10 dark:to-orange-500/5 md:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-200/70 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Current Limitations
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-200">
              Existing systems struggle to recognise children's speech in
              low-resource languages, often lack real-time adaptive feedback,
              and offer limited integration between clinical sessions and home
              practice — leaving therapists, children and caregivers
              disconnected.
            </p>
          </div>
        </div>
      </motion.section>

      {/* RESEARCH GAP */}
      <motion.section
        id="research-gap"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Research Gap</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Where existing systems fall short
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Six gaps in accessible, real-time, personalised speech therapy
              for Sinhala-speaking children that Huruwa is designed to close.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchGaps.map((gap, i) => (
              <motion.div key={gap.title} className="feature-card group" variants={fadeInUp}>
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                    <span className="font-display text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Gap
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {gap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {gap.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OBJECTIVES */}
      <motion.section
        id="objectives"
        className="relative bg-slate-50/60 py-24 dark:bg-slate-900/40 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="section-eyebrow">Objectives</span>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                What Huruwa sets out to achieve
              </h2>
            </div>
            <p className="md:col-span-5 text-lg text-slate-600 dark:text-slate-300">
              A child-specific, real-time, adaptive speech therapy ecosystem
              that connects therapists, caregivers and children with measurable
              outcomes.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900/60 md:p-12">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Main Objective
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  To design and develop Huruwa, an AI–IoT driven speech therapy
                  system that supports early intervention for Sinhala-speaking
                  children with speech sound disorders by integrating
                  phoneme analysis, adaptive therapy generation, interactive
                  learning and parental guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj, i) => (
              <motion.div key={obj.title} className="feature-card" variants={fadeInUp}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                  {i + 1}
                </span>
                <h4 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {obj.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {obj.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* METHODOLOGY */}
      <motion.section
        id="methodology"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Methodology</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              How Huruwa works
            </h2>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Four interlocking AI components — interactive robotic therapy,
              phoneme analysis, personalised generation, and parent guidance —
              orchestrated through a mobile-first platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="feature-card">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Backend Infrastructure
                </h3>
              </div>
              <p className="mt-4 text-slate-600">
                Phoneme-level ASR, an SVM-RBF pronunciation classifier,
                knowledge-graph therapy generation, and a RAG pipeline to turn
                therapist content into contextual parent guidance — all working
                together in real-time.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-600 dark:bg-accent-500/15 dark:text-accent-300">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Mobile Application
                </h3>
              </div>
              <p className="mt-4 text-slate-600">
                The mobile app is the bridge: it captures speech, delivers
                therapy exercises, and surfaces clear progress insights for
                parents — keeping the experience accessible and engaging.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-50/40 p-8 shadow-card dark:border-slate-800 dark:from-slate-900/60 dark:to-brand-500/5 md:p-12">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Core features & implementation
            </h3>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  t: "AI-IoT Interactive Therapy",
                  d: "An IoT smart-toy that engages children through story-driven conversations, adapting in real-time.",
                },
                {
                  t: "Phoneme-Level Analysis",
                  d: "Child-specific ASR with SVM-RBF classification for accurate pronunciation error detection.",
                },
                {
                  t: "Personalised Therapy",
                  d: "Phonology knowledge graphs and rules generate adaptive exercises per child.",
                },
                {
                  t: "Parent Guidance (RAG)",
                  d: "RAG-based assistant turns therapist content + session data into clear parent feedback.",
                },
              ].map((f, i) => (
                <div
                  key={f.t}
                  className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                      {i + 1}
                    </span>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white">
                      {f.t}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SCOPE */}
      <motion.section
        id="scope"
        className="relative bg-slate-50/60 py-24 dark:bg-slate-900/40 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Project Scope</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Three pillars that power the platform
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {scopeCards.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeInUp}
                className="feature-card group"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    {c.icon}
                  </svg>
                </span>
                <span className="absolute right-6 top-6 font-display text-sm font-bold text-slate-300 dark:text-slate-700">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* DOCUMENTS */}
      <motion.section
        id="documents"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Project Documents</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Resources & deliverables
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                Presentations
              </h3>
              <ul className="space-y-3">
                {presentations.map((p) => (
                  <li
                    key={p.label}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-brand-300 hover:shadow-card dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-400"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{p.label}</span>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-all hover:bg-brand-100 dark:bg-brand-500/15 dark:text-brand-200 dark:hover:bg-brand-500/25"
                      >
                        View
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    ) : (
                      <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        Pending
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                Documents
              </h3>
              <ul className="space-y-3">
                {documents.map((d) => (
                  <li
                    key={d.label}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-brand-300 hover:shadow-card dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-400"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{d.label}</span>
                    {d.url ? (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-all hover:bg-brand-100 dark:bg-brand-500/15 dark:text-brand-200 dark:hover:bg-brand-500/25"
                      >
                        View
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg>
                      </a>
                    ) : (
                      <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                        Pending
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* MILESTONES */}
      <motion.section
        id="milestones"
        className="relative bg-slate-50/60 py-24 dark:bg-slate-900/40 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Milestones & Timeline</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              The road to delivery
            </h2>
          </div>

          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-[1.4rem] top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent" />
            <ol className="space-y-7">
              {milestones.map((m, i) => (
                <motion.li key={m.title + i} className="relative pl-16" variants={fadeInUp}>
                  <span className="timeline-dot">{m.tag.split(" ")[0]}</span>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                          {m.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{m.tag}</p>
                      </div>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                        Marks: {m.marks}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{m.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">About Us</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Mission & vision
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div className="feature-card" variants={fadeInUp}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                To enhance early speech development by providing an intelligent,
                accessible and engaging AI platform that supports Sinhala-speaking
                children with speech sound disorders through adaptive therapy,
                real-time feedback and continuous parental involvement.
              </p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-600 dark:bg-accent-500/15 dark:text-accent-300">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                To become a leading innovation in AI-powered speech therapy,
                transforming how children receive language support by combining
                AI, IoT and personalised learning to make therapy accessible to
                every child.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* TEAM */}
      <motion.section
        id="team"
        className="relative bg-slate-50/60 py-24 dark:bg-slate-900/40 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Our Team</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              The people behind Huruwa
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-500 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <h4 className="mt-5 text-center font-display text-lg font-bold text-slate-900 dark:text-white">
                  {m.name}
                </h4>
                <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-brand-600">
                  {m.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="relative py-24 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container-tight">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 space-y-6">
              <span className="section-eyebrow">Contact Us</span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Let's build a voice for every child.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Have questions about Huruwa, want to collaborate or just say
                hello? We'd love to hear from you.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  harshana.aberathne@gmail.com
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  +94 77 951 6084
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  67/2, Gamunupura 1st Lane, Kaduwela, Sri Lanka
                </div>
              </div>
            </div>

            <form className="md:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900/60 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Name
                  </label>
                  <input id="name" type="text" placeholder="Your name" className="input-modern" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="you@example.com" className="input-modern" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Subject
                </label>
                <input id="subject" type="text" placeholder="What's this about?" className="input-modern" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Message
                </label>
                <textarea id="message" rows={5} placeholder="Tell us a bit more..." className="input-modern resize-none" />
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Send message
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="relative border-t border-slate-800 bg-[#070912] py-16 text-slate-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div aria-hidden className="absolute inset-0 -z-0 opacity-50">
          <div className="absolute -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-brand-700/30 blur-3xl" />
        </div>
        <div className="container-tight relative">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 text-white shadow-glow">
                  <span className="font-display text-lg font-bold">හු</span>
                </span>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-lg font-bold text-white">
                    Huruwa
                  </span>
                  <span className="font-sinhala text-xs font-medium text-slate-400">
                    හුරුව
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                An AI–IoT robotic system for adaptive speech therapy and
                parental support — built for Sinhala-speaking children with
                speech sound disorders.
              </p>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="text-slate-400 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
                Contact
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                <li>harshana.aberathne@gmail.com</li>
                <li>+94 77 951 6084</li>
                <li>Kaduwela, Sri Lanka</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
            <p>&copy; {new Date().getFullYear()} Huruwa (හුරුව). All rights reserved.</p>
            <p>Crafted with care for early speech intervention.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
