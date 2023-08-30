package com.codecool.auction.controller.dto;

import java.math.BigDecimal;

public record ProductGridViewDTO (String name, BigDecimal price, String pictureURL){
}
