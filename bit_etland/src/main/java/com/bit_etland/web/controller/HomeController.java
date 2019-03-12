package com.bit_etland.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bit_etland.web.proxy.ContextProxy;

@Controller
public class HomeController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired ContextProxy pxy;
	
	@RequestMapping("/") 
	//get 방식이면 value= , method=RequestMethod.GET 디폴트라 생략가능
	public String date(HttpSession session, HttpServletRequest request){
		logger.info("\n --------- Welcome {} !! ----------","Home");
		pxy.setContext();
		return "index.jsp";
	}
	@RequestMapping(value="/move/{dir}/{page}", method=RequestMethod.GET)
	public String move(
			@PathVariable String dir,
			@PathVariable String page) {
		logger.info("\n --------- moeve to {} !! ----------",dir+"/"+page );
		
		return String.format("%s/%s", dir, page);
	}
}
