import './UpdateUser.css'
import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {

  // Need to get the id from the params:
  const {id} = useParams();

  // Store data of the form using state:
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  })

  // Method handleInputChange of the form:
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  // Use the employee id to call the back end api with use effect: 
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`)
        const data = await response.json(); // Gets the json from the response
        setFormData(data); // Sets the data inside the form data
      } catch (error) {
        console.error("Error fetching user: ", error.message);
      }
    }

    fetchEmployee();
  }, [id])

  return (
    <>
    <div className="center-form">
      <h1>Edit Employee</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control 
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Control 
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Control 
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Control 
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Edit Employee</Button>
      </Form>
    </div>
    </>
  )
}

export default UpdateUser