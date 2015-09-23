package br.com.renato.star.interceptor;

import br.com.caelum.vraptor.InterceptionException;
import br.com.caelum.vraptor.Intercepts;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.core.InterceptorStack;
import br.com.caelum.vraptor.interceptor.Interceptor;
import br.com.caelum.vraptor.resource.ResourceMethod;
import br.com.renato.star.controller.PaginaController;
import br.com.renato.star.controller.UsuarioLogado;

/**
 * Classe <code>AutorizadorInterceptor</code>, responsável 
 * por não permitir que usuários em login tenham acesso 
 * ao jogo. 
 * @author rrodr
 *
 */
@Intercepts
public class AutorizadorInterceptor implements Interceptor{
	
	private final Result result; 
	private final UsuarioLogado usuarioLogado;
	
	public AutorizadorInterceptor(Result result, UsuarioLogado usuarioLogado) {
		this.result = result;
		this.usuarioLogado = usuarioLogado;
	}
	/**
	 * Método que intercepta a requisição do cliente 
	 * e verifica os métodos permitidos a acesso.
	 */
	public boolean accepts(ResourceMethod method) {
		
		return  !(method.getMethod().isAnnotationPresent(Public.class) ||
				method.getResource().getType().isAnnotationPresent(Public.class));
	}
	/**
	 * Método que válida acesso as páginas 
	 * permitidas através da classe <code>UsuarioLogado</code> e
	 * Annotation <code>Public</code>.
	 */
	public void intercept(InterceptorStack stack, ResourceMethod method, Object resourceInstance) throws InterceptionException {
		// TODO Auto-generated method stub
		if(usuarioLogado.isLogado() == true) {
			stack.next(method, resourceInstance);
		} else {
			result.redirectTo(PaginaController.class).acessoNegado();
		}
	}
}
