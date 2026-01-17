import { faker } from "@faker-js/faker";
import type { Post } from "./types";

export function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
