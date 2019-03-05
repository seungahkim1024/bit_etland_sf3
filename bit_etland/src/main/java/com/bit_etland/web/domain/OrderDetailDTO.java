package com.bit_etland.web.domain;

import lombok.Data;

@Data
public class OrderDetailDTO {
	private String orderDetailId, orderId, productId, quantity;

}
