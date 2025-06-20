import type { Route } from "./+types/routeBlog";
import { Blog } from "~/component/blog/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function RouteBlog() {
  return <Blog  />;
}