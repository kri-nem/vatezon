package com.codecool.auction.controller.dto;

import org.springframework.web.multipart.MultipartFile;

import com.codecool.auction.model.Tag;

import java.util.Set;

public record NewProductDTO (String name,
                             String description,
                             String price,
                             MultipartFile picture,
                             Set<String> tags) {};