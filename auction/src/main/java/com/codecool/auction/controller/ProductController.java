package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.Tag;
import com.codecool.auction.service.ProductService;
import com.codecool.auction.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final TagService tagService;

    @Autowired
    public ProductController(ProductService productService, TagService tagService) {
        this.productService = productService;
        this.tagService = tagService;
    }


    @GetMapping("/detailed/{id}")
    public ProductDetailedViewDTO getDetailedView(@PathVariable("id") Long id) {
        return productService.getProductDetailedViewDTO(id);
    }

    @RequestMapping(
            path = "/{user-id}",
            method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public @ResponseBody boolean addNewProduct (
            @PathVariable("user-id") Long userId,
            @ModelAttribute NewProductDTO newProduct) throws IOException {
        return productService.addNewProduct(userId, newProduct);
    }

    @GetMapping
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
