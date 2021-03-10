package br.com.inmetrics.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import br.com.inmetrics.core.DriverFactory;

public class LoginPage {
	
	private WebElement Usuario = DriverFactory.getDriver().findElement(By.name("username"));
	private WebElement Senha = DriverFactory.getDriver().findElement(By.name("pass"));
	private WebElement BotaoEnter = DriverFactory.getDriver().findElement(By.className("login100-form-btn"));
	private WebElement MensagemErro;
	
	public void setUsuario (String valor) {
		Usuario.sendKeys(valor);
	}
	
	public void setSenha (String valor) {
		Usuario.sendKeys(valor);
	}
	
	public void clicarBotaoEnter () {
		BotaoEnter.click();
	}
	
	public String getMensagemErro () {
		MensagemErro = DriverFactory.getDriver().findElement(By.className("alert-danger"));
		return MensagemErro.getText();
		}

}
