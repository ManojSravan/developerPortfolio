type Project = {
  title: string
  desc: string
  href: string
  isfeatured?:boolean
  img: { src: string; alt: string; width: number; height: number }
}

export const projects: Project[] = [
  {
    title: "Refactoring & Scaling a Company Portfolio Website",
    desc: "This project was one of my earliest experiences as a backend developer, where I worked on an already-built company portfolio website. While the site was functional, it lacked scalability, modularity, and secure admin-level control.",
    href: "https://medium.com/@workwithmanojsravan/case-study-refactoring-scaling-a-company-portfolio-website-bf0ced199913",
    img: {
      // Using high-quality placeholder; can be swapped to your Source URL on request.
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Refactoring & Scaling a Company Portfolio Website",
      width: 920,
      height: 620,
    },
  },
  {
    title: "Creating a Scalable and Interactive LMS System",
    desc: "Our team built a scalable Learning Management System (LMS) from the ground up, designed to support students, trainers, and admins with interactive learning, efficient content management, and a robust backend built for performance and growth.",
    href: "https://medium.com/@workwithmanojsravan/case-study-building-a-scalable-learning-management-system-lms-from-scratch-6e60ca8222a9",
    img: {
      src: "https://images.unsplash.com/photo-1616593772450-6220bc809944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1191",
      alt: "Creating a Scalable and Interactive LMS System",
      width: 920,
      height: 620,
    },
  },
]
