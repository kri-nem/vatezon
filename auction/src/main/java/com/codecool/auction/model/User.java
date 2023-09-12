package com.codecool.auction.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "APP_USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    Long id;
    @Column(unique = true)
    String userName;
    String firstName;
    String lastName;
    String password;
    String email;
    @OneToMany(mappedBy = "uploader")
    Set<Product> productsToSell;
    @OneToMany(mappedBy = "buyer")
    Set<Product> productsToBuy;
}
