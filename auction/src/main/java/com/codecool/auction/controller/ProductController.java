package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.ProductType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(@Autowired ProductService productService) { this.productService = productService;
    }

    @GetMapping("detailed/{id}")
    public ProductDetailedViewDTO getDetailedView(@PathVariable("id") String id) {
        return productService.getProductDetailedViewDTO(id);
    }

    @RequestMapping(
            path = "/{user-id}",
            method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public @ResponseBody Product addNewProduct (
            @PathVariable("user-id") Long userId,
            @ModelAttribute NewProductDTO newProduct) {
        return productService.addNewProduct(userId, newProduct);
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
}
