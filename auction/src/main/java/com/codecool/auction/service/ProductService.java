package com.codecool.auction.service;

import com.codecool.auction.service.model.Product;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;

@Service
public class ProductService {
    private Collection<Product> products;

    public ProductService() {
        this.products = new HashSet<>();
    }
}
