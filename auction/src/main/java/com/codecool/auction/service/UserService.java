package com.codecool.auction.service;
import com.codecool.auction.controller.dto.UserLoginDTO;
import com.codecool.auction.controller.dto.UserSignUpDTO;
import com.codecool.auction.model.User;
import com.codecool.auction.repository.UserDAO;
import com.codecool.auction.security.JwtService;
import com.codecool.auction.security.user.Role;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserService {
    final UserDAO userDAO;
    final PasswordEncoder passwordEncoder;
    final JwtService jwtService;

    @Autowired
    public UserService(UserDAO userDAO, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public ResponseEntity<Integer> checkLoginUser (UserLoginDTO userLoginDTO) {
        User user = getUserByUsername(userLoginDTO.username());

        boolean isPasswordValid = passwordEncoder.matches(userLoginDTO.password(), user.getPassword());
        if (isPasswordValid){
            String token = jwtService.buildToken(user.getUserName());
            return new ResponseEntity<>(200, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(401, HttpStatus.UNAUTHORIZED);
        }
    }

    public User getUserByUsername (String username) {
        return userDAO.getUserByUserName(username);
    }

    public void addNewUser (UserSignUpDTO userSignUpDTO) {
        String username = userSignUpDTO.username();
        String firstName = userSignUpDTO.firstname();
        String lastName = userSignUpDTO.lastname();
        String password = passwordEncoder.encode(userSignUpDTO.password());
        String email = userSignUpDTO.email();
        User user = new User(-1L, username, firstName, lastName, password, email, Role.USER, null, null);
        userDAO.save(user);
    }


}
