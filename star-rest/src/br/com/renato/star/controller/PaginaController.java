package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.renato.star.interceptor.Public;

@Resource
public class PaginaController {
	
	@Public
	@Path("/acessoNegado")
	public void acessoNegado(){}

}
