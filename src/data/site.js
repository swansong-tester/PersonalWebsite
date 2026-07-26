// ---------------------------------------------------------------------------
// All editable site content lives in this file (blog posts are markdown
// files in src/content/posts/). See README.md ("Updating content").
// ---------------------------------------------------------------------------

export const site = {
  name: 'Mark',
  bio: 'I build intuitive apps and write about modern web development. Away from the keyboard I photograph the world through a lens.',
  email: 'hello@example.com', // TODO: replace with your real email
  portrait: { src: '/portrait.png', alt: 'Portrait of Mark' },
};

export const nav = [
  { label: 'Work', to: '/#work' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/#contact' },
];

// Work list. `url` makes the title an external link — point it at a live
// app, a case study, or a YouTube video. null = plain text, no link.
export const projects = [
  {
    title: 'Focus Timer App',
    category: 'App',
    description: 'A distraction-free timer for deep work, built with React Native and TypeScript.',
    url: null, // TODO: add project URL
  },
  {
    title: 'Abstract Concept Art',
    category: 'Images',
    description: 'A series of organic 3D studies made in Blender and Figma.',
    url: null, // TODO: add gallery URL
  },
  {
    title: 'Cinematic Reel 2025',
    category: 'Video',
    description: 'A year of footage cut in Premiere Pro and After Effects.',
    url: null, // TODO: add YouTube link
  },
];

// Socials with a null url are hidden until you fill them in.
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mark-swanson-4630494' },
  { label: 'YouTube', url: null }, // TODO
  { label: 'Instagram', url: null }, // TODO
];
