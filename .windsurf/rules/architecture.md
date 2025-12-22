---
trigger: always_on
---

# Architecture

We are building a Frontend Next.js app, backend is a separate API.
Architecture: Clean Architecture.

- Application layer contains use cases and business rules.
- Domain layer contains entities and repository interfaces, must not depend on any other layer.
- Infrastructure layer contains concrete implementations of repositories, depends on Domain.
- Presentation layer contains UI components and hooks, depends on Application.

# Folder structure:

app/
  - (auth)/
  - (pages)/
    - pageName/
      - components/
      - page.tsx
    - globals.css
    - layout.tsx
    - page.tsx
modules/
  user/
    - application/
    - domain/
    - infrastructure/
    - presentation/
      - components/
      - hooks/
  otherModule/
shared/
  - infrastructure/
  - presentation/
    - components/
    - hooks/
    - lib/
public/
.env
proxy.ts