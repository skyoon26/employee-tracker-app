package com.dchae.employeetrackerapp.employee_tracker_api.controller;

import com.dchae.employeetrackerapp.employee_tracker_api.entity.Employee;
import com.dchae.employeetrackerapp.employee_tracker_api.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
}
