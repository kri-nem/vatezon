package com.codecool.auction.service.model;

import java.math.BigDecimal;
import java.net.URL;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;

public class Product {
    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private Collection<URL> pictures;
    private User uploader;
    private Optional<User> buyer;
    private ProductType productType;

    public Product(int id, String name, String description, BigDecimal price, Collection<URL> pictures, User uploader, ProductType productType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.pictures = pictures;
        this.uploader = uploader;
        this.buyer = Optional.empty();
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
