package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.UserDetailForAdminDTO;
import com.codecool.auction.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

  private final UserService userService;

  public AdminController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/users")
  public List<UserDetailForAdminDTO> getUserDetails () {
    return userService.getUsersForAdmin();
  }
}
