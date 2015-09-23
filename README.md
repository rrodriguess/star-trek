<h1>README</h1>

Star Trek Rest Rescue

Objetivo do jogo

<p>O objetivo do jogo é resgatar 03 (três) tripulantes perdidos em 
uma área que fora dividida em quadrantes onde ao clicar em um quadrante
se o quadrante conter um tripulante esse quadrante receberá um "X", marcando
o local, caso contrário receberá um "*", nesse caso ocorrerá uma varredura
das proximidades e caso ocorra de haver um tripulante o quadrante e seus 
vizinhos receberam um "!".</p>

Implementação

<p> Fora utilizado o padrão MVC como estrutura do programa, além de uma 
ApiRest para facilitar a identficação das URI's e direcionamento das actions, 
adotado o FrontController VRaptor3, pela simplicidade  e facilidade de operação
e configuração, além da facilidade de migração para um SpringMVC ou até um
Struts. JSP's e JavaScripts foram utilizados para tratar os eventos do lado
do cliente.</p>

<p> O server utilizado foi o TomCat7, devidamente testado e rodando, porém
alguns testes com o Jetty indicaram oscilação do servidor em subir a aplicação.
Outros servidores testados foram o WildFly e o JBoss. onde não ocorreu nenhum 
problema também. 

<p> Para testar a configuração basta acessar a uri: http://localhost:8080/star-rest/ que 
aparecerá na tela o informação que o sistema está rodando.

<p> A documentação fora gerada do Eclipse através do JavaDoc e comentários das
classes.</p>

 Acesso ao jogo

<p> O acesso ao jogo se dá, através da tela: http://localhost:8080/star-rest/login.
Ao digitar o login e senha. Caso a senha esteja incorreta será direcionada a págida de 
acesso negado. </p>

<h1>CONTACT</h1>
<p>Dúvidas, sugestões ou idéias contatar por email: rrodriguez@outlook.com.br</p>
<p>Copyright (c) 23/09/2015.</p>


