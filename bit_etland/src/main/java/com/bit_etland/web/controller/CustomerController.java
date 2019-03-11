package com.bit_etland.web.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.proxy.ContextProxy;
import com.bit_etland.web.service.CustomerService;

@SessionAttributes("cus")
@Controller
@RequestMapping("/customer")
public class CustomerController {
	static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired CustomerDTO cust;
	@Autowired CustomerService customerService;
	@Autowired HttpSession session;
	@Autowired ContextProxy pxy;
	
	@RequestMapping(value="/signin", method=RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO param, Model session) {
		logger.info("\n --------- MemberController {} !! ----------","signin");
		cust = customerService.retrieveCustomer(param);
		if(cust != null) {
			session.addAttribute("cus", cust);
		}
		return (cust != null) ? "public:customer/detail.tiles" : "public:home/main.tiles";
	}
	@RequestMapping(value="/detail")
	public String detail(@RequestParam("customerID") String customerID, Model model) {
		logger.info("\n --------- MemberController {} !! ----------","detail");
		System.out.println("조회 파라미터: "+customerID);
		cust.setCustomerID(customerID);
		cust = customerService.retrieveCustomer(cust);
		model.addAttribute("cus", cust);
		return "public:customer/detail.tiles";
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String update(@ModelAttribute CustomerDTO param, Model session, RedirectAttributes red) {
		logger.info("\n ------w--- MemberController {} !! ----------","update");
		customerService.modifyCustomer(param);
		cust = customerService.retrieveCustomer(param);
		session.addAttribute("cus", cust);
		red.addAttribute("customerID", param.getCustomerID());
		
		return "redirect:/customer/detail";
	}
}
