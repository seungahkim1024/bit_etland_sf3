package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

@Repository
public interface ImageMapper {
	
	public void insertImage(ImageDTO img);
	public List<ImageDTO> selectimageList();
	public List<ImageDTO> selectImages(Proxy pxy);
	public ImageDTO selectimage(ImageDTO img);
	public String lastimageSeq();
	public int countImage(Proxy pxy);
	public boolean existImage(ImageDTO img);
	public void updateImage(ImageDTO img);
	public void deleteImage(ImageDTO img);
	
}
