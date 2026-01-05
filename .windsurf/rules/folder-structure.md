---
trigger: always_on
---

## Folder structure:

app/
  ├── (auth)/
  ├── (pages)/
  │     └── pageName/
  │           ├── components/
  │           └── page.tsx
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
modules/
  ├── user/
  │  ├── application/
  │  ├── domain/
  │  ├── infrastructure/
  │  └── presentation/
  │       ├── components/
  │       └── hooks/
  └── otherModule/
shared/
  ├── application/
  ├── domain/
  ├── infrastructure/
  └── presentation/
    ├── components/
    ├── hooks/
    └── lib/
public/
.env
proxy.ts

Assume I’ll have multiple modules later