package com.dchae.employeetrackerapp.employee_tracker_api.repository;

import com.dchae.employeetrackerapp.employee_tracker_api.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
