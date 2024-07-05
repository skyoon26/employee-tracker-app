import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const Dashboard = () => {

  // Create use state to store the employees:
  const [employees, setEmployees] = useState([]);

  // We need to use use effect to call the api:
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();

        setEmployees(data);
      } catch(error) {
        console.error("Error fetching employees: ", error.message);
      }
    }

    fetchEmployees();

  }, []);

  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1 className='text-center'>Employees</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant='outline-secondary'>Update</Button>{" "}
                    <Button variant='outline-danger'>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Dashboard;