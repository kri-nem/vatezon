package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.TagListDTO;
import com.codecool.auction.model.Tag;
import com.codecool.auction.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/tags")
public class TagController {
  private final TagService tagService;

  @Autowired
  public TagController(TagService tagService) {
    this.tagService = tagService;
  }

  @GetMapping()
  public List<Tag> getAllTags() {
    return tagService.getAllTags();
  }

  @GetMapping(value = "name")
  public Set<TagListDTO> getAllTagNames() {
    return tagService.findAllByName();
  }

  @PostMapping("add")
  public Tag addTag(@RequestBody Tag tag) {
    tag.setEndpoint(String.join("-", tag.getName().split(" ")).toLowerCase());
    return tagService.addTag(tag);
  }


}
