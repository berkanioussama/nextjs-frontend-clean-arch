---
trigger: always_on
---

Architecture

use Clean Architecture

folder structure

app/
  - (auth)/
  - (pages)/
    - users/
      - components/
      - page.tsx
    - globals.css
    - layout.tsx
    - page.tsx
modules/
  user/
    - application/
      - command/
        - add-user.uc.ts
      - query/
        - find-all-users.uc.ts
    - domain/
      - IUser.repo.ts
      - user-entity.ts
    - infrastructure/
      - user-repo.ts
    - ui/
      - components/
        - users-table.tsx
      - hooks/
        use-add-user.hook.ts
shared/
  - infrastructure/
    - api.ts
  - ui/
    - components/
      - ui/
    - hooks/
    - lib/
public/
.env
proxy.ts