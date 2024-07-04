package com.dchae.employeetrackerapp.employee_tracker_api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity // Tells spring boot this a jpa entity
@Data // Gets boilerplate code like getters and setters from lombok
public class Employee {

    @Id // Makes this a primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments id by 1
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String department;

}
