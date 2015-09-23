package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;

@Resource
public class RadarController {
	
    
	private Result result;
	
	public RadarController(Result result) {
		this.result = result;
	}
	
	@Path("/radar/quadrante")
	public void quadrante() {};		

}
