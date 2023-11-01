package com.HelloUser.HelloUser;

public class Member {
    private String memberName;
    private String memberEmail;
    private int memberId; //används för att kunna ta bort medlemmar

    public Member() {
        
    }

    public Member(String memberName, String memberEmail, int memberId) {
        this.memberName = memberName;
        this.memberEmail = memberEmail;
        this.memberId = memberId;
    }

    //Getters och Setters

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }
    
}
