package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;


@Component
public interface MathService {
		// Section 01 Count 알고리즘
		public String count(Map<?,?>param);
		// Section 02 최댓값과 최솟값 
		public String maxMin(Map<?,?>param);
		// Section 03 합계와 평균 
		public String sumAvg(Map<?,?>param);
		// Section 04 소수 판별
		public String decidePrimeFactor(Map<?,?>param);
		// Section 05 소인수 분해 
		public String primeFactorization(Map<?,?>param);
		// Section 06 배수와 공배수 
		// Section 07 약수와 완전수 
		// Section 08 최대공약수와 최소공배수 
		// Section 09 근사값 
		// Section 10 1의 보수와 2의 보수 
		// Section 11 10진수와 2진수의 변환 
		// Section 12 10진수와 16진수의 변환 
		// Section 13 BCD 코드와 3초과 코드의 변환 
		// Section 14 패리티 비트 검증 

}
