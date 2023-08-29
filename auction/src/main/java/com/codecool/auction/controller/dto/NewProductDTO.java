package com.codecool.auction.controller.dto;

import com.codecool.auction.service.model.ProductType;
import com.codecool.auction.service.model.User;

import java.math.BigDecimal;
import java.net.URL;
import java.util.Collection;

public record NewProductDTO (String name, String description, BigDecimal price, Collection<URL> pictures,
                             User uploader, ProductType productType) {}
