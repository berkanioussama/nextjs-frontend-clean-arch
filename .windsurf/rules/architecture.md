---
trigger: always_on
---

# Architecture

We are building a Frontend Next.js app
Architecture: Clean Architecture
backend is separate API

# Folder structure:

app/
  - (auth)/
  - (pages)/
    - profile/
      - edit/
        - page.tsx
      - components/
      - page.tsx
    - globals.css
    - layout.tsx
    - page.tsx
modules/
  user/
    - application/
        - edit-user.uc.ts
        - find-user-by-id.uc.ts
    - domain/
      - IUser.repo.ts
      - user-entity.ts
    - infrastructure/
      - user-repo.ts
      - user-api.ts
    - presentation/
      - components/
        - edit-user-form.tsx
      - hooks/
        use-edit-user.hook.ts
        use-find-user-by-id.hook.ts
shared/
  - infrastructure/
    - api.ts
  - presentation/
    - components/
      - layout/
      - ui/
    - hooks/
    - lib/
public/
.env
proxy.ts