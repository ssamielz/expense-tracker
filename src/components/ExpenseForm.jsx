import React, { useState } from 'react';
import { FormContainer, Title, Input, Select, Button } from '../styles';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    name: '',
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expense);
    setExpense({ name: '', description: '', amount: '', category: '', date: '' });
    console.log('Form submitted:', expense);
  };

  return (
    <FormContainer>
      <Title style={{color:"white"}}>Enter Expense details</Title>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Expense" value={expense.name} onChange={handleChange} required />
        <Input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} required />
        <Select name="category" value={expense.category} onChange={handleChange} required>
          <option value="">Select a category...</option>
          <option value="meals">Meals</option>
          <option value="utilities">Utilities</option>
          
          <option value="entertainment">Entertainment</option>
        </Select>
        <Input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
        <Input type="date" name="date" value={expense.date} onChange={handleChange} required />
        <Button type="submit">Add</Button>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;