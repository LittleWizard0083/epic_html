import type { Route } from "./+types/routeProjects";
import { Projects } from "~/component/projects/projects";
import { faker } from '@faker-js/faker';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loaderData() {
    const avatars = await Promise.all(
        Array.from({ length: 30 }, async () => ({
            avatar: faker.image.personPortrait(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            fullName: faker.person.fullName(),
        }))
    );
    return avatars;
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default async function RouteProjects() {
  const avatars = await loaderData();
  return <Projects loaderData={avatars}/>;
}