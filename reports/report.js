$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/elearning.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "aashish",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning1.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter invalid Username \"aashish\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning1.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning1.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning1.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User enter value in user name field",
  "keyword": "When "
});
formatter.match({
  "location": "elearning1.user_enter_value_in_user_name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter value in password field",
  "keyword": "And "
});
formatter.match({
  "location": "elearning1.user_enter_value_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning1.login_button_enabled()"
});
formatter.result({
  "status": "passed"
});
});