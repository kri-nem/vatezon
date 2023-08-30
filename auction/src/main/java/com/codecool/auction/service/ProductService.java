package com.codecool.auction.service;

import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import com.codecool.auction.service.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

@Service
public class ProductService {
    private static int nextId = 1;
    private Collection<Product> products = PRODUCTS;

    public ProductService() {
        this.products = new HashSet<>();
    }

    public Product addNewProduct(int id, String name, String description, BigDecimal price, Collection<URL> pictures,
                                 User uploader, ProductType productType) {
        Product product = new Product(nextId++, name, description, price, pictureUrl, uploader, productType);
        products.add(product);
        return product;
    }

    public ProductDetailedViewDTO getProductDetailedViewDTO(String id) {
        Optional<Product> product = products.stream()
                .filter(p -> p.hasId(id)).findFirst();
        if (product.isPresent()) {
            return product.map(ProductDetailedViewDTO::new).get();
        }
        return null;
    }
}
