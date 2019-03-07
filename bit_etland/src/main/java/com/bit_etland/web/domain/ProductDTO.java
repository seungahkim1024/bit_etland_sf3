package com.bit_etland.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class ProductDTO {
	private String productId, productName, supplierId, unit, price, categoryId;

}
