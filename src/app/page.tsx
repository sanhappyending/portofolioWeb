"use client";

import { ArrowRight, ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import SmoothScrollHero from "@/components/hero/smooth-scroll-hero";
import { Reveal } from "@/components/motion/reveal";
import {
  Gallery4,
  type Gallery4Item,
} from "@/components/sections/projects-section";
import { Button } from "@/components/ui/button";

const skills = [
  "Python",
  "Machine Learning",
  "Data Analysis",
  "Data Visualization",
  "Exploratory Data Analysis",
  "Data Wrangling",
  "Data Cleaning",
  "ETL",
  "Workflow Automation",
  "Web Scraping",
  "Statistical Data Analysis",
  "Probability Theory",
  "A/B Testing",
  "Streamlit",
];

const projects: Gallery4Item[] = [
  {
    id: "skillMatch.AI-dashboard",
    title: "SkillMatch.AI Dashboard",
    description:
      "Interactive Streamlit dashboard for exploring job market trends, skill demand analysis, and AI-based career insights using job vacancy datasets.",
    href: "https://giga-bikesharing.streamlit.app/",
    image: "/images/skillMatch.AI-dashboard.jpg",
    cta: "View project",
  },
  {
    id: "bikeSharing-dashboard",
    title: "Bike Sharing Dashboard",
    description:
      "Interactive Bike Sharing dashboard with data visualization, weather analysis, and rental trend insights using Python and Streamlit.",
    href: "https://giga-bikesharing.streamlit.app/",
    image: "/images/bikeSharing-dashboard.jpg",
    cta: "View project",
  },
];

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <SmoothScrollHero
        scrollHeight={620}
        desktopImage="/images/bg-web.png"
        mobileImage="/images/bg-mobile.png"
        initialClipPercentage={16}
        finalClipPercentage={84}
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-black/[0.42] px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.26)_48%,rgba(0,0,0,0.82)_100%)]" />
          <motion.div
            className="absolute left-[8%] top-[18%] size-56 rounded-full bg-primary/30 blur-3xl md:size-80"
            animate={{ y: [0, -18, 0], opacity: [0.55, 0.85, 0.55] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[14%] right-[10%] size-60 rounded-full bg-accent/[0.22] blur-3xl md:size-96"
            animate={{ y: [0, 22, 0], opacity: [0.45, 0.75, 0.45] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
          >
            <div className="mb-6 rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm text-white/[0.72] backdrop-blur-xl">
              Portfolio 2026
            </div>
            <h1 className="text-balance text-6xl font-semibold leading-[0.92] text-white md:text-8xl lg:text-9xl">
              Giga Syahbani
            </h1>
            <p className="mt-6 text-xl font-medium text-white/[0.88] md:text-2xl">
              Mechatronics Student & Data Science Enthusiast
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.68] md:text-lg">
              Passionate about Artificial Intelligence, Machine Learning, and
              modern digital systems. I build data-driven solutions, automation
              projects, and interactive experiences that combine engineering
              with technology.
            </p>
            <div className="pointer-events-auto mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#about">
                  About Me <ArrowRight />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <Reveal className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-medium uppercase text-accent">
              About Me
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
              Turning data, AI, and engineering ideas into impactful solutions.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">
              I am an undergraduate Mechatronics Engineering student at
              Universitas Tidar with a strong passion for Data Science,
              Artificial Intelligence, and Machine Learning. Currently, I am
              participating in Coding Camp powered by DBS Foundation as a Data
              Scientist Cohort to strengthen my analytical and technical skills.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-white/[0.58]">
              My experience includes projects related to data analysis, AI-based
              applications, and digital product development. I also actively
              contribute as a Programming Practicum Assistant and Media Creative
              Staff, combining technical problem-solving with creativity and
              teamwork.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">Core Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.1] bg-white/[0.06] px-4 py-2 text-sm text-white/[0.76] transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gasahbani",
      href: "https://www.linkedin.com/in/gasahbani/",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      value: "@gasahbani",
      href: "https://www.instagram.com/gasahbani/",
      icon: Instagram,
    },
  ];

  return (
    <section className="pb-24 pt-6 md:pb-32">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.1] bg-white/[0.05] p-6 shadow-premium backdrop-blur-xl md:p-8">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Let us connect
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">
                Reach me on LinkedIn for professional work or Instagram for
                design updates and quick conversations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.1] bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/[0.08] hover:shadow-glow"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.08] text-accent">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-white">
                          {social.label}
                        </span>
                        <span className="block truncate text-sm text-white/[0.58]">
                          {social.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-white/[0.42] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <section id="projects" className="relative">
        <Reveal>
          <Gallery4
            title="Featured Projects"
            description="Projects focused on Data Science, Machine Learning, data visualization, and intelligent digital solutions built with Python and modern technologies."
            items={projects}
          />
        </Reveal>
      </section>
      <SocialSection />
    </main>
  );
}
