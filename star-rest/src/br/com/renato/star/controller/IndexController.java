package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.renato.star.interceptor.Public;
/**
 * Classe responsável por verificar configuração
 * do sistema.
 * @author rrodr
 * @version 2.0
 */
@Resource
public class IndexController {
	
	/**
	 * Método responsável por direcionar 
	 * a action para a View.
	 */
	@Public
	@Path("/")
	public void root() {
		System.out.println("Meu sistema com vraptor");
	}

}
