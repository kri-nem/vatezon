package com.codecool.auction.service;

import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import com.codecool.auction.service.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.net.URL;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private static int nextId = 1;
    private final Collection<Product> products;

    public ProductService() {
        this.products = new HashSet<>();
    }

    public Product addNewProduct(int id, String name, String description, BigDecimal price, Collection<URL> pictures,
                                 User uploader, ProductType productType) {
        Product product = new Product(nextId++, name, description, price, pictures, uploader, productType);
        products.add(product);
        return product;
    }

    public Set<ProductGridViewDTO> getAllProducts () {
        return products.stream().map(product -> convertProductToGridViewDTO(product)).collect(Collectors.toSet());
    }

    private ProductGridViewDTO convertProductToGridViewDTO (Product product) {
        return new ProductGridViewDTO(product.getName(), product.getPrice(), product.getFirstPictures());
    }
}
