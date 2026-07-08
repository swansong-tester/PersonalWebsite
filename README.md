# Personal Website

A single-page portfolio site with a hero, selected work, blog teasers, and a contact footer.

**Stack:** React 19 + Vite 8, plain CSS with design tokens (no CSS framework). Icons from `lucide-react` and `react-icons`.

## Development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build at http://localhost:4173
npm run lint     # eslint
```

## Updating content

**All editable content lives in one file: [`src/data/site.js`](src/data/site.js).** You should never need to touch the components to change text, projects, posts, or links.

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

Append to the `posts` array:

```js
{
  id: 3,
  title: 'My New Post',
  date: 'Apr 2, 2026',
  readTime: '4 min read',
  excerpt: 'One-sentence teaser shown on the card.',
  image: '/my-post-thumbnail.png',
  url: 'https://blog.example.com/my-new-post', // shows the "Read Article" link; null = hidden
},
```

Set `blogIndexUrl` to show the "View All Posts" button.

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

`npm run build` produces a fully static site in `dist/` — host it anywhere:

- **Netlify:** build command `npm run build`, publish directory `dist`
- **Vercel:** auto-detects Vite; defaults work
- **GitHub Pages:** publish `dist/` (set `base` in `vite.config.js` if serving from a subpath)

## Future work

- Real blog article pages (needs routing + a content pipeline, e.g. MDX)
- Dark mode (the token system in `index.css` makes this straightforward)
