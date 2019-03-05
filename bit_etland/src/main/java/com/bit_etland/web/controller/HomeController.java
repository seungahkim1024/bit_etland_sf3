package com.bit_etland.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String date(Model model){
		model.addAttribute("serverTime", new SimpleDateFormat("yy-MM-dd").format(new Date()));
		return "home";
	}
}
