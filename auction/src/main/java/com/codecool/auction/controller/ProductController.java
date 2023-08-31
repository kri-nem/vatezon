package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

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

    @PostMapping()
    public @ResponseBody Product addNewProduct (@RequestBody NewProductDTO newProduct) {
        return productService.addNewProduct(newProduct);
    }

    @GetMapping("types")
    public List<String> getProductTypes () {
        return Arrays.stream(ProductType.values()).map(ProductType::getText).toList();
    }

    @GetMapping("/")
    public List<ProductGridViewDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<ProductGridViewDTO> categorizeProductsBasedOnFilter (@PathVariable String category) {
        return productService.getProductsByCategory(category.toUpperCase());
    }

    @GetMapping("/name/{name}")
    public Collection<ProductGridViewDTO> getProductsByName (@PathVariable String name) {
        return productService.getProductsByName(name);
    }

    //just for postman testing
    @PostMapping("/add")
    public Product addProducts (@RequestBody ProductGridViewDTO product) {
        return productService.addProduct(product);
    }

}
