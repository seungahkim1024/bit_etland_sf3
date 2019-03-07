package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.SupplierDTO;

@Repository
public class SupplierMapperImpl implements SupplierMapper{

	@Override
	public void insertSupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<SupplierDTO> selectSupplierList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SupplierDTO> selectSuppliers(String searchWord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SupplierDTO selectSupplier(String searchWord) {
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
	public void updateSupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteSupplier(SupplierDTO supp) {
		// TODO Auto-generated method stub
		
	}

}
