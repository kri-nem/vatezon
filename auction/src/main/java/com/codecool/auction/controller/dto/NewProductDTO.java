package com.codecool.auction.controller.dto;

import com.codecool.auction.model.Tag;
import com.codecool.auction.model.User;

import java.util.Set;

public record NewProductDTO (String name,
                             String description,
                             String price,
                             String picture,
                             User uploader,
                             User buyer,
                             Set<String> tags) {}