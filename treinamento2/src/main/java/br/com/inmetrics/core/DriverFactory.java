package br.com.inmetrics.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverFactory {
	
	private static WebDriver driver;
	
	public static final String url = "https://inm-test-app.herokuapp.com/";
	
	private DriverFactory() {}
	
	public static WebDriver getDriver()
	{
		if (driver == null) 
		{
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
		return driver;
	}
	public static void quitDriver()
	{
		if (driver != null)
		{
			driver.quit();
			driver = null;
		}
	}

}
