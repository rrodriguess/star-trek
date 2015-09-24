<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<head lang="pt-br">
    <meta charset="UTF-8">
    <title>Star Trek Rest</title>        
    <link href="<c:url value="/css/main.css"/>" rel="stylesheet" />
    <style>
        td {
            width: 30px;
            height: 30px;
        }

        .btn {
            width: 30px;
            height: 30px;
            border: 1px solid #000000;
        }

    </style>
</head>
<div class="container">
    <h1>Missão Resgate Star - Trek</h1>

    <div class="geral">
        <div class="instrucoes">
            <h2>Instruções</h2>
            <p> A tarefa consiste em encontrar 03 tripulantes perdidos da StarTrek.</p>
            <p> Ao clicar com o mouse sobre o quadrante se encontrar um tripulante aparecerá uma
            mensagem alertando do encontro e um " X " indicará o local, caso contrário  se não
            for o local do tripulante um ' * ' irá aparecer.
            <p> Feito isso o radar irá verificar as adjacências e caso encontre um possível
            tripulante irá marcar uma área com " ! ", senão, irá marcar com " * ".</p>
            <p> A cada clique de mouse será somado um sinalizador, indicando a quantidade e ao
            encontrar os três tripulantes o jogo encerra.</p>
            <p> Boa sorte.</p>
            <p> Vida longa e prosperá.</p>
        </div>
        <table class= tabela>
            <script type="text/javascript">
                var k = 0;

                for (var i = 0; i < 10; i++) {
                    document.write('<tr linha=' + i + '>');

                    for (var j = 0; j < 10; j++) {
                        var k = k + 1; // variavel que indica a posição e identificação da célula
                        var num = 0;

                        /**if(k == 12 || k == 74 || k == 38)
                             num = -1;
                        else
                            num = Math.floor(Math.random()*2); */

                        document.write('<td><input type="button" class="btn" id="'+k+'" onclick= "conta(); controle('+k+'); " value=" " ></td>');
                    }
                    document.write('</tr>');
                }
            </script>
        </table>
    </div>

    <div id="resultado" class="clearfix">
        <label class="txt_btn">Sinalizador</label> <input class="semBorda" type="text" id="count" name="contador" size="3" value="0">
        <img class="emblema" src="<c:url value='/img/star.jpg' />">
        <label class="txt_btn">Perdidos</label> <input  class="semBorda" type="text" id="resg" name="resgatado" size="3" value="3">
    </div>
    <br>
    <br>
	<div id="rodape">
		<p>Compátivel com: Mozila Firefox, Google Chrome e Opera.</p> 
	</div>
</div>	
</body>
	<script src="<c:url value ="/js/main.js"/>"></script>
</html>
