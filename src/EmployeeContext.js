import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  
  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now().toString() }]);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((emp) => (emp.id === id ? updatedEmployee : emp)));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
