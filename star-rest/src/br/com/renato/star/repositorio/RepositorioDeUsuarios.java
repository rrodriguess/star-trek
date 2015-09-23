package br.com.renato.star.repositorio;

import java.util.List;

import br.com.renato.star.model.Usuario;
/**
 * Interface <code>RepositorioDeUsuario</code> é 
 * responsável por obrigar a classe <code>UsuarioDao</code>
 * a definir métodos que ela impõe.
 * @author rrodr
 * @version 2.0
 * @see UsuarioDao
 */
public interface RepositorioDeUsuarios {

	List<Usuario> pegaTodos();

}
