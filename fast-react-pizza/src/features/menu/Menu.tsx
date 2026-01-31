import { useLoaderData } from "react-router";
import type { Pizza } from "../../types/types";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
