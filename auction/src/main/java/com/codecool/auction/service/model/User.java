package com.codecool.auction.service.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private String userName;

    public User(String userName) {
        this.userName = userName;
    }
}
