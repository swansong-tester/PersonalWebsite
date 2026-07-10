# Personal Website

A minimal personal site: short intro, work list, and a markdown-powered blog (`/blog` index + article pages), with a contact footer.

**Stack:** React 19 + Vite 8, `react-router-dom` for routing, `marked` for rendering blog markdown. Plain CSS — one stylesheet, system fonts, no CSS framework, no icon libraries, no external requests.

## Development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173/PersonalWebsite/
npm run build    # production build → dist/
npm run preview  # serve the production build at http://localhost:4173/PersonalWebsite/
npm run lint     # eslint
```

Note the `/PersonalWebsite/` in local URLs — the site is built for GitHub Pages, which serves it from that subpath, and dev/preview mirror it so path bugs show up locally.

## Updating content

**Site text, the work list, and links live in one file: [`src/data/site.js`](src/data/site.js). Blog posts are markdown files in [`src/content/posts/`](src/content/posts/).** You should never need to touch the components to change content.

### Add a blog post

Create a markdown file in `src/content/posts/` — the filename becomes the URL (`my-new-post.md` → `/blog/my-new-post`):

```markdown
---
title: My New Post
date: Apr 2, 2026
readTime: 4 min read
image: /my-photo.png
---

Write the article here in **markdown** — headings, lists, links,
images, code blocks, and quotes are all styled.
```

The post appears automatically on the `/blog` index and (if it's one of the three newest) in the home page's Writing list. Posts sort newest-first by `date`. The `image` field is optional — it renders as the article's header image.

### Add pictures

Drop the image file in `public/`, then reference it as `/my-photo.png` — in a post's `image:` frontmatter or inline in the article body with `![caption](/my-photo.png)`. The deploy subpath is handled automatically. Tip: resize photos to ≤1200px wide before adding them so pages stay fast.

### Add work / link videos

Append to the `projects` array in `src/data/site.js`:

```js
{
  title: 'My Short Film',
  category: 'Video',
  description: 'One line about it.',
  url: 'https://youtube.com/watch?v=...', // any link: YouTube, App Store, a gallery. null = no link
},
```

### Links and email

Fill in the `url` fields in `socials` and the `email` in `site`. **Anything left as `null` is hidden from the page** (no dead links).

## Design

All styling is in [`src/index.css`](src/index.css): design tokens at the top (colors for light **and** dark mode — the site follows the visitor's system preference), then base styles and per-section rules. System font stack, one accent color used for links only, no animations.

## Deploying

Deployment is automatic: every push to `master` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to **GitHub Pages** at:

**https://swansong-tester.github.io/PersonalWebsite/**

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **"GitHub Actions"**. (Until this is done, the workflow's deploy step will fail — that's expected.)

If you rename the repo or add a custom domain, update `base` in [`vite.config.js`](vite.config.js) (use `'/'` for a custom domain or user site).
