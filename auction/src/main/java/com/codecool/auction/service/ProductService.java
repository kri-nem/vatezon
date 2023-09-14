package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.repository.ProductDAO;
import com.codecool.auction.model.Product;
import com.codecool.auction.model.ProductType;
import com.codecool.auction.model.User;
import com.codecool.auction.repository.UserDAO;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductService {
  static final Path PICTURES_PATH = Paths.get("uploaded_pictures/").toAbsolutePath();
  final ProductDAO productDAO;
  final UserDAO userDao;

  @Autowired
  public ProductService(ProductDAO productDAO, UserDAO userDao) {
    this.productDAO = productDAO;
    this.userDao = userDao;
  }

  public List<ProductGridViewDTO> getAllProducts() {
    return null; /*products.stream().map(this::convertProductToGridViewDTO).toList();*/
  }

  public List<ProductGridViewDTO> getProductsByName(String name) {
    return null; /*products.stream().filter(product -> product.getName().contains(name))
            .map(this::convertProductToGridViewDTO).toList();*/
  }

  public List<ProductGridViewDTO> getProductsByCategory (String category) {
    return null; /*products.stream()
            .filter(product -> product.getProductType().equals(ProductType.valueOf(category)))
            .map(this::convertProductToGridViewDTO)
            .toList();*/
  }

  public Product addNewProduct(String name, String description, BigDecimal price, String pictureURL,
                               User uploader, ProductType productType) {
    /*Product product = new Product(nextId++, name, description, price, pictureURL, uploader, productType);
    products.add(product);
    return product;*/
    return null;
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
    /*String name = newProduct.name();
    String description = newProduct.description();
    String price = newProduct.price();
    BigDecimal product_price = new BigDecimal(price);
    String pictureURL = newProduct.pictureURL();
    String productType = newProduct.productType();
    ProductType product_type = Arrays.stream(ProductType.values()).filter(e -> e.hasSameText(productType)).findFirst().orElse(null);
    return addNewProduct(name, description, product_price, pictureURL, THE_USER, product_type);*/
    return null;
  }

  private ProductGridViewDTO convertProductToGridViewDTO(Product product) {
    return null; /*new ProductGridViewDTO(product.getName(), product.getPrice(), product.getPictureURL(), product.getId(), product.getProductType());*/
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
