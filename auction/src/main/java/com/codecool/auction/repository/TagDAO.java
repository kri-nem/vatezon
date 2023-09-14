package com.codecool.auction.repository;

import com.codecool.auction.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagDAO extends JpaRepository<Tag, Long> {
  Tag findByName(String name);
  Tag findByEndpoint(String endpoint);
}
