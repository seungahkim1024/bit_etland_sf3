package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;


public interface ProductMapper {

	public void insertProduct(ProductDTO pro);
	public List<ProductDTO> selectAllProductList(Proxy pxy);
	public List<ProductDTO> selectProducts(Proxy pxy);
	public ProductDTO selectProduct(ProductDTO pro);
	public int countProduct(Proxy pxy);
	public boolean existProduct(ProductDTO pro);
	public void updateProduct(ProductDTO pro);
	public void deleteProduct(ProductDTO pro);
}
