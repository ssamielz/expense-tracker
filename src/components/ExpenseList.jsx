import React, { useState, useEffect } from 'react';
import ExpenseTable from './ExpenseTable';
import { TableContainer, SearchBar, SearchInput, SearchButton } from '../styles';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    handleSearch();
  }, [expenses, searchTerm]);

  const handleSearch = () => {
    const filtered = expenses.filter(expense => {
      const searchLower = searchTerm.toLowerCase();
      const nameLower = expense.name.toLowerCase();
      const descriptionLower = expense.description.toLowerCase();
      return nameLower.includes(searchLower) || descriptionLower.includes(searchLower);
    });
    setFilteredExpenses(filtered);
    console.log('Filtered expenses:', filtered);
  };

  return (
    <TableContainer>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </SearchBar>
      <ExpenseTable expenses={filteredExpenses} onDeleteExpense={onDeleteExpense} />
    </TableContainer>
  );
};

export default ExpenseList;