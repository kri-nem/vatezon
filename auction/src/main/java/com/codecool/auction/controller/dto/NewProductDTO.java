package com.codecool.auction.controller.dto;

import org.springframework.web.multipart.MultipartFile;

public record NewProductDTO (String name,
                             String description,
                             String price,
                             String productType,
                             MultipartFile picture) {}
