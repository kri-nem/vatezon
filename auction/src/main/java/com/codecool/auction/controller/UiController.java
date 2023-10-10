package com.codecool.auction.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UiController {

    @GetMapping(value = {"/", "/products", "/addProduct", "/login", "/signup"})
    public String getIndex() {
        return "/index.html";
    }
}
