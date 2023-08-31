package com.codecool.auction.service.model;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.Optional;

@Getter
@Setter
public class Product {
    private int id;
    private String name;
    private String description;
    private BigDecimal price;
    private String pictureURL;
    private User uploader;
    private Optional<User> buyer;
    private ProductType productType;

    public Product(int id, String name, String description, BigDecimal price, String pictureURL, User uploader, ProductType productType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.pictureURL = pictureURL;
        this.uploader = uploader;
        this.buyer = Optional.empty();
        this.productType = productType;
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

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", pictureURL='" + pictureURL + '\'' +
                ", uploader=" + uploader +
                ", buyer=" + buyer +
                ", productType=" + productType +
                '}';
    }
}
