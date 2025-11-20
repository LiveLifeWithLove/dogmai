import React from "react";

type MissionObjective = { title: string; items: string[] };
type SprintTask = { label: string; type: string; done: boolean };

type MissionsTabProps = {
  missionObjectives: MissionObjective[];
  sprintTasks: SprintTask[];
};

const MissionsTab: React.FC<MissionsTabProps> = ({ missionObjectives, sprintTasks }) => (
  <section className="grid gap-6 lg:grid-cols-[1.6fr,1.4fr]">
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Day 1 Missions</h2>
        <p className="text-[11px] text-slate-400 mb-3">Clear objectives you can complete today. Each checkbox is a real step toward your mission-control base app.</p>
        <div className="grid gap-3 md:grid-cols-2">
          {missionObjectives.map((m) => (
            <div key={m.title} className="rounded-xl border border-slate-800 bg-slate-950 p-3">
              <div className="text-xs font-semibold text-slate-50 mb-1">{m.title}</div>
              <div className="space-y-1">
                {m.items.map((i) => (
                  <label key={i} className="flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer">
                    <input type="checkbox" className="h-3 w-3" />
                    <span>{i}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Sprint Board - Foundation</h2>
        <div className="space-y-2">
          {sprintTasks.map((task) => (
            <label key={task.label} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3 cursor-pointer hover:border-slate-600">
              <input type="checkbox" className="mt-1 h-3 w-3" />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-100">{task.label}</span>
                  <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">{task.type}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>

    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Day 1 Rhythm</h2>
        <div className="space-y-2 text-[11px] text-slate-300">
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-2.5">
            <div>
              <div className="font-semibold">Orientation - Mission-Control Builder</div>
              <div className="text-slate-400">Meet the team, loop, and cohort.</div>
            </div>
            <div className="text-right text-slate-400">
              <div>Today - 7:00 PM</div>
              <button className="mt-1 rounded-full border border-slate-700 px-2 py-0.5 text-[10px] hover:border-slate-500">Join Live</button>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-2.5">
            <div>
              <div className="font-semibold">AI Readiness Lab</div>
              <div className="text-slate-400">Work through the diagnostic sprint.</div>
            </div>
            <div className="text-right text-slate-400">
              <div>Async - 60-90 min</div>
              <button className="mt-1 rounded-full border border-slate-700 px-2 py-0.5 text-[10px] hover:border-slate-500">Start Lab</button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-2.5">
            <div className="font-semibold text-slate-50">End-of-Day Reflection - Builder Signal</div>
            <p className="mt-1 text-slate-400">Log what you shipped, what blocked you, and how AI helped. This feeds your Growth & Mastery dashboards.</p>
          </div>
        </div>
      </div>
    </aside>
  </section>
);

export default MissionsTab;
