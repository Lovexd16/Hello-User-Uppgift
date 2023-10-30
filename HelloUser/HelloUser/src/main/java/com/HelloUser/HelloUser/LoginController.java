package com.HelloUser.HelloUser;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    
    @GetMapping("/login") //Gör så URLen blir http://localhost:8080/login
    String getLogin() {
        return "login";
    }
}
