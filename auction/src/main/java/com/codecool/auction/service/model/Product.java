package com.codecool.auction.service.model;

import java.math.BigDecimal;
import java.net.URL;
import java.util.Collection;
import java.util.Objects;

public class Product {
    private static int nextId = 1;
    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private Collection<URL> pictures;
    private User uploader;
    private User buyer;
    private ProductType productType;

    public Product(String name, String description, BigDecimal price, Collection<URL> pictures, User uploader, User buyer, ProductType productType) {
        this.id = nextId++;
        this.name = name;
        this.description = description;
        this.price = price;
        this.pictures = pictures;
        this.uploader = uploader;
        this.buyer = buyer;
        this.productType = productType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return id == product.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
