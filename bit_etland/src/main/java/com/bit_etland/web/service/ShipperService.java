package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.ShipperDTO;

public interface ShipperService {

	public void registShipper(ShipperDTO shi);
	public List<ShipperDTO> bringShipperList();
	public List<ShipperDTO> retrieveShippers(String searchWord);
	public ShipperDTO retrieveShipper(String searchWord);
	public int countShippers();
	public boolean existsShipper(String searchWord);
	public void modifyShipper(ShipperDTO shi);
	public void removeShipper(ShipperDTO shi);
	
}
