package br.com.renato.star.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import br.com.caelum.vraptor.ioc.Component;
import br.com.renato.star.model.Usuario;
import br.com.renato.star.repositorio.RepositorioDeUsuarios;

@Component
public class UsuarioDao implements RepositorioDeUsuarios{
	
private final static List<Usuario> USUARIOS = new ArrayList<Usuario>();
	
	static {
		populaUsuarios();
	}
	
//	public void salva(Tripulante tripulante) {
//		tripulante.setId(TRIPULANTES.size() +1l);
//		PRODUTOS.add(produto);
//	}

	public List<Usuario> pegaTodos() {
		return Collections.unmodifiableList(USUARIOS);
	}

//	public void remove(Produto produto) {
//		Iterator<Produto> it = PRODUTOS.iterator();
//		while(it.hasNext()) {
//			Produto existente = it.next();
//			if(existente.getId().equals(produto.getId())) {
//				it.remove();
//				break;
//			}
//		}
//	}

	private static void populaUsuarios() {
		USUARIOS.add(new Usuario("Joao", "123"));
		USUARIOS.add(new Usuario("Maria", "321"));
		USUARIOS.add(new Usuario("Zezinho", "654"));
	}

//	public Produto pegaPorId(Long id) {
//		for(Produto produto : TRIPULANTES) {
//			if(produto.getId().equals(id)) return produto;
//		}
//		return null;
//	}

}
