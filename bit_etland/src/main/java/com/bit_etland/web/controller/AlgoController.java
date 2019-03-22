package com.bit_etland.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bit_etland.web.service.MathService;
import com.bit_etland.web.service.SequenceService;

@Controller
@RequestMapping("/algo")
public class AlgoController {
	static final Logger logger = LoggerFactory.getLogger(AlgoController.class);
	@Autowired SequenceService sequService;
	@Autowired MathService mathService;
	@Autowired Map<String, Object> map;
	@ResponseBody
	@RequestMapping(value="/seq/{kind}", method=RequestMethod.POST)
	public Map<String, Object> sequnce(@PathVariable String kind,
									   @RequestBody Map<String, Object> param) {
		logger.info("\n --------- AlgoController {} !! ----------","sequnce() 진입");
		
		map = new HashMap<String, Object>();
		String start = (String)param.get("start");
		String end = (String)param.get("end");
		String diff = (String)param.get("diff");
		System.out.println("시작값 : "+start);
		System.out.println("kind : "+kind);
		map.put("startNum", start);
		map.put("endNum", end); 
		map.put("diff", diff);
		String result = "";
		switch(kind) {
		case "ari":
			result = sequService.arithmeticSequence(map);
			break;
		case "geo": 
			result = sequService.geometricSequence(map);
			break;
		case "fac": 
			result = sequService.factorialSequence(map);
			break;
		case "fibo": 
			result = sequService.fibonacciSequence(map);
			break;
		case "switch": 
			result = sequService.switchSequence(map);
			break;
		}
		map.put("result", result);
		return map;
	}
}
