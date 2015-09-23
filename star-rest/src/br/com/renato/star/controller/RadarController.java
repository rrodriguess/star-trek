package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
/**
 * Classe <code>RadaController</code>, responsável
 * por direcionar usuários logados para a missão 
 * de resgate.
 * @author rrodr
 * @version 2.0
 */
@Resource
public class RadarController {
	
    
	private Result result;
	
	public RadarController(Result result) {
		this.result = result;
	}
	/**
	 * Método quadrante direciona usuários logados
	 * para a view do jogo.
	 */
	@Path("/radar/quadrante")
	public void quadrante() {};		

}
