package com.codecool.auction.controller.dto;

import java.math.BigDecimal;
import java.net.URL;

public record ProductGridViewDTO (String name, BigDecimal price, URL picture) {}
