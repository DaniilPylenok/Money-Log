import { ICost } from "../../types/cost";
import "./Cost-item.css";

export default function CostItem({ costs }: { costs: ICost[] }) {
  return (
    <div className="costs-wrapper">
      {costs.map((cost) => (
        <div className="cost-item" key={cost._id}>
          <p>Описание :{cost.text}</p>
          <p>Цена :{cost.price}</p>
        </div>
      ))}
    </div>
  );
}
