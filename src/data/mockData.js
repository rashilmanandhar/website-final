// import monkeyImage from '../assets/photography/animal/2monkey.jpg';

export const projectsData = [
  {
    id: 1,
    title: "Beer N Nuts Restaurant Management System",
    description: "An advanced, glassmorphic analytics platform tracking machine learning model inferences, token usages, and performance metrics in real-time.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
    category: "Web App",
    github: "https://github.com/rashilsayami/final-project",
    // demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
  id: 2,
  title: "Personal Homelab & Self-Hosted Cloud",
  description: "Designed and deployed a self-hosted infrastructure with secure remote access, private cloud storage, photo management, reverse proxy, and monitoring using open-source technologies.",
  tags: [
    "Docker",
    "Nextcloud",
    "Immich",
    "Tailscale",
    "Grafana",
    "Prometheus"
  ],
  category: "Self-Hosting",
  github: "https://github.com/yourusername/homelab",
  demo: "",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
},
  // {
  //   id: 3,
  //   title: "Vesper Markdown Editor",
  //   description: "A minimalist, real-time previewing markdown editor featuring cloud synchronization, custom themes, and full LaTeX formula support.",
  //   tags: ["React", "Tailwind CSS", "Framer Motion", "KaTeX"],
  //   category: "Tooling",
  //   github: "https://github.com",
  //   demo: "https://example.com",
  //   image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
  // },
  // {
  //   id: 4,
  //   title: "Helios Crypto Explorer",
  //   description: "A comprehensive cryptocurrency tracker using WebSockets to display live price feeds, candlestick charts, and transaction logs.",
  //   tags: ["React", "Tailwind CSS", "WebSockets", "ChartJS"],
  //   category: "Web3",
  //   github: "https://github.com",
  //   demo: "https://example.com",
  //   image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop"
  // }
];

export const photographyData = [
   // {
  //   id: 6,
  //   title: "Brutalist Concrete Arch",
  //   category: "Animal",
  //   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  // },

  // .........................................................Animal category photos.........................................................................................................
  {
    id: 1,
    title: "Alfa",
    category: "Animal",
    image: "/assets/photography/animal/dog1.jpg"
  },
    {
    id: 2,
    title: "Monkey playing in the wild",
    category: "Animal",
    image: "/assets/photography/animal/2monkey.jpg"  // ✅ Note: starts with /
  },
  {
    id: 3,
    title: "Monkey hanging on a rope",
    category: "Animal",
    image: "/assets/photography/animal/monkey.jpg"  
  },
  {
    id: 4,
    title: "Monkey on a tree branch",
    category: "Animal",
    image: "/assets/photography/animal/m2.jpg"  
  },
  {
    id: 5,
    title: "on a wild",
    category: "Animal",
    image: "/assets/photography/animal/m3.jpg"  
  },
  {
    id: 6,
    title: "monkey family",
    category: "Animal",
    image: "/assets/photography/animal/m4.jpg"  
  },
  //...................................................Animal category photos.........................................................................................................
// ...................................................Architecture category photos.........................................................................................................
  {
    id: 7,
    title: "9talle durbar",
    category: "Architecture",
    image: "/assets/photography/architecture/9talledurbar.jpg"  
  },


// ...................................................Architecture category photos.........................................................................................................
// ...................................................Food category photos.........................................................................................................
 {
    id: 8,
    title: "foodi",
    category: "Food",
    image: "/assets/photography/food/food1.jpg"  
  },
// ...................................................Food category photos.........................................................................................................
// ...................................................People category photos.........................................................................................................
 {
    id: 9,
    title: "random peole",
    category: "People",
    image: "/assets/photography/people/123.jpg"  
  },
  {
    id: 10,
    title: "random peole 2",
    category: "People",
    image: "/assets/photography/people/1234.jpg"  
  },
  {
    id: 11,
    title: "flower showcase",
    category: "People",
    image: "/assets/photography/people/Mummy.jpg"  
  },
  {
    id: 12,
    title: "A man caputring a photo",
    category: "People",
    image: "/assets/photography/people/neelaw.jpg"  
  },
  {
    id: 13,
    title: "A girl posing for a photo",
    category: "People",
    image: "/assets/photography/people/pallu.jpg"  
  },
  {
    id: 14,
    title: "Spider man boy",
    category: "People",
    image: "/assets/photography/people/rashil.jpg"  
  },
  {
    id: 15,
    title: "Posing for a photo",
    category: "People",
    image: "/assets/photography/people/sujal.jpg"  
  },
    {
    id: 16,
    title: "A view which is captured",
    category: "People",
    image: "/assets/photography/people/roji.jpg"  
  },


// ...................................................People category photos.........................................................................................................


];

