package com.codecool.auction.service.model;

import java.math.BigDecimal;
import java.net.URL;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class Product {
    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private String pictureUrl;
    private User uploader;
    private Optional<User> buyer;
    private ProductType productType;

    public Product(int id, String name, String description, BigDecimal price, String pictureUrl, User uploader, ProductType productType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.uploader = uploader;
        this.buyer = Optional.empty();
        this.productType = productType;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public User getUploader() {
        return uploader;
    }

    public Optional<User> getBuyer() {
        return buyer;
    }

    public ProductType getProductType() {
        return productType;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public boolean hasId(String id) {
        return String.valueOf(this.id).equals(id);
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
