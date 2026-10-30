Personal Dashboard Project Brief

Purpose
Build a personal dashboard for organizing tasks and projects, recording time spent, and sharing selected progress summaries as a public portfolio. The project is also a guided learning exercise for React, Next.js, Python, Django REST Framework, PostgreSQL, Git, and deployment.

First-version users and access
- The owner signs in to create and manage dashboard content.
- The owner has an admin view with create, edit, archive, and filtering capabilities.
- Visitors can read shared summaries without signing in.
- New tasks, projects, time logs, and updates are private by default. The owner explicitly chooses what appears in the public view.
- Public visitors have read-only access. Public signup is not part of the first version, and a visitor cannot gain admin access by registering.

FIRST-VERSION FEATURES

Tasks and projects
- Create, edit, and archive tasks and projects.
- A project can contain tasks; a task can also stand alone.
- Each task or project can have an optional description, zero or more tags, an optional start date, an optional deadline, and a status.
- Initial statuses: Queue, Brainstorming, In Progress, On Hold, and Done.

Time tracking
- Add dated time logs to a task or directly to a project.
- Record hours already spent by entering a time log with the appropriate date.
- Show a task's logged total and a project's total. A project total includes time logged directly to the project and time logged to its tasks, counted once.
- Logged hours represent time spent; they do not imply a percent-complete value.

Finding and summarizing work
- Search by task or project name.
- Filter by status, tags, start date, and deadline.
- Show deadline context such as days remaining, due soon, overdue, or no deadline.
- Provide read-only summaries for explicitly shared tasks and projects.

Technology direction
- Frontend: React, Next.js, and TypeScript.
- Backend API: Python, Django, and Django REST Framework.
- Database: PostgreSQL, accessed through Django's ORM.
- Version control: Git and GitHub.
- Deployment target: Vercel, with the final frontend/backend deployment arrangement confirmed during the deployment step.

The frontend and backend will have clear boundaries so the Next.js app communicates with Django through REST API endpoints. The folder organization will use an MVVM-inspired approach that fits Next.js conventions and will be explained as we build it.

Code documentation convention
- Add a brief one- or two-line overview comment at the top of each source file describing its responsibility.
- Document functions with concise Python docstrings or TypeScript JSDoc comments, including purpose and relevant inputs or return values.
- Keep comments accurate, useful, and updated when behavior changes.

Later versions
- GitHub API integration to import existing repositories and project metadata, reducing manual entry. The first version will support manually created tasks and projects.
- A mobile-friendly Progressive Web App (PWA); consider a separate native mobile app only if needed later.
- Optional custom statuses, viewer accounts, or additional reporting after the core dashboard is useful.

First-version completion criteria
- The owner can sign in and manage tasks, projects, tags, statuses, dates, and time logs.
- The owner can find work using the agreed search and filters and can see deadline indicators and time totals.
- Visitors can view summaries without signing in, and only content explicitly selected for sharing is exposed.
- The app is usable on desktop and mobile-sized screens and can be deployed from the GitHub repository.