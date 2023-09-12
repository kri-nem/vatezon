package com.codecool.auction.repository;

import com.codecool.auction.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Long> {
    User getUserByUserName (String username);
}
