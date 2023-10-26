package com.HelloUser.HelloUser;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {
    public List<Member> members = new ArrayList<>(); //Skapar lista "members"

    @GetMapping("/form") //Visar form.html med GetMapping
    String getForm(Model model) {
        model.addAttribute("newMember", new Member()); //Skapa ny medlem
        return "form";
    }

    @PostMapping("/new-member") //Lägg till ny medlem
    String newMember(@ModelAttribute Member newMember) {
        int id = 1;                                                 //
        if (!members.isEmpty()) {                                   // Skapar ett unikt ID. Om listan blir tom börjar ID "räkningen" om från 1
            id = members.get(members.size() - 1).getMemberId() + 1; //
        }
        newMember.setMemberId(id);
        members.add(newMember); //Lägger till den nya medlemmen
        return "redirect:/form"; //Gör så man kommer tillbaks till form.html
    }

    @GetMapping("/member") //Visar medlemslistan
    String getMembers(Model model) {
        model.addAttribute("members", members);
        return "member";
    }

    @GetMapping("remove-member/{id}") //Tar bort medlem med hjälp av ID
    String removeMember(@PathVariable int id) {
        members.removeIf(member -> member.getMemberId() == id);
        System.out.println("Du tog bort medlemmen med id: " + id);
        return "redirect:/member";
    }
}
