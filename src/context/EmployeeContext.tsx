import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Employee {
  firstName: string,
  lastName: string,
  startDate: string,
  department: string,
  dateOfBirth: string,
  street: string,
  city: string,
  state: string,
  zipCode: string
}

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };
  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}

