package com.codecool.auction.controller.dto;

import com.codecool.auction.model.Product;

public record ProductDetailedViewDTO(String name, String description, String price, String pictureUrl,
                                     String productType, String uploader, String buyer) {

    public ProductDetailedViewDTO(Product product) {
        this(
        product.getName(),
        product.getDescription(),
        product.getPrice().toString(),
        product.getPicture(),
        product.getProductType().getText(),
        product.getUploader().getUserName(),
        product.getBuyer() == null ? "" : product.getBuyer().getUserName());
    }
}
