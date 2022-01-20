export let expenses = [
  {
    code: 1,
    origin: "ice creams",
    quantity: 78,
    date: new Date().toLocaleString(),
  },
  { code: 2, origin: "food", quantity: 89, date: new Date().toLocaleString() },
  {
    code: 3,
    origin: "clothes",
    quantity: 16,
    date: new Date().toLocaleString(),
  },
  {
    code: 4,
    origin: "repairings",
    quantity: 25,
    date: new Date().toLocaleString(),
  },
  {
    code: 5,
    origin: "new laptop",
    quantity: 200,
    date: new Date().toLocaleString(),
  },
  {
    code: 6,
    origin: "headphones",
    quantity: 210,
    date: new Date().toLocaleString(),
  },
];

export function getExpense(code) {
  return expenses.find((expense) => expense.code === code);
}
