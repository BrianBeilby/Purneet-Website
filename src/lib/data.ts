export const links = [ //Links for the navbar 
    {
      name: "Home",
      hash: "#",
    },
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
    link: string;
  };
  
  export const episodes: Episode[] = [
    { id: 1, title: 'Episode 1 Derek Lam', description: 'The First Episode starring Derek Lam, a professor at California State University, Sacramento.', link: 'https://www.youtube.com/watch?v=qhhSx8RoAiQ'},
    { id: 2, title: 'Episode 2 Natasha Palumbo ', description: 'The Second Episode  episode featuring Professor P, aka Natasha Palumbo.', link: 'https://youtu.be/jymsKtKOytE'},
    { id: 3, title: 'Episode 3 Jared R ', description: 'The Third Episode  episode featuring Jared R.', link: 'https://www.youtube.com/watch?v=xyjHL3p_mtM'},
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