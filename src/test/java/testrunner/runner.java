package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/feature",
		glue={"stepdefinition","hooks"},
		plugin={"pretty","html:reports","json:reports/jsonreport.json","junit:reports/xmlreport.xml"},
		monochrome=true,
		dryRun=false
		
		
		)

public class runner {

}