export const blogPostsData = [
  {
    id: 1,
    title: "Building My DevOps Homelab with Docker and Ubuntu Server",
    summary:
      "How I built my personal homelab using Ubuntu Server, Docker Compose, Tailscale, and self-hosted applications.",
    date: "August 3, 2026",
    readingTime: "8 min read",
    category: "DevOps",
    content: `A homelab is one of the best ways to learn DevOps through real-world projects. Instead of relying only on cloud platforms, I built my own server to host services and experiment safely.

### My Setup
- Ubuntu Server
- Docker & Docker Compose
- Tailscale for secure remote access
- Nginx Reverse Proxy
- Nextcloud
- Immich
- Grafana & Prometheus

### What I Learned
- Container management
- Linux administration
- Networking basics
- Reverse proxies
- Backup strategies

Building this homelab has become the foundation of my DevOps learning journey and allows me to experiment with production-like environments from home.`
  },

  {
    id: 2,
    title: "Why Every DevOps Engineer Should Build a Homelab",
    summary:
      "The fastest way to learn Linux, Docker, networking, Kubernetes, and automation is by building your own lab.",
    date: "July 25, 2026",
    readingTime: "6 min read",
    category: "Learning",
    content: `Certifications are valuable, but practical experience is what truly develops DevOps skills.

A homelab lets you:
- Deploy applications
- Break and fix systems
- Practice backups
- Learn networking
- Configure monitoring
- Experiment with Kubernetes

Even an old laptop or desktop is enough to build a powerful learning environment.

My advice is simple: build projects, document everything, and keep improving one service at a time.`
  },

  {
    id: 3,
    title: "Photography Meets Technology: My Workflow",
    summary:
      "How I organize, edit, and back up my photos using a self-hosted workflow.",
    date: "July 10, 2026",
    readingTime: "7 min read",
    category: "Photography",
    content: `Photography is more than capturing images—it's also about organizing and protecting them.

### My Workflow
- Shoot with a Nikon D5600
- Transfer RAW images to my server
- Organize albums
- Edit selected photos
- Back up everything automatically

Using self-hosted tools gives me complete control over my photo library while keeping my work private and accessible from anywhere through a secure connection.

Combining photography with DevOps has been an exciting way to merge my technical skills with my creative passion.`
  }
];

export const resumeData = {
  experience: [
  {
    id: 1,
    role: "DevOps & Homelab Enthusiast",
    company: "Personal Projects",
    period: "2026 - Present",
    description:
      "Building a self-hosted homelab using Ubuntu Server, Docker, Docker Compose, Tailscale, Nginx, Nextcloud, Immich, and monitoring tools while learning Linux, networking, automation, and infrastructure management."
  },
  {
    id: 2,
    role: "DevOps Learner",
    company: "Self-Study",
    period: "2026 - Present",
    description:
      "Currently learning Docker, Kubernetes, CI/CD, Git, Linux administration, and cloud technologies through hands-on projects, labs, and continuous experimentation."
  }
],
education: [
  {
    id: 1,
    degree: "Bachelor of Information Management (BIM)",
    institution: "Shanker Dev Campus, Kathmandu",
    period: "2022 - 2026",
    description:
      "Completed a Bachelor's degree in Information Management with a strong foundation in Networking, Database Management Systems, Software Engineering, Operating Systems, Web Development, Programming, and Information Systems."
  }
],
skills: [
  { name: "Linux (Ubuntu & Linux Mint)", rating: 80 },
  { name: "Docker & Docker Compose", rating: 85 },
  { name: "Git & GitHub", rating: 80 },
  { name: "Networking Fundamentals", rating: 75 },
  { name: "Bash Scripting", rating: 70 },
  { name: "Kubernetes (Learning)", rating: 65 },
  { name: "Nginx", rating: 75 },
  { name: "Tailscale", rating: 80 },
  { name: "Self-Hosting & Homelab", rating: 90 },
  { name: "Monitoring (Grafana & Prometheus)", rating: 65 },
  { name: "CI/CD (GitHub Actions)", rating: 60 },
  { name: "Cloud Fundamentals", rating: 60 }
]
};
