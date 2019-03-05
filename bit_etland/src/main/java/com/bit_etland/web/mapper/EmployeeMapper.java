package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.EmployeeDTO;

public interface EmployeeMapper {

	public void insertEmployee(EmployeeDTO emp);
	public List<EmployeeDTO> selectEmployeesList();
	public List<EmployeeDTO> selectEmployees(String searchWord);
	public EmployeeDTO selectEmployee(String searchWord);
	public int countEmployees();
	public boolean existsEmployee(EmployeeDTO emp);
	public void updateEmployee(EmployeeDTO emp);
	public void deleteEmployee(EmployeeDTO emp);
}
