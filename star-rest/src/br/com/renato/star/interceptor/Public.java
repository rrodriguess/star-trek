package br.com.renato.star.interceptor;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
/**
 * Annotation <code>Public</code> define 
 * quais métodos não necessitam de permissão 
 * de acesso do interceptor.
 * @author rrodr
 * @version 2.0
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD})
public @interface Public {

}
