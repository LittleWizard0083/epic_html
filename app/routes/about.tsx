import type { Route } from "./+types/routeAbout";
import { About } from "~/component/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function RouteAbout() {
  return <About  />;
}