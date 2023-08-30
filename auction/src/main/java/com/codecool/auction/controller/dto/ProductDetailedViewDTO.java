package com.codecool.auction.controller.dto;

import com.codecool.auction.service.model.Product;

import java.util.List;

public record ProductDetailedViewDTO(String name, String description, String price, String pictureUrl,
                                     String productType, String uploader, String buyer) {

    public ProductDetailedViewDTO(Product product) {
        this(
        product.getName(),
        product.getDescription(),
        product.getPrice().toString(),
        product.getPictureUrl(),
        product.getProductType().getText(),
        product.getUploader().getUserName(),
        product.getBuyer().isPresent() ? product.getBuyer().get().getUserName() : "");
    }
}
