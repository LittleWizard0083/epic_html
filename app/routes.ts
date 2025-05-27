import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/","routes/home.tsx"),
    route("/about", "routes/routeAbout.tsx"),
    route("/blog", "routes/routeBlog.tsx"),
    route("/contact", "routes/routeContact.tsx"),
    route("/projects", "routes/routeProjects.tsx")
] satisfies RouteConfig;
