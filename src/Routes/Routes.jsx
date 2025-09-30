import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Layout4 from "../Layout/Layout4";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import ContactPage from "../Pages/ContactPage";
import FaqPage from "../Pages/FaqPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/service/:slug",
        element: <ServiceDetailsPage></ServiceDetailsPage>,
      },
      {
        path: "/project",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetailsPage />,
      },

      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
    ],
  },
]);