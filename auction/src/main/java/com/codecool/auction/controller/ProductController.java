package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.model.Tag;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.model.Product;
import com.codecool.auction.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/products")
public class ProductController {

    private final ProductService productService;
    private final TagService tagService;

    @Autowired
    public ProductController(ProductService productService, TagService tagService) {
        this.productService = productService;
        this.tagService = tagService;
    }


    @GetMapping("detailed/{id}")
    public ProductDetailedViewDTO getDetailedView(@PathVariable("id") String id) {
        return productService.getProductDetailedViewDTO(id);
    }

    @PostMapping()
    public @ResponseBody Product addNewProduct (@RequestBody NewProductDTO newProduct) {
        return productService.addNewProduct(newProduct);
    }

    @GetMapping("/")
    public List<ProductGridViewDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public Set<ProductGridViewDTO> categorizeProductsBasedOnFilter (@PathVariable String category) {
        Tag tag = tagService.findTagByEndpoint(category);
        return productService.getProductsByTag(tag);
    }

    @GetMapping("/name/{name}")
    public Collection<ProductGridViewDTO> getProductsByName (@PathVariable String name) {
        return productService.getProductsByName(name);
    }

}
