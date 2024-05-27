import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './App.css';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './expenseData';

function App() {
  const [expense, setExpense] = useState(expenseData);

  return (
    <>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable expenses={expense} />
      </div>
    </>
  );
}

export default App;
