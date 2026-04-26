import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import './EmployeeTable.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.job.toLowerCase().includes(search.toLowerCase()) ||
    emp.phone.includes(search)
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Funcionários</h1>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id}>
              <td>
                <img src={emp.image} alt={emp.name} className="employee-photo" />
              </td>
              <td>{emp.name}</td>
              <td>{emp.job}</td>
              <td>{formatDate(emp.admission_date)}</td>
              <td>{formatPhone(emp.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR');
}

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return `+${digits[0]}${digits[1]} (${digits.slice(2,4)}) ${digits.slice(4,9)}-${digits.slice(9)}`;
}

export default EmployeeTable;