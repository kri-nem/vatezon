package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.service.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("new")
    public Product addNewProduct (@RequestBody NewProductDTO newProduct) {
       return productService.addNewProduct(newProduct);
    }
}
