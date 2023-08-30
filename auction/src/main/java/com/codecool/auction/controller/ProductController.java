package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.service.ProductService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("detailed/{id}")
    public ProductDetailedViewDTO getDetailedView(@PathVariable("id") String id) {
        return productService.getProductDetailedViewDTO(id);
    }
}
