package com.bit_etland.web.proxy;

import javax.servlet.http.HttpServletResponse;

public class ResponseProxy implements Proxy{
	private HttpServletResponse response;
	
	@Override
	public void carryOut(Object o) {
		System.out.println("ResponseProxy 진입");		
		//setResponse((HttpServletResponse)o);
	}
}
