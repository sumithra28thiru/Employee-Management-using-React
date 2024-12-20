import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "./EmployeeContext";

const EmployeeTable = () => {
const { employees, deleteEmployee } = useContext(EmployeeContext);

const [currentPage, setCurrentPage] = useState(1);
const employeesPerPage = 5;

  const indexOfLastEmployee = currentPage * employeesPerPage;
const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

const totalPages = Math.ceil(employees.length / employeesPerPage);

const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};

const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
};

return (
    <div>
    <h1>Employee List</h1>
    <Link to="/add">
        <button>Add Employee</button>
    </Link>
    <table border="1">
        <thead>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.id}</td>
              <td>{emp.gender}</td>
              <td>{emp.contact}</td>
              <td>
                <Link to={`/edit/${emp.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
