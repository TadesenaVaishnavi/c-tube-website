package com.example.demo.controller;

import com.example.demo.auth.LoginRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

   
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        try {
            userService.register(user); // 🔥 hashes password
            return "User registered successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }

   
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        try {
            User user = userRepository.findByUsername(request.getUsername())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            
            if (!userService.getPasswordEncoder()
                    .matches(request.getPassword(), user.getPassword())) {
                throw new RuntimeException("Invalid password");
            }

           
            return jwtUtil.generateToken(user.getUsername());

        } catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }

    
    @GetMapping("/test")
    public String test() {
        return "Protected API is working!";
    }
}