import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeContext";

const EmployeeForm = () => {
  const { employees, addEmployee, updateEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ name: "", gender: "", contact: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const emp = employees.find((e) => e.id === id);
      if (emp) setEmployee(emp);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateEmployee(id, employee);
    } else {
      addEmployee(employee);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>{id ? "Edit Employee" : "Add Employee"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={employee.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={employee.contact}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? "Update" : "Add"}</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
