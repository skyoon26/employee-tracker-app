import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  // Create use state to store search data:
  const [search, setSearch] = useState('');
  
  // Create use state to store the employees:
  const [employees, setEmployees] = useState([]);

  // Use navigate hook in order to redirect the user to the new page when they click update:
  const navigate = useNavigate();

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

  // Method to call the api in order to delete an employee:
  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
        method: "DELETE",

      });

      // This part of the function updates the table data after an employee is deleted:
      if(response.ok) {
        setEmployees((prevEmployees) => 
          prevEmployees.filter((employee)=> employee.id !== employeeId)
        )
      }

      console.log(`Employee with ID ${employeeId} deleted successfully`);
    } catch (error) {
        console.error("Error deleting employee: ", error.message);
    }
  }

  // This is the method that uses navigate hook:
  const handleUpdate = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  }

  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1 className='text-center'>Employees</h1>
          <Form>
            <InputGroup className='my-3'>
              <Form.Control 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder='Search employees' />
            </InputGroup>
          </Form>
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
              {employees.filter((employee) => {
                return search.toLowerCase() === '' 
                  ? employee 
                  : employee.name.toLowerCase().includes(search);
              }).map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant='outline-secondary' onClick={()=> handleUpdate(employee.id)}>Update</Button>{" "}
                    <Button variant='outline-danger' onClick={()=> handleDelete(employee.id)}>Delete</Button>
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