package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.SupplierDTO;

@Service
public class SupplierServiceImpl implements SupplierService{

	@Override
	public void registSupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<SupplierDTO> bringSupplierList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SupplierDTO> retrieveSuppliers(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SupplierDTO retrieveSupplier(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countSuppliers() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsSupplier(String searchWord) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifySupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeSupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

}
