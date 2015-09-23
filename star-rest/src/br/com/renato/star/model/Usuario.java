package br.com.renato.star.model;

/**
 * Classe <code>Usuario</code> responsável
 * por identificar um usuário jogável.
 * @author rrodr
 * @version 2.0
 */
public class Usuario {
	private String nome;
	private String senha;

	public Usuario() {
	}

	public Usuario(String nome, String senha) {
		this.nome = nome;
		this.senha = senha;
	}
	/**
	 * Recupera o nome do usuário.
	 * @return nome
	 */
	public String getNome() {
		return nome;
	}
	/**
	 * Armazena nome de um usuário.
	 * @param nome
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}
	/**
	 * Recupera a senha do usuário.
	 * @return senha
	 */
	public String getSenha() {
		return senha;
	}
	/**
	 * Armazena a senha de um usuário.
	 * @param senha
	 */
	public void setSenha(String senha) {
		this.senha = senha;
	}

}
