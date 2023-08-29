package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import com.codecool.auction.service.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.net.URL;
import java.util.Collection;
import java.util.HashSet;

@Service
public class ProductService {
    private static int nextId = 1;
    private Collection<Product> products;

    public ProductService() {
        this.products = new HashSet<>();
    }

    public Product addNewProduct(String name, String description, BigDecimal price, Collection<URL> pictures,
                                 User uploader, ProductType productType) {
        Product product = new Product(nextId++, name, description, price, pictures, uploader, productType);
        products.add(product);
        return product;
    }

    public Product addNewProduct(NewProductDTO newProduct){
        String name = newProduct.name();
        String description = newProduct.description();
        BigDecimal price = newProduct.price();
        Collection<URL> pictures = newProduct.pictures();
        User uploader = newProduct.uploader();
        ProductType productType = newProduct.productType();
        return addNewProduct(name, description, price, pictures, uploader, productType);
    }
}
