package br.com.renato.star.controller;

import java.io.Serializable;

import br.com.caelum.vraptor.ioc.Component;
import br.com.caelum.vraptor.ioc.SessionScoped;
import br.com.renato.star.model.Usuario;

@SessionScoped
@Component
public class UsuarioLogado implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private Usuario usuario;
	private boolean logado = false;

	public boolean isLogado() {
		return logado;
	}

	public void setLogado(boolean logado) {
		this.logado = logado;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	} 	
}
