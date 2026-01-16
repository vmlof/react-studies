import type { PizzaData } from "../types/PizzaData";

type PizzaProps = {
  pizza: PizzaData;
};

function Pizza({ pizza }: PizzaProps) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizza.photoName} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
