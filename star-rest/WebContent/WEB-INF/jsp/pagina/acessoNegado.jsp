<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="<c:url value="/css/main.css"/>" rel="stylesheet" />
<title>Acesso Negado</title>
</head>
<body>
	<div class="container">
		<img src="<c:url value='/img/acessoNegado.png' />">
		<h1>Acesso Negado !!!</h1>
		<h2>É necessário login e senha válidos para acessar o jogo.</h2>
		<h3>Verifique o login e senha e clique abaixo para voltar a tela
		de login</h3>
		<a href='<c:url value="/login"/>'>Voltar</a>
	</div>
	
</body>
</html>