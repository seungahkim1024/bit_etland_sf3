package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.ShipperDTO;

public interface ShipperMapper {

	public void insertShipper(ShipperDTO ship);
	public List<ShipperDTO> selectShipperList();
	public List<ShipperDTO> selectShippers(String searchWord);
	public ShipperDTO selectShipper(String searchWord);
	public int countShippers();
	public boolean existShipper(String searchWord);
	public void updateShipper(ShipperDTO ship);
	public void deleteShipper(ShipperDTO ship);
	
}