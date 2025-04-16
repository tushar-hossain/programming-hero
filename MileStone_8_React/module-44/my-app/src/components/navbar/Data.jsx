export const navbarData = [
  {
    id: "nav-home",
    label: "Home",
    path: "/",
  },
  {
    id: "nav-about",
    label: "About",
    path: "/about",
  },
  {
    id: "nav-services",
    label: "Services",
    path: "/services",
    submenu: [
      {
        id: "nav-services-web",
        label: "Web Development",
        path: "/services/web-dev",
      },
      {
        id: "nav-services-app",
        label: "App Development",
        path: "/services/app-dev",
      },
      { id: "nav-services-seo", label: "SEO", path: "/services/seo" },
    ],
  },
  {
    id: "nav-portfolio",
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    id: "nav-contact",
    label: "Contact",
    path: "/contact",
  },
];
