# Personal Website

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Fully static — no database, no CMS.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Update your info

| What | Where |
| :-- | :-- |
| Name, role, bio, skills, contact/social links | `src/config.ts` |
| CV/resume PDF | `public/cv.pdf` (replace the file directly, keep the same name) |
| Publications | add/edit `.md` files in `src/content/publications/` |
| Projects (current/past) | add/edit `.md` files in `src/content/projects/` |
| News/updates | add/edit `.md` files in `src/content/news/` |

Each content type has placeholder/sample entries marked `PLACEHOLDER` — delete the samples and add your real entries as new `.md` files. The required fields for each are defined in `src/content.config.ts`.

To add a new publication, create a file like `src/content/publications/my-new-paper.md`:

```md
---
title: "Your paper title"
authors: "Author A., Author B."
venue: "Journal or Conference Name"
year: 2026
type: journal # journal | conference | preprint
link: "https://doi.org/..." # optional
---
```

Same pattern for `projects/` (`status: current | past`, `tags: [...]`) and `news/` (`date`, `title`).

## Deploy (GitHub Pages, free)

Repo: https://github.com/rashidma/rashidma.github.io — deploys to **https://rashidma.github.io**.

1. In the repo settings, under **Pages**, set the source to **GitHub Actions** (one-time setup).
2. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

A custom domain can be added later via repo settings → Pages → "Custom domain", without changing the rest of the site.

## Commands

| Command | Action |
| :-- | :-- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
