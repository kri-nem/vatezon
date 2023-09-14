package com.codecool.auction.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String description;
    BigDecimal price;
    String picture;
    @ManyToOne
    @JoinColumn(name = "seller_id", referencedColumnName = "user_id")
    User uploader;
    @ManyToOne
    @JoinColumn(name = "buyer_id", referencedColumnName = "user_id")
    User buyer;
    @Enumerated(EnumType.STRING)
    ProductType productType;

    public boolean hasId(String id) {
        return String.valueOf(this.id).equals(id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id);
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
                ", pictureURL='" + picture + '\'' +
                ", uploader=" + uploader +
                ", buyer=" + buyer +
                ", productType=" + productType +
                '}';
    }
}
