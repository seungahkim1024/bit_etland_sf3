package com.bit_etland.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

@Component
public interface ImageService {
	
	public void addImage(ImageDTO img);
	public List<ImageDTO> retrieveimageList();
	public List<ImageDTO> retrieveImages(Proxy pxy);
	public ImageDTO retrieveimage(ImageDTO img);
	public int countImage(Proxy pxy);
	public boolean existImage(ImageDTO img);
	public void modifyImage(ImageDTO img);
	public void deleteImage(ImageDTO img);
	
}
