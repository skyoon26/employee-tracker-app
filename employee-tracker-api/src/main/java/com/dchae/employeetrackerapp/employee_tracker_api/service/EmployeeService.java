package com.dchae.employeetrackerapp.employee_tracker_api.service;

import com.dchae.employeetrackerapp.employee_tracker_api.entity.Employee;
import com.dchae.employeetrackerapp.employee_tracker_api.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Tells Spring to manage this class, contains business logic, allows for dependency injection
@RequiredArgsConstructor // Need this to inject the employee repository
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
