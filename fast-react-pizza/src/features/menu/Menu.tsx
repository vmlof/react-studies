import { useLoaderData } from "react-router";
import type { Pizza } from "../../types/types";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
