package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.repository.ProductDAO;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.Tag;
import com.codecool.auction.repository.TagDAO;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductService {
  final ProductDAO productDAO;
  final TagDAO tagDAO;

  @Autowired
  public ProductService(ProductDAO productDAO, TagDAO tagDAO) {
    this.productDAO = productDAO;
    this.tagDAO = tagDAO;
  }

  public List<ProductGridViewDTO> getAllProducts() {
    return productDAO.findAll().stream().map(this::convertProductToGridViewDTO).toList();
  }

  public List<ProductGridViewDTO> getProductsByName(String name) {
    return productDAO.findProductByNameContaining(name).stream().map(this::convertProductToGridViewDTO).toList();
  }

  public Set<ProductGridViewDTO> getProductsByTag(Tag tag) {
    return productDAO.findProductByTagsContaining(tag).stream().map(this::convertProductToGridViewDTO).collect(Collectors.toSet());
  }

  public Product addNewProduct(NewProductDTO newProduct) {
    Product product = new Product(
            -1L,
            newProduct.name(),
            newProduct.description(),
            new BigDecimal(newProduct.price()),
            newProduct.picture(), newProduct.uploader(), newProduct.buyer(),
            newProduct.tags()
                    .stream()
                    .map(tagDAO::findByName)
                    .collect(Collectors.toSet()));
    productDAO.save(product);
    return product;
  }


  private ProductGridViewDTO convertProductToGridViewDTO(Product product) {
    return new ProductGridViewDTO(product.getName(), product.getPrice(), product.getPicture(), product.getId(), product.getTags());
  }

    public ProductDetailedViewDTO getProductDetailedViewDTO(String id) {
        /*Optional<Product> product = products.stream()
                .filter(p -> p.hasId(id)).findFirst();
        if (product.isPresent()) {
            return product.map(ProductDetailedViewDTO::new).get();
        }*/
        return null;
    }
}