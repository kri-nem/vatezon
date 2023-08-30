package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping()
    public @ResponseBody Product addNewProduct (@RequestBody NewProductDTO newProduct) {
        return productService.addNewProduct(newProduct);
    }

    @GetMapping("types")
    public List<String> getProductTypes () {
        return Arrays.stream(ProductType.values()).map(ProductType::getText).toList();
    }
}
