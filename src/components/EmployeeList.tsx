import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useEmployeeContext } from '../context/EmployeeContext';
import SearchBar from './SearchBar';

interface Employee {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

const columns = [
  { name: 'First Name', selector: (row: Employee) => row.firstName, sortable: true },
  { name: 'Last Name', selector: (row: Employee) => row.lastName, sortable: true },
  { name: 'Start Date', selector: (row: Employee) => row.startDate, sortable: true },
  { name: 'Department', selector: (row: Employee) => row.department, sortable: true },
  { name: 'Date of Birth', selector: (row: Employee) => row.dateOfBirth, sortable: true },
  { name: 'Street', selector: (row: Employee) => row.street, sortable: true },
  { name: 'City', selector: (row: Employee) => row.city, sortable: true },
  { name: 'State', selector: (row: Employee) => row.state, sortable: true },
  { name: 'Zip Code', selector: (row: Employee) => row.zipCode, sortable: true },
];

const EmployeeList: React.FC = () => {
  const { employees } = useEmployeeContext();
  const [filteredEmployees, setFilteredEmployees] = React.useState(employees)

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      const filtered = employees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
      />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
