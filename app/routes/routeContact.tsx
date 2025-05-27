import type { Route } from "./+types/routeContact";
import { Contact } from "~/component/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function RouteContact() {
  return <Contact  />;
}