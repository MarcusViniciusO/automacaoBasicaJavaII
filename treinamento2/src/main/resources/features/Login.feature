# language: pt

Funcionalidade: Login
	Eu como usuario do sistema quero logar para realizar manutencao no cadastro de funcionarios
	
	@positivo
	Cenario: Realizar login com sucesso
		Dado que eu esteja na tela de login
		Quando informar meu usuario "treinamentoINM"
		E informar minha senha "123456"
		E clicar no botao entre
		Entao deve abrir pagina de cadastro de funcionarios
	
	@negativo	
	Cenario: Realizar login com senha invalida
		Dado que eu esteja na tela de login
		Quando informar meu usuario "treinamentoINM"
		E informar minha senha "111111"
		E clicar no botao entre
		Entao deve apresentar a mensagem "ERRO!"