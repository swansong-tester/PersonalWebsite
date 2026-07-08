# Personal Website

A portfolio site with a hero, selected work, and a markdown-powered blog (`/blog` index + article pages), plus a contact footer.

**Stack:** React 19 + Vite 8, `react-router-dom` for routing, `marked` for rendering blog markdown, plain CSS with design tokens (no CSS framework). Icons from `lucide-react` and `react-icons`.

## Development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build at http://localhost:4173
npm run lint     # eslint
```

## Updating content

**Site text, projects, and links live in one file: [`src/data/site.js`](src/data/site.js). Blog posts are markdown files in [`src/content/posts/`](src/content/posts/).** You should never need to touch the components to change content.

### Add a portfolio project

Drop the image into `public/`, then append to the `projects` array:

```js
{
  id: 4,
  title: 'My New Project',
  category: 'Apps',            // a new category automatically gets its own filter button
  image: '/my-new-project.png',
  tech: ['Swift', 'SwiftUI'],
  featured: false,             // true = full-width featured card
  url: 'https://example.com',  // makes the card's hover overlay a link; null = not clickable
},
```

### Add a blog post

Create a markdown file in `src/content/posts/` — the filename becomes the URL (`my-new-post.md` → `/blog/my-new-post`):

```markdown
---
title: My New Post
date: Apr 2, 2026
readTime: 4 min read
excerpt: One-sentence teaser shown on the card.
image: /my-post-thumbnail.png
---

Write the article here in **markdown** — headings, lists, links,
code blocks, and quotes are all styled.
```

That's it. The post automatically appears on the `/blog` index and (if it's one of the two newest) in the home-page "Latest Thoughts" section. Posts are sorted newest-first by `date`.

### Edit hero text

Edit the `hero` object. In `headline`, wrap words in `{braces}` to give them the accent highlight:

```js
headline: 'Designing digital {experiences} with a human touch.',
```

### Links and email

Fill in the `url` fields in `socials` and the `email` in `site`. **Anything left as `null` is hidden from the page** (no dead links) — filling in a URL makes the icon/link appear.

## Design tokens

Colors, fonts, radii, shadows, and transitions are CSS custom properties in the `:root` block of [`src/index.css`](src/index.css). Change the palette or fonts there and the whole site follows. (Font files themselves are loaded via the Google Fonts `<link>` in `index.html`.)

Shared layout utilities (`.container`, `.btn`, `.section-title`) live in `src/App.css`. Each component has a co-located stylesheet in `src/components/`.

## Deploying

`npm run build` produces a fully static site in `dist/` — host it anywhere. Because the site uses client-side routing, the host must serve `index.html` for unknown paths (an "SPA fallback") so deep links like `/blog/my-post` work:

- **Netlify:** build command `npm run build`, publish directory `dist`; add a `public/_redirects` file containing `/* /index.html 200`
- **Vercel:** auto-detects Vite and handles the SPA fallback; defaults work
- **GitHub Pages:** no native SPA fallback — copy `index.html` to `404.html` in `dist/` after building (and set `base` in `vite.config.js` if serving from a subpath)

## Future work

- Dark mode (the token system in `index.css` makes this straightforward)
