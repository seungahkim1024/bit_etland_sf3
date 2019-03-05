package com.bit_etland.web.mapper;

import java.util.List;
import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;

public interface CategoryMapper {

	public void insertCategory(CategoryDTO pro);
	public List<CategoryDTO> selectAllCategoryList(Proxy pxy);
	public List<CategoryDTO> selectCategories(Proxy pxy);
	public CategoryDTO selectCategory(CategoryDTO pro);
	public int countCategory(Proxy pxy);
	public boolean existCategory(CategoryDTO pro);
	public void updateCategory(CategoryDTO pro);
	public void deleteCategory(CategoryDTO pro);
}
