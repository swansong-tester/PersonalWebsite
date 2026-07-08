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

export const nav = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
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

// Set `url` on a post to show its "Read Article" link.
export const posts = [
  {
    id: 1,
    title: 'The Future of Web Design in 2026',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    excerpt:
      'Exploring how tactile maximalism and organic geometries are taking over the web landscape.',
    image: '/blog_thumbnail_1774731483174.png',
    url: null, // TODO: add article URL
  },
  {
    id: 2,
    title: 'Why React Native Still Rocks',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    excerpt:
      'A deep dive into cross-platform development patterns that boost productivity.',
    image: '/portfolio_project2_1774731461653.png',
    url: null, // TODO: add article URL
  },
];

// Link for the "View All Posts" button; the button is hidden while null.
export const blogIndexUrl = null; // TODO: add blog index URL

// Socials with a null url are hidden until you fill them in.
export const socials = [
  { key: 'linkedin', label: 'LinkedIn', url: null }, // TODO
  { key: 'youtube', label: 'YouTube', url: null }, // TODO
  { key: 'instagram', label: 'Instagram', url: null }, // TODO
];
