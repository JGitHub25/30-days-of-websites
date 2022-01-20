import { Link } from "react-router-dom";
import { expenses } from "../expenses-data";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      {expenses.map((singleExpense, index) => {
        return (
          <div key={index}>
            <h4>Origin: {singleExpense.origin}</h4>
            <Link to={`/expenses/${singleExpense.code}`}>
              <button>See details</button>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
