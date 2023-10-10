package com.codecool.auction.controller;

import com.codecool.auction.controller.dto.UserLoginDTO;
import com.codecool.auction.controller.dto.UserSignUpDTO;
import com.codecool.auction.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String checkUserForLogin (@RequestBody UserLoginDTO userLoginDTO){
        return userService.checkLoginUser(userLoginDTO);
    }

    @PostMapping("/signup")
    public void addNewUser (@RequestBody UserSignUpDTO userSignUpDTO) {
        userService.addNewUser(userSignUpDTO);
    }
}
