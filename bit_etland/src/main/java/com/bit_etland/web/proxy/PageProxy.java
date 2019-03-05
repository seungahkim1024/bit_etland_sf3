package com.bit_etland.web.proxy;

public class PageProxy implements Proxy{
	private Pagination page;

	@Override
	public void carryOut(Object o) {
		//setPage((Pagination)o);
	}
}
