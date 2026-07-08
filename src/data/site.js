// ---------------------------------------------------------------------------
// All editable site content lives in this file.
// Update text, projects, posts, and links here — no need to touch components.
// See README.md ("Updating content") for examples.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Mark',
  tagline: 'Designing digital experiences with a human touch.',
  email: 'hello@example.com', // TODO: replace with your real email
};

// Hash targets (e.g. /#portfolio) scroll to that section of the home page.
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/#footer' },
];

export const hero = {
  greeting: "Hi, I'm Mark 👋",
  // Words wrapped in {braces} render with the accent highlight styling.
  headline: 'Designing digital {experiences} with a human touch.',
  subhead:
    'I build intuitive apps, write about modern web development, and capture the world through a lens.',
  stats: ['5+ yrs experience', '30+ projects shipped', 'React · Figma · iOS'],
  portrait: { src: '/profile_picture_1774731436010.png', alt: 'Portrait of Mark' },
};

// Filter buttons in the Portfolio section are generated from the categories
// used below — adding a project with a new category adds its filter too.
// Set `url` to a live/case-study link to make the card clickable.
export const projects = [
  {
    id: 1,
    title: 'Focus Timer App',
    category: 'Apps',
    image: '/portfolio_project1_1774731448878.png',
    tech: ['React Native', 'TypeScript'],
    featured: true,
    url: null, // TODO: add project URL
  },
  {
    id: 2,
    title: 'Abstract Concept Art',
    category: 'Images',
    image: '/portfolio_project2_1774731461653.png',
    tech: ['Blender', 'Figma'],
    url: null, // TODO: add project URL
  },
  {
    id: 3,
    title: 'Cinematic Reel 2025',
    category: 'Videos',
    image: '/portfolio_project1_1774731448878.png',
    tech: ['Premiere Pro', 'After Effects'],
    url: null, // TODO: add project URL
  },
];

// Blog posts live as markdown files in src/content/posts/ — see README.

// Socials with a null url are hidden until you fill them in.
export const socials = [
  { key: 'linkedin', label: 'LinkedIn', url: null }, // TODO
  { key: 'youtube', label: 'YouTube', url: null }, // TODO
  { key: 'instagram', label: 'Instagram', url: null }, // TODO
];
