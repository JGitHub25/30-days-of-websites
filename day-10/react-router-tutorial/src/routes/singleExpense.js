import { useParams } from "react-router-dom";
import { getExpense } from "../expenses-data";

export function SingleExpense() {
  const { code } = useParams();
  const expense = getExpense(parseInt(code, 10));

  return (
    <div>
      <h4>Origin: {expense.origin}</h4>
      <p>{`Value: $${expense.quantity}`}</p>
      <p>Date: {expense.date}</p>
    </div>
  );
}
