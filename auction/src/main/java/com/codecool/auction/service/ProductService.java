package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.Tag;
import com.codecool.auction.model.User;
import com.codecool.auction.repository.ProductDAO;
import com.codecool.auction.repository.TagDAO;
import com.codecool.auction.repository.UserDAO;
import com.codecool.auction.security.JwtService;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductService {
    final ProductDAO productDAO;
    final UserDAO userDao;
    final TagDAO tagDAO;
    final JwtService jwtService;

    @Autowired
    public ProductService(ProductDAO productDAO, UserDAO userDao, TagDAO tagDAO, JwtService jwtService) {
        this.productDAO = productDAO;
        this.userDao = userDao;
        this.tagDAO = tagDAO;
        this.jwtService = jwtService;
    }

    public List<ProductGridViewDTO> getAllProducts() {
        return productDAO.findAll().stream()
                .map(this::convertProductToGridViewDTO)
                .toList();
    }

    public List<ProductGridViewDTO> getProductsByName(String name) {
        return productDAO.findProductByNameContaining(name).stream()
                .map(this::convertProductToGridViewDTO)
                .toList();
    }

    public Set<ProductGridViewDTO> getProductsByTag(Tag tag) {
        return productDAO.findProductByTagsContaining(tag).stream()
                .map(this::convertProductToGridViewDTO)
                .collect(Collectors.toSet());
    }

    public boolean addNewProduct(String authHeader, NewProductDTO newProduct) throws IOException {
        String[] originalImageName = Objects.requireNonNull(newProduct.picture().getOriginalFilename()).split("\\.");
        String imageExtension = originalImageName[originalImageName.length - 1];

        String fileName =  UUID.randomUUID() + "." + imageExtension;
        File destination = new File(System.getenv("image_folder") + fileName);

        String jwt = authHeader.substring(7);
        String userName = jwtService.extractUsername(jwt);

        Product product = buildProduct(newProduct, userName, fileName);

        newProduct.picture().transferTo(destination);

        productDAO.save(product);

        return true;
    }

    private Product buildProduct(NewProductDTO newProduct, String userName, String fileName) {
        User uploader = userDao.findByUserName(userName);
        Set<Tag> tags = mapTagNamesToTags(newProduct);
        return Product.builder()
                .name(newProduct.name())
                .description(newProduct.description())
                .price(new BigDecimal(newProduct.price()))
                .uploader(uploader)
                .tags(tags)
                .picture(fileName)
                .build();
    }

    private Set<Tag> mapTagNamesToTags(NewProductDTO newProduct) {
        return newProduct.tags().stream()
                .map(tagDAO::findByName)
                .collect(Collectors.toSet());
    }

    private ProductGridViewDTO convertProductToGridViewDTO(Product product) {
        return new ProductGridViewDTO(
                product.getName(),
                product.getPrice(),
                product.getPicture(),
                product.getId(),
                product.getTags());
    }

    public ProductDetailedViewDTO getProductDetailedViewDTO(Long id) {
        System.out.println(productDAO.findById(id));
        return productDAO.findById(id)
                .map(ProductDetailedViewDTO::new)
                .orElseThrow(() -> new RuntimeException("Product with requested id not found"));
    }
}
