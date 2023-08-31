package com.codecool.auction.service;

import com.codecool.auction.controller.dto.NewProductDTO;
import com.codecool.auction.controller.dto.ProductDetailedViewDTO;
import com.codecool.auction.controller.dto.ProductGridViewDTO;
import com.codecool.auction.service.model.Product;
import com.codecool.auction.service.model.ProductType;
import com.codecool.auction.service.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
  private static final User THE_USER = new User("user1");
  private static int nextId = 1;
  private final List<Product> products;

  public ProductService() {
    this.products = new ArrayList<>();
  }

  public List<ProductGridViewDTO> getAllProducts() {
    return products.stream().map(this::convertProductToGridViewDTO).toList();
  }

  public List<ProductGridViewDTO> getProductsByName(String name) {
    return products.stream().filter(product -> product.getName().contains(name))
            .map(this::convertProductToGridViewDTO).toList();
  }

  public List<ProductGridViewDTO> getProductsByCategory (String category) {
    return products.stream()
            .filter(product -> product.getProductType().equals(ProductType.valueOf(category)))
            .map(this::convertProductToGridViewDTO)
            .toList();
  }

  public Product addNewProduct(String name, String description, BigDecimal price, String pictureURL,
                               User uploader, ProductType productType) {
    Product product = new Product(nextId++, name, description, price, pictureURL, uploader, productType);
    products.add(product);
    return product;
  }

  //just for testing
  public Product addProduct(ProductGridViewDTO productDTO) {
    Product p = convertDTOToProducts(productDTO);
    products.add(p);
    return p;
  }

  public Product addNewProduct(NewProductDTO newProduct) {
    String name = newProduct.name();
    String description = newProduct.description();
    String price = newProduct.price();
    BigDecimal product_price = new BigDecimal(price);
    String pictureURL = newProduct.pictureURL();
    String productType = newProduct.productType();
    ProductType product_type = Arrays.stream(ProductType.values()).filter(e -> e.hasSameText(productType)).findFirst().orElse(null);
    return addNewProduct(name, description, product_price, pictureURL, THE_USER, product_type);
  }

  //just for testing
  private Product convertDTOToProducts(ProductGridViewDTO productDTO) {
    return new Product(nextId, productDTO.name(), "null-jet", productDTO.price(), productDTO.pictureURL(), null, productDTO.type());
  }

  private ProductGridViewDTO convertProductToGridViewDTO(Product product) {
    return new ProductGridViewDTO(product.getName(), product.getPrice(), product.getPictureURL(), product.getId(), product.getProductType());
  }

    public ProductDetailedViewDTO getProductDetailedViewDTO(String id) {
        Optional<Product> product = products.stream()
                .filter(p -> p.hasId(id)).findFirst();
        if (product.isPresent()) {
            return product.map(ProductDetailedViewDTO::new).get();
        }
        return null;
    }
}
