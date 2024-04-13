import React from 'react';
import './table.css';
function Student() {
  const students = [
    { name: 'John', email: 'John@test.com', contact: 888 },
    { name: 'Harry', email: 'Harry@test.com', contact: 545 },
    { name: 'Rahul', email: 'Rahul@test.com', contact: 488 }
  ];

  return (
    <div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
