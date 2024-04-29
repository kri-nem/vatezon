package com.codecool.auction.repository;


import com.codecool.auction.model.Product;
import com.codecool.auction.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ProductDAO extends JpaRepository<Product, Long> {

  List<Product> findAll();

  List<Product> findProductByNameContaining(String name);

  Set<Product> findProductByTagsContaining(Tag name);
}
