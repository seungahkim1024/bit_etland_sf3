package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.SupplierDTO;

@Component
public interface SupplierService {

	public void registSupplier(SupplierDTO supp);
	public List<SupplierDTO> bringSupplierList();
	public List<SupplierDTO> retrieveSuppliers(String searchWord);
	public SupplierDTO retrieveSupplier(String searchWord);
	public int countSuppliers();
	public boolean existsSupplier(String searchWord);
	public void modifySupplier(SupplierDTO supp);
	public void removeSupplier(SupplierDTO supp);
}
