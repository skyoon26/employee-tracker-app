import { useState } from "react";
import "./PostUser.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostUser = () => {

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

  const navigate = useNavigate();

  // Method handleSubmit will submit the form data:
  const handleSubmit = async (e) => {
    // Disables the automatic reloading of the page:
    e.preventDefault(); 

    // Checks to see if the form data properly prints to the console of the dev tools:
    console.log(formData); 
    
    // Code to call the api:
    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      // Code to get the response:
      const data = await response.json();
      console.log("Employee created: ", data);
      // Code to redirect the user to the dashboard to see all the employees:
      navigate("/");
    } catch (error) {
      console.log("Error creating employee: ", error.message);
    }
  }

  return (
    <>
    <div className="center-form">
      <h1>Post New Employee</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" className="w-100">Post Employee</Button>
      </Form>
    </div>
    </>
  )
}

export default PostUser;