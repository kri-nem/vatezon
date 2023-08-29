package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public Collection<ProductGridViewDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    
}
