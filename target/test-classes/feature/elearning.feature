Feature: Elearning login page

  Background: Background section
    Given User is on homepage

  Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and password "<password>"
    Then validation message appears

    Examples: 
      | username | password |
      | aashish  |   123456 |

  @Smoke
  Scenario: verify login page
    When User enter value in user name field
    And user enter value in password field
    Then Login button enabled
