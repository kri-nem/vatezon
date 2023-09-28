package com.codecool.auction.repository;

import com.codecool.auction.model.User;
import com.codecool.auction.security.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDAO extends JpaRepository<User, Long> {
    User getUserById(Long id);
    List<User> findAllByRole(Role role);
    User findByUserName(String username);
}