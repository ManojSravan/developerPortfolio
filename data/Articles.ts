type Article = {
  title: string
  desc: string
  href: string
  img: { src: string; alt: string; width: number; height: number }
}

export const articles: Article[] = [
  {
    title: "Understanding the Global Execution Context in JavaScript!!",
    desc: "This project was one of my earliest experiences as a backend developer, where I worked on an already-built company portfolio website. While the site was functional, it lacked scalability, modularity, and secure admin-level control.",
    href: "https://medium.com/@workwithmanojsravan/understanding-the-global-execution-context-in-javascript-e5bece956026",
    img: {
      // Using high-quality placeholder; can be swapped to your Source URL on request.
      src: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*CAhbUdXoCteDZ3omPZVxMg.png",
      alt: "Understanding the Global Execution Context in JavaScript!!",
      width: 920,
      height: 620,
    },
  },
  {
    title: "Java OOP Concepts That Every Developer Should Know",
    desc: "Our team built a scalable Learning Management System (LMS) from the ground up, designed to support students, trainers, and admins with interactive learning, efficient content management, and a robust backend built for performance and growth.",
    href: "https://medium.com/@workwithmanojsravan/java-oop-concepts-that-every-developer-should-know-d0752c6f0957",
    img: {
      src: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*rE2FXedSKSO1G2LallS00Q.jpeg",
      alt: "Java OOP Concepts That Every Developer Should Know",
      width: 920,
      height: 620,
    },
  },
]