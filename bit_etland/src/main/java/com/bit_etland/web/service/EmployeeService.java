package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.EmployeeDTO;

public interface EmployeeService {
	
	
	public void registEmployee(EmployeeDTO emp);
	public List<EmployeeDTO> bringEmployeesList();
	public List<EmployeeDTO> retrieveEmployees(String searchWord);
	public EmployeeDTO retrieveEmployee(String searchWord);
	public int countEmployees();
	public boolean existsEmployee(EmployeeDTO emp);
	public void modifyEmployee(EmployeeDTO emp);
	public void removeEmployee(EmployeeDTO emp);
}
