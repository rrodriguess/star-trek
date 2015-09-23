<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link href="<c:url value="/bootstrap/css/bootstrap.min.css"/>" rel="stylesheet" />
<title>Login</title>
</head>
<body>
	<div class="container">
		<form action="<c:url value='/login/autentica' />" method="post">
			<div id="loginModal" class="modal show" tabindex="-1" role="dialog"
				aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							Star Trek rescue
<%-- 							<img border="0" src="<c:url value='/logoImagem/${sessaoUsuario.empresa.id}'/>" /> --%>
						</div>
						<div class="modal-body">
							<form class="form col-md-12 center-block">
								<div class="form-group">
									<input type="text" class="form-control input-lg" name="usuario.nome" value="${usuario.nome }" placeholder="Login" required>
								</div>
								
								<div class="form-group">
									<input type="password" class="form-control input-lg" name="usuario.senha" value="${usuario.senha }" placeholder="Senha" required>
								</div>
								
								<div class="form-group">
									<button class="btn btn-primary btn-md btn-block">Acesso	a Missão</button>	<br /> 
								</div>
								
							</form>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
	


</body>
</html>

<!-- <body> -->
<%-- 	<form action="<c:url value='/login/efetuaLogin'/>" method="post"> --%>
<!-- 		<div id="loginModal" class="modal show" tabindex="-1" role="dialog" -->
<!-- 			aria-hidden="true"> -->
<!-- 			<div class="modal-dialog"> -->
<!-- 				<div class="modal-content"> -->
<!-- 					<div class="modal-header"> -->
<!-- 						<img border="0" -->
<%-- 							src="<c:url value='/logoImagem/${sessaoUsuario.empresa.id}'/>" /> --%>
<!-- 					</div> -->
<!-- 					<div class="modal-body"> -->
<!-- 						<form class="form col-md-12 center-block"> -->
<!-- 							<div class="form-group"> -->
<!-- 								<input type="text" class="form-control input-lg" -->
<!-- 									name="usuario.login" placeholder="Login" required> -->
<!-- 							</div> -->
<!-- 							<div class="form-group"> -->
<!-- 								<input type="password" class="form-control input-lg" -->
<!-- 									name="usuario.senha" placeholder="Senha" required> -->
<!-- 							</div> -->
<!-- 							<div class="form-group"> -->
<!-- 								<button class="btn btn-primary btn-md btn-block">Acesso -->
<!-- 									ao Sistema</button> -->
<!-- 								<br /> <span><a -->
<%-- 									href="<c:url value="/login/formularioAlteraSenha"/>">Alterar --%>
<!-- 										Senha?</a></span> -->
<%-- 								<c:if test="${not empty errors}"> --%>
<!-- 									<div class="alert alert-danger center block"> -->
<%-- 										<c:forEach var="error" items="${errors}"> --%>
<%-- 	       								${error.message} - ${error.category}<br /> --%>
<%-- 										</c:forEach> --%>
<!-- 									</div> -->
<%-- 								</c:if> --%>
<!-- 							</div> -->
<!-- 						</form> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
<%-- 		<script src="<c:url value ="/js/jquery-1.9.1.min.js"/>"></script> --%>
<!-- 	</form> -->