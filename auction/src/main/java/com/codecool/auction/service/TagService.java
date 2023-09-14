package com.codecool.auction.service;

import com.codecool.auction.controller.dto.TagListDTO;
import com.codecool.auction.model.Tag;
import com.codecool.auction.repository.TagDAO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TagService {
  private final TagDAO tagDAO;

  public TagService(TagDAO tagDAO) {
    this.tagDAO = tagDAO;
  }

  public Set<TagListDTO> findAllByName() {
    return tagDAO.findAll().stream().map(tag -> this.convertPOJOToDTO(tag)).collect(Collectors.toSet());
  }

  private TagListDTO convertPOJOToDTO (Tag tag) {
    return new TagListDTO(tag.getName());
  }

  public Tag addTag(Tag tag) {
    return tagDAO.save(tag);
  }

  public List<Tag> getAllTags() {
    return tagDAO.findAll();
  }

  public Tag findByID(Long id) {
    return tagDAO.findById(id).orElse(null);
  }

  public Tag findTagByEndpoint (String endpoint) {
    return tagDAO.findByEndpoint(endpoint);
  }
}
