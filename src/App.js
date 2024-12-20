import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EmployeeProvider } from "./EmployeeContext";
import EmployeeTable from "./EmployeeTable.js";
import EmployeeForm from "./EmployeeForm.js"

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
