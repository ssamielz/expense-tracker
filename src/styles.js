import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  margin: 20px;
  display: flex;
  background-color: white;
`;

export const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-right: 20px;
`;

export const TableContainer = styled.div`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: left;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  flex: 1;
  font-size: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #e0e0e0;
  padding: 12px;
  text-align: left;
  background-color: #f0f0f0;
  color: #333;
`;

export const Td = styled.td`
  border: 1px solid #e0e0e0;
  padding: 12px;
  text-align: left;
  color: #555;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #d32f2f;
`;

export const TotalRow = styled.tr`
  background-color: #f0f0f0;
  font-weight: bold;
  color: #333;
`;

export const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const SearchButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;