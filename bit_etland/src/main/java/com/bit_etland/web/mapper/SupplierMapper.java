package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.SupplierDTO;

@Repository
public interface SupplierMapper {

	public void insertSupplier(SupplierDTO supp);
	public List<SupplierDTO> selectSupplierList();
	public List<SupplierDTO> selectSuppliers(String searchWord);
	public SupplierDTO selectSupplier(String searchWord);
	public int countSuppliers();
	public boolean existsSupplier(String searchWord);
	public void updateSupplier(SupplierDTO supp);
	public void deleteSupplier(SupplierDTO supp);
	
}
