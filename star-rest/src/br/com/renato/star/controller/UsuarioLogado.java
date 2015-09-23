package br.com.renato.star.controller;

import java.io.Serializable;

import br.com.caelum.vraptor.ioc.Component;
import br.com.caelum.vraptor.ioc.SessionScoped;
import br.com.renato.star.model.Usuario;
/**
 * Classe <code>UsuarioLogado</code> responsável
 * por guardar o usuários na sessão e permitir 
 * o acesso pela classe <code>AutorizadorInterceptor</code>.
 * @author rrodr
 * version 2.0
 */
@SessionScoped
@Component
public class UsuarioLogado implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private Usuario usuario;
	private boolean logado = false;
	
	/**Método isLogado, recupera valor verdadeiro 
	 * ou falso do estado  Usuário
	 * @return logado
	 */
	public boolean isLogado() {
		return logado;
	}
	/**
	 * Método setLogado, altera  valor do estado
	 * do usuários
	 * @param logado
	 */
	public void setLogado(boolean logado) {
		this.logado = logado;
	}
	/**
	 * Método getUsuario, recupera Usuário logado 
	 * com seus membros e comportamentos
	 * @return usuario
	 */
	public Usuario getUsuario() {
		return usuario;
	}
	/**
	 * Método setUsuario, altera a referência 
	 * de usuário.
	 * @param usuario
	 */
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	} 	
}
