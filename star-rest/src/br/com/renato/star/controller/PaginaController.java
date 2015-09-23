package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.renato.star.interceptor.Public;
/**
 * Classe PaginaController, responsável 
 * por direcionar acessos negados para 
 * View
 * @author rrodr
 * @version 2.0
 */
@Resource
public class PaginaController {
	
	/**
	 * Método acessadoNegado, responsável 
	 * por direcionar usuários sem login 
	 * para uma página de aviso.
	 */
	@Public
	@Path("/acessoNegado")
	public void acessoNegado(){}

}
