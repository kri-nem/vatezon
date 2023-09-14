package com.codecool.auction.controller.dto;

import com.codecool.auction.model.Product;
import com.codecool.auction.model.Tag;

import java.util.Set;

public record ProductDetailedViewDTO(String name, String description, String price, String picture,
                                     Set<Tag> tags, String uploader, String buyer) {

    public ProductDetailedViewDTO(Product product) {
        this(
        product.getName(),
        product.getDescription(),
        product.getPrice().toString(),
        product.getPicture(),
        product.getTags(),
        product.getUploader().getUserName(),
        product.getBuyer() == null ? "" : product.getBuyer().getUserName());
    }
}
