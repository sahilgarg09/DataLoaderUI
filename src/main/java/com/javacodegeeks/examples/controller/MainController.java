package com.javacodegeeks.examples.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dataloader.connection.Connector;
@Controller
public class MainController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homepage() {
		return "index";
	}

	@RequestMapping(value = "/login_request", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,String> sfdcLogin(@RequestHeader String username, @RequestHeader String password,
			@RequestHeader String version, @RequestHeader String orgtype) {
		return Connector.loginToSalesforce(username, password, version, orgtype);
	}
}
