---
trigger: always_on
---

# Architecture

We are building a Frontend Next.js app using clean architecture

- ***Application***: contains use cases and business rules.
- ***Domain***: contains entities and business rules, repository interfaces, must not depend on any other layer.
- ***Infrastructure***: contains concrete implementations of repositories, depends on Domain.
- ***Presentation***: contains UI components and hooks, depends on Application.

---

## Technology Stack

- **Runtime**: Bun v1.3 
- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui + lucide-react v0.5
- **Data Fetching**: Tanstack React Query v5 + Axios v1
- **Auth**: Clerk v6
- **Validation**: Zod v4
- **Hosting / Deployment**: Vercel
