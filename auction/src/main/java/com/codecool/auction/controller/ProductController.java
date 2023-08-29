package com.codecool.auction.controller;

import com.codecool.auction.service.ProductService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
