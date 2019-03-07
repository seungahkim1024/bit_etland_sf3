package com.bit_etland.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class OrderDetailDTO {
	private String orderDetailId, orderId, productId, quantity;

}
