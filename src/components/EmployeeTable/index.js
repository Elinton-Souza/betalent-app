import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import './EmployeeTable.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

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

  function toggleRow(id) {
    setExpanded(expanded === id ? null : id);
  }

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
            <th className="hide-mobile">CARGO</th>
            <th className="hide-mobile">DATA DE ADMISSÃO</th>
            <th className="hide-mobile">TELEFONE</th>
            <th className="show-mobile"></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <>
              <tr key={emp.id} onClick={() => toggleRow(emp.id)} className="table-row">
                <td>
                  <img src={emp.image} alt={emp.name} className="employee-photo" />
                </td>
                <td>{emp.name}</td>
                <td className="hide-mobile">{emp.job}</td>
                <td className="hide-mobile">{formatDate(emp.admission_date)}</td>
                <td className="hide-mobile">{formatPhone(emp.phone)}</td>
                <td className="show-mobile">
                  <span className="arrow">{expanded === emp.id ? '▲' : '▼'}</span>
                </td>
              </tr>
              {expanded === emp.id && (
                <tr className="expanded-row show-mobile" key={`exp-${emp.id}`}>
                  <td colSpan="3">
                    <div className="expanded-content">
                      <div><span>Cargo</span><span>{emp.job}</span></div>
                      <div><span>Data de admissão</span><span>{formatDate(emp.admission_date)}</span></div>
                      <div><span>Telefone</span><span>{formatPhone(emp.phone)}</span></div>
                    </div>
                  </td>
                </tr>
              )}
            </>
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