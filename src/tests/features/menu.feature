Feature: Menu 
     As a User I want to enter a valid table number and on clicking continue I am taken to the main menu.
     

    Scenario: Success Table Menu
    Given a user goes to Jdwetherspoon site and excepts Privacy Terms
    When the user enters their "69"
    Then the menu page will be displayed