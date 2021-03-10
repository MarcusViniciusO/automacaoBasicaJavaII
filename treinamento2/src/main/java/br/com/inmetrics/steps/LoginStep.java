package br.com.inmetrics.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import br.com.inmetrics.core.DriverFactory;
import br.com.inmetrics.page.FuncionarioListPage;
import br.com.inmetrics.page.LoginPage;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;

public class LoginStep {
	
	private LoginPage loginPage;
	private FuncionarioListPage funcionarioListPage;
	
	@Before
	private void inicial()
	{
		
	}

	@Dado("^que eu esteja na tela de login$")
	public void queEuEstejaNaTelaDeLogin() throws Throwable {
	    DriverFactory.getDriver().get(DriverFactory.url);
	}

	@E("^informar meu usuario \"([^\"]*)\"$")
	public void informarMeuUsuario(String arg1) throws Throwable {
		loginPage = new LoginPage();
		loginPage.setUsuario(arg1);
	}

	@E("^informar minha senha \"([^\"]*)\"$")
	public void informarMinhaSenha(String arg1) throws Throwable {
		loginPage.setSenha(arg1);
	}

	@E("^clicar no botao entre$")
	public void clicarNoBotaoEntre() throws Throwable {
		loginPage.clicarBotaoEnter();
	}

	@Entao("^deve abrir pagina de cadastro de funcionarios$")
	public void deveAbrirPaginaDeCadastroDeFuncionarios() throws Throwable {
		funcionarioListPage = new FuncionarioListPage();
		
		assertEquals("LOGIN", funcionarioListPage.getLinkNovoFuncionario());
	}
	
	@Entao("^deve apresentar a mensagem \"([^\"]*)\"$")
	public void deve_apresentar_a_mensagem(String arg1) throws Throwable {
		assertTrue(loginPage.getMensagemErro().contains(arg1));
	}



}
