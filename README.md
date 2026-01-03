
# Flowstate — Burnout-aware planning

Flowstate is a burnout-aware planning system designed to help people plan realistically, protect their energy, and complete work with consistent quality — without burning out.

This README maps to the website pages in the project and provides the project evidence required by Launchpad staff.

## Quick links

- App name: Flowstate
- Who benefits most: students and young professionals who struggle with time and energy estimation, overcommitment, and inconsistent productivity.
- Live app (main feature): /product or open the app locally at `http://localhost:3000` after starting the dev server.

Navigation (site pages)

- Home (/)
- About (/about)
- Why Flowstate? (/why)
- Features (/features)
- Product (/product)
- Rubric Evidence (/rubric)
- Reflection (/reflection)

---

## Page 1 — Home

What Flowstate is and how it helps

Flowstate combines a short daily check-in, capacity-aware planning rules, and focused work sessions to produce realistic daily plans. Instead of asking you to estimate large, vague blocks of work, it emphasizes:

- Quick daily check-ins (minutes, energy, stress) to calculate realistic capacity.
- A capacity gate to prevent scheduling more work than you can reasonably do.
- Recovery mode for low-energy or high-stress days that automatically reduces expectations.
- Next-action enforcement so tasks are actionable and schedulable.
- Focus blocks tied to tasks to record real time and keep estimates honest.
- An AI Task Shaper that suggests next actions, an estimate, energy cost, a Definition of Done, and an MVPr (minimum viable product) for tasks.

Why it helps: users get plans that match real-life energy and time, which reduces overcommitment, procrastination, and burnout while improving output quality.

---

## Page 2 — About (Problem overview)  — CCC.1.1 evidence

What the problem is (in plain words)

Many people (especially students and early-career workers) cannot accurately estimate how long tasks will take or how much energy they require. As a result they overcommit, then procrastinate or rush, producing lower-quality work and increasing stress.

How this problem shows up in real life

- Missing deadlines after promising more than is possible.
- Filling a day with low-value tasks and still feeling behind because energy dips in the afternoon.
- Starting a large ambiguous task (“work on project”) with no clear next step and stalling for hours.

Constraints that make this hard to solve

- Time: daily life and school schedules are tight.
- Skills: many people lack structured planning techniques and realistic estimating practice.
- Tech/resources: simple tools often encourage optimistic planning rather than realistic capacity-based planning.

Consequences if not solved

- Chronic stress and burnout, missed learning opportunities, lower grades or poor work performance.

Example (realistic)

“I scheduled three research tasks and two coding sessions for a Saturday, estimating 3 hours each. By 2pm I was exhausted; only one was completed well and the others were hurried. I felt guilty and burned out for days.”

One existing solution and evaluation

- Example: standard to-do list apps (Todoist, Google Tasks) let you track and schedule tasks but don't enforce capacity or energy-aware planning. What worked: task capture and reminders. What didn't: they still allow overcommitment and lack energy-aware guidance.

---

## Page 3 — Why Flowstate? (Plan & solution) — CCC.1.2 evidence

Solution idea

Build a lightweight daily-first planner that requires a short check-in, enforces a capacity gate, and uses AI to shape tasks into schedulable actions. The app will favor short, testable focus blocks over vague long sessions.

Feature list (overview)

- Capacity gate and buffer calculations
- Recovery mode adjustments
- Next Action enforcement
- Focus block timer with logging
- AI Task Shaper (3d Otter Or Turtle)
- Mid-day replan 

Challenges and mitigation

- Collecting accurate user input: mitigate by keeping the check-in short and nudging users to be conservative.
- AI hallucination / incorrect suggestions: show suggestions as editable drafts and require user confirmation.
- Edge cases (multi-day tasks): allow multi-part tasks and track partial progress.

Project plan summary

- Sprint 1: Basic app shell, UI for daily check-in, simple Task model (2 weeks)
- Sprint 2: Capacity gate, task scheduling, focus block timer (2 weeks)
- Sprint 3: Prisma persistence, seed data, simple AI Task Shaper integration (2–3 weeks)
- Sprint 4: polish, rubric evidence wiring, deployment prep (2 weeks)

Link to tasks/sprints: (add project board link here)

---

## Page 4 — Features (CCC.1.3 evidence)

Core features (what users interact with)

- Daily check-in form
- Task creation with Next Action field required
- Capacity-aware scheduler (prevents overscheduling)
- Focus block timer (start/stop + real time log)
- AI Task Shaper suggestions for next action, estimate, energy cost

Why choose Flowstate over others

- Built specifically around energy-aware planning and recovery, not just time tracking.
- Enforces planning constraints (capacity gate) so users can't overcommit.
- Tight integration between planning and actual time tracking (focus blocks) keeps estimates honest.

How AI helps

- AI Task Shaper turns vague tasks into actionable next steps, provides conservative estimates, and suggests a Definition of Done and an MVPr so users can start smaller and iterate.

---

## Page 5 — Product (MVP)

Core product interactions

- Input: Create / edit tasks (title, nextAction required, estimateMin, energyCost).
- Interaction: Start a focus block tied to a task and stop to record real time.
- Output: A scheduled plan for the day (tasks that fit within capacity), logged focus sessions, and a saved list of completed tasks.

Example outputs

- A saved schedule for today (task list with start times and durations).
- A progress summary showing time spent vs estimate for each task.

---

## Page 6 — Rubric Evidence Page (RBA for Launchpad staff)

Instructor access (temporary test credentials)

- rob@launchpadphilly.org -> lpuser1
- sanaa@launchpadphilly.org -> lpuser2
- taheera@launchpadphilly.org -> lpuser3

CCC mapping (where to find evidence)

- CCC.1.1 (Problem understanding): shown on the About page + README section "Page 2 — About (Problem overview)"
- CCC.1.2 (Solution & plan): shown on the Why Flowstate? page + README section "Page 3 — Why Flowstate?"
- CCC.1.3 (Core feature implementation): shown on the Features and Product pages + README sections "Page 4 — Features" and "Page 5 — Product"

Links / quick-jump buttons

- Home: `/` (README: Page 1)
- About: `/about` (README: Page 2)
- Why Flowstate?: `/why` (README: Page 3)
- Features: `/features` (README: Page 4)
- Product: `/product` (README: Page 5)
- Rubric: `/rubric` (README: Page 6)
- Reflection: `/reflection` (README: Page 7)

If you are a Launchpad staff member, use the instructor credentials above to login to the app and inspect the listed pages. (Replace with production-safe instructor accounts before public deployment.)

---

## Page 7 — Reflection

What went well

- Built a minimal Next.js app scaffold and Prisma schema to store tasks and sessions.
- Defined core features and an MVP focused on energy-aware planning.

What didn’t go well

- Need to integrate Tailwind and Prisma client generation locally to fully validate styles and DB.

What I changed during the project and why

- Added a concise README structure to map project requirements to site pages and evidence for Launchpad staff.

What I’d build next given more time

- Full UI for daily check-in, scheduling and focus blocks.
- AI Task Shaper integration with user-editable suggestions.
- Authentication and role-based instructor accounts for rubric review.

---

## How to run locally

Install dependencies and run the dev server:

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

Open http://localhost:3000 to see the app.

---

If you want, I can also create the basic page files for `/about`, `/why`, `/features`, `/product`, `/rubric`, and `/reflection` and wire navigation — tell me and I'll add them now.
