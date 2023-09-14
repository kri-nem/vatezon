package com.codecool.auction.controller.dto;

import com.codecool.auction.model.Tag;

import java.math.BigDecimal;
import java.util.Set;

public record ProductGridViewDTO (String name, BigDecimal price, String picture, Long id, Set<Tag> tags){
}
