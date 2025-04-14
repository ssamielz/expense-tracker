import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { Container, AppTitle } from './styles';
import "./App.css"

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    console.log('Expenses after add:', [...expenses, expense]);
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
    console.log('Expenses after delete:', newExpenses);
  };

  return (
    <container >
      <h2>Expense Tracker</h2>
      <div className='formaandlist'>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      </div>
    </container>
  );
}

export default App;