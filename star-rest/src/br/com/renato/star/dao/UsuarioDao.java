package br.com.renato.star.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import br.com.caelum.vraptor.ioc.Component;
import br.com.renato.star.model.Usuario;
import br.com.renato.star.repositorio.RepositorioDeUsuarios;

/**
 * Classe <code>UsuarioDao</code>, simula a persistência
 * em um banco de dados, populando os usuários e setando
 * seus valores, os jogadores são: kirk, spok e hikaru. 
 * @author rrodr
 * @version 2.0
 */
@Component
public class UsuarioDao implements RepositorioDeUsuarios{
	
private final static List<Usuario> USUARIOS = new ArrayList<Usuario>();
	
	static {
		populaUsuarios();
	}
	/**
	 * Método pegaTodos, responsável por liberar uma lista
	 * de usuarios jogáveis.
	 */
	public List<Usuario> pegaTodos() {
		return Collections.unmodifiableList(USUARIOS);
	}
	/**
	 * Método populaUsuarios, responsável por adicionar 
	 * jogadores para o jogo.
	 */
	private static void populaUsuarios() {
		USUARIOS.add(new Usuario("kirk", "123"));
		USUARIOS.add(new Usuario("spok", "321"));
		USUARIOS.add(new Usuario("hikaru", "654"));
	}

}
