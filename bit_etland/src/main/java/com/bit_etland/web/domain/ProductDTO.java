package com.bit_etland.web.domain;

import lombok.Data;

@Data
public class ProductDTO {
	private String productId, productName, supplierId, unit, price, categoryId;

}
