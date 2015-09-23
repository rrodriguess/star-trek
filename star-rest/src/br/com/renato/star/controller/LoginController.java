package br.com.renato.star.controller;

import java.util.ArrayList;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.com.renato.star.dao.UsuarioDao;
import br.com.renato.star.interceptor.Public;
import br.com.renato.star.model.Usuario;

@Resource
public class LoginController {
	
	private final Validator validator;
	private final Result result;
	private final UsuarioLogado usuarioLogado;
		
	public LoginController( Validator validator, Result result, UsuarioLogado usuarioLogado) {
		this.validator = validator;
		this.result = result;
		this.usuarioLogado = usuarioLogado;
	}
	
	@Public
	@Get("/login")
	public void formulario() {}
	
	@Public
	@Post
	public void autentica(Usuario usuario) {
		List<Usuario> listUsuarios = new ArrayList<Usuario>();
		UsuarioDao usuarioDao = new UsuarioDao();
		boolean possuiUsuario = false;
		listUsuarios = usuarioDao.pegaTodos();
		
		for (Usuario usuario2 : listUsuarios) {
			if ((usuario2.getNome().equals(usuario.getNome()) && (usuario2.getSenha().equals(usuario.getSenha())))) {
				possuiUsuario = true;
				usuarioLogado.setUsuario(usuario);
				usuarioLogado.setLogado(true);
				break;
			}
		}
		
		if(possuiUsuario == false)
			result.redirectTo(PaginaController.class).acessoNegado();
		else {
			result.redirectTo(RadarController.class).quadrante();
		}
		
	}

}
