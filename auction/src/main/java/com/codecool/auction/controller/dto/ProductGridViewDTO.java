package com.codecool.auction.controller.dto;

import com.codecool.auction.model.Tag;

import java.math.BigDecimal;
import java.util.Set;
import java.util.UUID;

public record ProductGridViewDTO (String name, BigDecimal price, String picture, UUID id, Set<Tag> tags){
}
