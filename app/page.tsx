"use client"
import styles from "./root.module.css"
import Image from "next/image"
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Github,
  Linkedin,
  Mail,
  Moon,
  Rss,
  Sun,
  Briefcase,
  Award,
} from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { useTheme } from "next-themes"
import ProjectCard from "@/components/projectCard/projectCard"
import type { BlogType, ProjectType } from "@/lib/types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import DefaultBlogCard from "@/components/blogs/blogCards"
import Link from "next/link"
import { useState, useEffect } from "react"
import cn from "classnames"
import GitHubContributions from "@/components/github-contributions"
import ExperienceSection from "@/components/experience-section"

export default function RotPage() {
  const projectsList: ProjectType[] = [
    {
      name: "Lane Bridge Deadlock Prevention",
      imageUrl: "/projects_images/deadlock-in-os-thumbnail.webp",
      description: "A C implementation of deadlock prevention algorithm for the classic Lane Bridge problem in Operating Systems. Demonstrates synchronization techniques using semaphores to prevent deadlocks in concurrent processes accessing shared resources.",
      liveLink: "https://github.com/alimirzaee001/lane_bridge_deadlock_prevention",
      work: "Solo Work",
      status: "Active",
      techStack: ["C"],
    },
    {
      name: "CPU Scheduling Algorithms",
      imageUrl: "/projects_images/cpu-scheduling-in-os.webp",
      description: "A comprehensive implementation of various CPU scheduling algorithms in C, including FCFS, SJF, Round Robin, and Priority Scheduling. Includes performance analysis and comparison of different scheduling strategies in Operating Systems.",
      liveLink: "https://github.com/alimirzaee001/CPU_scheduling_algorithms",
      work: "Solo Work",
      status: "Active",
      techStack: ["C"],
    },
    {
      name: "My-Shetab",
      imageUrl: "/projects_images/shetab_logo.png",
      description: "A minimal web-based food reservation system with Telegram notifications and Persian calendar support.",
      liveLink: "https://github.com/alimirzaee001/My-Shetab",
      work: "Solo Work",
      status: "Active",
      techStack: ["JavaScript", "HTML", "CSS"],
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3))
  const [showMoreProject, setShowMoreProject] = useState("less")

  const techStack1 = [
    {
      name: "PyTorch",
      iconUrl: "https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white&style=for-the-badge",
    },
    {
      name: "CUDA",
      iconUrl: "https://img.shields.io/badge/CUDA-76B900?logo=nvidia&logoColor=white&style=for-the-badge",
    },
    {
      name: "Pandas",
      iconUrl: "https://img.shields.io/badge/pandas-150458?logo=pandas&logoColor=white&style=for-the-badge",
    },
    {
      name: "NumPy",
      iconUrl: "https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white&style=for-the-badge",
    },
    {
      name: "Docker",
      iconUrl: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge",
    },
    {
      name: "Python",
      iconUrl: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge",
    },
  ]
  const techStack2 = [
    {
      name: "C++",
      iconUrl: "https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white&style=for-the-badge",
    },
    {
      name: "C#",
      iconUrl: "https://img.shields.io/badge/C Sharp-239120?logo=csharp&logoColor=white&style=for-the-badge",
    },
    {
      name: "Unity",
      iconUrl: "https://img.shields.io/badge/Unity-FFFFFF?logo=unity&logoColor=black&style=for-the-badge",
    },
    {
      name: "Git",
      iconUrl: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge",
    },
    {
      name: "Go",
      iconUrl: "https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=for-the-badge",
    },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140)
  })

  const [displayTab, setDisplayTab] = useState("info")



  return (
    <div className={styles.main}>
      <div
        className={cn(
          "z-[-1]",
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "[opacity:0.25]",
          "transition-colors duration-400",
        )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bgColor)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[var(--bgColor)] transition-colors duration-400"></div>

      <div className={styles.detailsHolder}>
        <div className={styles.heroSection}>
          <motion.div
            style={{
              transition: "all 0.1s ease",
              zIndex: 10,
              maxWidth: 650,
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
            }}
            animate={isScrolled ? "scrolled" : "normal"}
            variants={{
              normal: { position: "static" },
              scrolled: { top: 0, position: "fixed", height: 60, backdropFilter: "blur(10px)" },
            }}
          >
            <motion.div className="relative h-[100%] w-[100%] flex items-center justify-end px-[15px]">
              <motion.img
                src="/profile-image.jpg"
                alt="Profile photo of Ali Mirzaee"
                initial={{ height: 200, width: 200, borderRadius: 9999, margin: "0px auto", position: "static" }}
                animate={isScrolled ? "scrolled" : "normal"}
                variants={{
                  normal: { height: 200, width: 200, borderRadius: 9999 },
                  scrolled: { height: 40, width: 40, borderRadius: 9999, position: "absolute", top: 10, left: 10 },
                }}
                whileHover={{ boxShadow: "0 0 30px 2px rgba(255, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ objectFit: "cover", transition: "box-shadow 0.1s" }}
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-[2px]">
            <h1 className="font-mono font-semibold leading-10 text-3xl">Ali Mirzaee</h1>
            <p className={styles.SWEpara}>ML Engineer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://github.com/alimirzaee001" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>

            <Link href="mailto:alimirzaee@aut.ac.ir" target="_blank">
              <div className={styles.socialsItem}>
                <Mail size={15} color="white" />
                <p>Mail</p>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/ali-mirzaee-6948b2211/" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
              </div>
            </Link>

            <button
              type="button"
              className={styles.socialsItem}
              onClick={() => setCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
            >
              {mounted && (currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />)}
              <p>Theme</p>
            </button>
          </div>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl">📍Tehran, Iran</p>
        </div>

        <div className={styles.tabsHolder}>
          <div
            className={`${styles.tabItem} ${displayTab == "info" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("info")
            }}
          >
            Info
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "experience" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("experience")
            }}
          >
            Experience
            <div className={styles.hoverThing} />
          </div>
        </div>

        {displayTab == "info" && (
          <>
            <div className={styles.projectsSection}>
              {/* Move GitHub contributions above the heading as requested */}
              <GitHubContributions username="alimirzaee001" />

              <h1 className="font-mono font-semibold underline leading-10 text-3xl">Projects</h1>

              <div className={styles.projectsHolder}>
                {projectDisplayList.map((project, index) => (
                  <div key={index} className="flex flex-col gap-[10px]">
                    <ProjectCard projectDetails={project} />
                    {index < projectDisplayList.length - 1 && (
                      <div className="bg-[var(--fgColor)] w-[90%] opacity-[0.4] font-semibold h-0.5 mx-6 my-0"></div>
                    )}
                  </div>
                ))}
                <div
                  onClick={() => {
                    if (showMoreProject == "less") {
                      setProjectDisplayList(projectsList)
                      setShowMoreProject("more")
                    } else {
                      setProjectDisplayList(projectsList.slice(0, 3))
                      setShowMoreProject("less")
                    }
                  }}
                  className={styles.showMore}
                >
                  {showMoreProject == "less" && (
                    <>
                      Show More <ChevronRight size={20} />
                    </>
                  )}
                  {showMoreProject == "more" && (
                    <>
                      <ChevronLeft size={20} />
                      Show less
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <h1 className="font-mono font-semibold text-4xl">My Tech-Stack</h1>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:35s]">
                  {techStack1.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={40} width={120} unoptimized />
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                  {techStack2.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={40} width={120} unoptimized />
                    </div>
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
              </div>
            </div>
          </>
        )}

        {displayTab == "experience" && (
          <>
            <div className="mt-[30px] w-full mx-auto max-w-[1100px] px-4 sm:px-6">
              <ExperienceSection />
            </div>
          </>
        )}



        <div className={styles.pageFooter}>
          <Link href="/resume">
            <p className={`flex items-center gap-[5px] underline font-mono font-bold text-2xl leading-[0.55rem] ${styles.resumeBtn}`}>
              Resume <ArrowUpRight className="w-auto h-[26px]" size={16} />
            </p>
          </Link>
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Ali Mirzaee | Last Updated: October 3, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}
