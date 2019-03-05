package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;


public interface ProductService {

	public void registProduct(ProductDTO pro);
	public List<ProductDTO> bringAllProductList(Proxy pxy);
	public List<ProductDTO> retrieveSomeProducts(Proxy pxy);
	public ProductDTO retrieveProduct(ProductDTO pro);
	public int countProduct(Proxy pxy);
	public boolean existsProduct(ProductDTO pro);
	public void modifyProduct(ProductDTO pro);
	public void removeProduct(ProductDTO pro);
}
