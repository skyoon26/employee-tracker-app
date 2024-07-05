package com.dchae.employeetrackerapp.employee_tracker_api.controller;

import com.dchae.employeetrackerapp.employee_tracker_api.entity.Employee;
import com.dchae.employeetrackerapp.employee_tracker_api.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor // Need to inject EmployeeService from lombok
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee) {
        return employeeService.postEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employee/{id}") // Since id is the variable here it needs to be wrapped in curly braces
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        try {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with ID " + id + " deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        if(employee == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);
    }
}
