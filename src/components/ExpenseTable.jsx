import React from 'react';
import { Table, Th, Td, DeleteButton, TotalRow } from '../styles';
import { FaTrash } from 'react-icons/fa';
import "./ExpenseTable.css";

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <Table className='exptable'>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Expense</Th>
          <Th>Description</Th>
          <Th>Category</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} style={{color:"white"}}>
            <Td>{index + 1}</Td>
            <Td>{expense.name}</Td>
            <Td>{expense.description}</Td>
            <Td>{expense.category}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.date}</Td>
            <Td>
              <DeleteButton onClick={() => onDeleteExpense(index)}>
                <FaTrash />
              </DeleteButton>
            </Td>
          </tr>
        ))}
        <TotalRow>
          <Td colSpan="4"></Td>
          <Td>Total</Td>
          <Td>{total}</Td>
          <Td></Td>
        </TotalRow>
      </tbody>
    </Table>
  );
};

export default ExpenseTable;