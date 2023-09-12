package com.codecool.auction.controller.dto;

public record NewProductDTO (String name,
                             String description,
                             String price,
                             String pictureURL,
                             String productType) {}
