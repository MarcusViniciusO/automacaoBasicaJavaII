package br.com.inmetrics.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "src/main/resources",
		glue = {"br.com.inmetrics.steps"},
		plugin = "html:target/report-html",
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false,
		tags = {"@negativo"}
		
		)

public class Runner {

}
