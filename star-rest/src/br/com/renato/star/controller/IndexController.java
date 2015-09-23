package br.com.renato.star.controller;

import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.renato.star.interceptor.Public;

@Resource
public class IndexController {
	
	@Public
	@Path("/")
	public void root() {
		System.out.println("Meu sistema com vraptor");
	}

}
