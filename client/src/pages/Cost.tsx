import { useEffect } from "react";
import CostItem from "../components/Cost/CostItem";
import FormCost from "../components/Cost/FormCost";
import { useActionsCost } from "../hooks/useActionCost";
import { useTypesSelector } from "../hooks/useTypedSelector";

export default function Cost() {
  const { costs } = useTypesSelector((state) => state.cost);
  const { fetchGetCost } =
    useActionsCost();

  useEffect(() => {
    fetchGetCost();
  }, []);
  return (
    <div className="container">
      <h3>Учёт моих расходов</h3>
      <FormCost />
      <h3>Потрачено : {costs.reduce((acc, cost) => (acc += cost.price), 0)}</h3>
      <CostItem costs={costs} />
    </div>
  );
}
