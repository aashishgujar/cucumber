package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;

public class elearning1 {
	WebDriver driver = hooksclass.driver;
	
	@Given("User is on homepage")
	public void user_is_on_homepage() throws InterruptedException {
		driver.get("http://retailm1.upskills.in/admin/");
		Thread.sleep(1000);
	   driver.findElement(By.name("username")).sendKeys("admin");
	   driver.findElement(By.name("password")).sendKeys("Admin@123");
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//button[@type='submit']")).click();
	   Thread.sleep(1000);
	   driver.findElement(By.cssSelector("a i.fa.fa-indent.fa-lg")).click();
	   Thread.sleep(5000);
	   driver.findElement(By.cssSelector("a i.fa.fa-tags.fw")).click();
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//a[text()='Downloads']")).click();
	   Thread.sleep(5000);
	 //a[text()='Downloads']
	 //  a i.fa.fa-tags.fw
	}

	@When("user enter invalid Username {string} and password {string}")
	public void user_enter_invalid_Username_and_password(String string, String string2) {
	
	}

	@Then("validation message appears")
	public void validation_message_appears() {
	  
	}

	@When("user enter valid Username {string} and password {string}")
	public void user_enter_valid_Username_and_password(String string, String string2) {

	}

	@When("User enter value in user name field")
	public void user_enter_value_in_user_name_field() {

	}

	@When("user enter value in password field")
	public void user_enter_value_in_password_field() {
		
	}

	@Then("Login button enabled")
	public void login_button_enabled() {

	}


}
