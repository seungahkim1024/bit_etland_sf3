package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Override
	public void registCategory(CategoryDTO pro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CategoryDTO> bringAllCategoryList(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CategoryDTO> retrieveSomeCategories(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CategoryDTO retrieveCategory(CategoryDTO pro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countCategory(Proxy pxy) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsCategory(CategoryDTO pro) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyCategory(CategoryDTO pro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCategory(CategoryDTO pro) {
		// TODO Auto-generated method stub
		
	}

}
