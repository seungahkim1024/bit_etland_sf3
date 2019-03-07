package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;

@Component
public interface CategoryService {

	public void registCategory(CategoryDTO pro);
	public List<CategoryDTO> bringAllCategoryList(Proxy pxy);
	public List<CategoryDTO> retrieveSomeCategories(Proxy pxy);
	public CategoryDTO retrieveCategory(CategoryDTO pro);
	public int countCategory(Proxy pxy);
	public boolean existsCategory(CategoryDTO pro);
	public void modifyCategory(CategoryDTO pro);
	public void removeCategory(CategoryDTO pro);
}
