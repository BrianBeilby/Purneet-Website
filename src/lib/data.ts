export const links = [ //Links for the navbar 
    {
      name: "Podcasts",
      hash: "#podcasts",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  type Episode = {
    id: number;
    title: string;
    description: string;
  };
  
  export const episodes: Episode[] = [

  ];

  /*
    { id: 143, title: 'Episode 143', description: 'WordPress vs Wix & the Fight Against Fake News' },
    { id: 142, title: 'Episode 142', description: 'The Future of AI in Web Development' },
    { id: 141, title: 'Episode 141', description: 'How to Optimize Your Website for SEO' },
    { id: 140, title: 'Episode 140', description: 'Understanding JavaScript Frameworks' },
    { id: 139, title: 'Episode 139', description: 'The Rise of Jamstack Architecture' },
    { id: 138, title: 'Episode 138', description: 'Best Practices for Website Security' },
    { id: 137, title: 'Episode 137', description: 'Building Scalable Web Applications' },
    { id: 136, title: 'Episode 136', description: 'CSS Tricks and Tips for Beginners' },
    { id: 135, title: 'Episode 135', description: 'Getting Started with Web Accessibility' },
  */