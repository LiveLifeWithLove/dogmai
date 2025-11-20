"use client";

import React, { useState } from "react";
import DomainTab from "./components/DomainTab";
import LearnTab from "./components/LearnTab";
import MasteryTab from "./components/MasteryTab";
import MissionsTab from "./components/MissionsTab";
import OverviewTab from "./components/OverviewTab";
import PortfolioTab from "./components/PortfolioTab";
import { domainTracks, DomainKey } from "./domain-tracks";

// =====================================================
// DOGM.AI - BUILDER OS DASHBOARD (COMBINED EDITION)
// Combines: Day 1 Mission-Control, Fundamentals, Domains,
// Mastery HQ, Missions - in one coherent LMS experience.
// =====================================================

const loopStages = [
  "Discipline",
  "Outcomes",
  "Growth",
  "Mastery",
  "Acceleration",
  "Intelligence",
];

const stats = [
  { label: "Day 1 Sprint", value: "0 / 4 tasks", hint: "Discipline" },
  { label: "Fundamentals", value: "0% complete", hint: "Foundations" },
  { label: "AI Co-Pilot Sessions", value: "0 today", hint: "Acceleration" },
  { label: "Track", value: "Mission-Control Builder", hint: "Domain" },
];

const fundamentals = [
  {
    category: "Version Control",
    items: ["Git Basics", "Branching", "Merge Requests", "Repo Management"],
  },
  {
    category: "Frontend Foundations",
    items: ["HTML Structure", "CSS Layout", "JavaScript Basics", "Components"],
  },
  {
    category: "Backend Foundations",
    items: ["APIs 101", "REST & JSON", "Database Basics", "Auth Systems"],
  },
];

const dailyStudy = [
  "Learn Git basics (15 min)",
  "Study HTML tags & semantics (20 min)",
  "Watch JavaScript intro (10 min)",
  "Read API fundamentals (10 min)",
];

const masteryPaths = [
  { label: "Frontend Mastery", desc: "React, Next.js, UI systems, Tailwind" },
  { label: "Backend Mastery", desc: "APIs, Auth, DB logic, workflows" },
  { label: "AI Systems Mastery", desc: "Copilots, automations, prompt flows" },
  { label: "Deployment Mastery", desc: "Telemetry, monitoring, staging" },
];

const missionObjectives = [
  {
    title: "Day 1 Launch",
    items: ["Set up repo", "Install dependencies", "Create base layout", "Run first build"],
  },
  {
    title: "AI Readiness",
    items: ["Connect AI copilot", "Run first AI-assisted task plan", "Review AI suggestions"],
  },
  {
    title: "Week 1 Goal",
    items: ["Ship UI foundation", "Deploy a staging link", "Submit progress demo"],
  },
];

const weeklyOutcomes = [
  {
    week: 1,
    title: "Mission-Control Base App",
    type: "Foundation Sprint",
    status: "In Progress",
    impact: "Scaffold a Next.js + Tailwind shell for mission-control layouts.",
  },
  {
    week: 2,
    title: "Telemetry + AI Readiness",
    type: "Base Instrumentation",
    status: "Locked",
    impact: "Auth, basic logging, and AI readiness checks for PH agencies.",
  },
  {
    week: 3,
    title: "LGU Rapid Response Dashboard",
    type: "Mission-Control Feature",
    status: "Upcoming",
    impact: "Real-time incidents, geo-mapping, AI situation briefs.",
  },
];

const sprintTasks = [
  {
    label: "Complete AI Readiness Assessment",
    type: "Diagnostic",
    done: false,
  },
  {
    label: "Watch Day 1 Orientation for Mission-Control Builders",
    type: "Orientation",
    done: false,
  },
  {
    label: "Run AI-assisted stack planner for your base app",
    type: "AI Planning",
    done: false,
  },
  {
    label: "Scaffold mission shell in Next.js + Tailwind",
    type: "Build",
    done: false,
  },
];

const DogmCombinedDashboard: React.FC = () => {
  const [tab, setTab] = useState<
    "overview" | "learn" | "domain" | "mastery" | "missions" | "portfolio"
  >("overview");
  const [domain, setDomain] = useState<DomainKey>("mission-control");

  const activeDomain = domainTracks[domain];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-16">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              DOGM.AI LMS - Builder OS
            </div>
            <div className="text-sm font-semibold text-slate-50">
              Mission-Control Builder - Cohort Dashboard
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right text-[11px] text-slate-400 md:block">
              <div>Next Live: Day 1 Orientation</div>
              <div>Today - 7:00 PM (PH)</div>
            </div>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-sky-500/30">
              Start Today's Sprint
            </button>
          </div>
        </div>

        {/* NAV TABS */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-3 text-[11px] border-b border-slate-800">
            {[
              { id: "overview", label: "Overview" },
              { id: "learn", label: "Learn" },
              { id: "domain", label: "Domain" },
              { id: "mastery", label: "Mastery" },
              { id: "missions", label: "Missions" },
              { id: "portfolio", label: "Portfolio" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`px-4 py-2 -mb-px border-b-2 transition ${
                  tab === t.id
                    ? "border-emerald-400 text-emerald-300"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-6 space-y-6">
        {tab === "overview" && (
          <OverviewTab
            stats={stats}
            loopStages={loopStages}
            weeklyOutcomes={weeklyOutcomes}
            activeDomain={activeDomain}
          />
        )}

        {tab === "learn" && <LearnTab dailyStudy={dailyStudy} fundamentals={fundamentals} />}

        {tab === "domain" && (
          <DomainTab
            domainTracks={domainTracks}
            domain={domain}
            setDomain={setDomain}
            activeDomain={activeDomain}
          />
        )}

        {tab === "mastery" && <MasteryTab masteryPaths={masteryPaths} />}

        {tab === "missions" && (
          <MissionsTab missionObjectives={missionObjectives} sprintTasks={sprintTasks} />
        )}

        {tab === "portfolio" && <PortfolioTab />}
      </main>
    </div>
  );
};

export default DogmCombinedDashboard;

