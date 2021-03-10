$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "Eu como usuario do sistema quero logar para realizar manutencao no cadastro de funcionarios",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 15,
  "name": "Realizar login com senha invalida",
  "description": "",
  "id": "login;realizar-login-com-senha-invalida",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@negativo"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "informar meu usuario \"treinamentoINM\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "informar minha senha \"111111\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "clicar no botao entre",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "deve apresentar a mensagem \"ERRO!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStep.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 10664722200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "treinamentoINM",
      "offset": 22
    }
  ],
  "location": "LoginStep.informarMeuUsuario(String)"
});
formatter.result({
  "duration": 314111900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111111",
      "offset": 22
    }
  ],
  "location": "LoginStep.informarMinhaSenha(String)"
});
formatter.result({
  "duration": 51356400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicarNoBotaoEntre()"
});
formatter.result({
  "duration": 105600900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERRO!",
      "offset": 28
    }
  ],
  "location": "LoginStep.deve_apresentar_a_mensagem(String)"
});
formatter.result({
  "duration": 55724100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".alert\\-danger\"}\n  (Session info: chrome\u003d89.0.4389.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP0891\u0027, ip: \u0027192.168.43.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\MARCUS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61739}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ea0a691eb42a6005a7d1cf29a98e4fcf\n*** Element info: {Using\u003dclass name, value\u003dalert-danger}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat br.com.inmetrics.page.LoginPage.getMensagemErro(LoginPage.java:28)\r\n\tat br.com.inmetrics.steps.LoginStep.deve_apresentar_a_mensagem(LoginStep.java:55)\r\n\tat ✽.Entao deve apresentar a mensagem \"ERRO!\"(features/Login.feature:20)\r\n",
  "status": "failed"
});
});