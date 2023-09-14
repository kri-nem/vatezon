package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.repository.ProductDAO;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.ProductType;
import com.codecool.auction.model.User;
import com.codecool.auction.repository.UserDAO;
import com.codecool.auction.model.Tag;
import com.codecool.auction.repository.TagDAO;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductService {
  static final Path PICTURES_PATH = Paths.get("uploaded_pictures/").toAbsolutePath();
  final ProductDAO productDAO;
  final UserDAO userDao;
  final TagDAO tagDAO;

  @Autowired
  public ProductService(ProductDAO productDAO, UserDAO userDao, TagDAO tagDAO) {
    this.productDAO = productDAO;
    this.userDao = userDao;
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
  public Product addNewProduct(Long userId, NewProductDTO newProduct) {
    User uploader = userDao.getUserById(userId);
    Product product = Product.builder()
            .name(newProduct.name())
            .description(newProduct.description())
            .price(new BigDecimal(newProduct.price()))
            .uploader(userDao.getUserById(userId))
            .build();

    productDAO.save(product);

    Long pId = product.getId();
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
