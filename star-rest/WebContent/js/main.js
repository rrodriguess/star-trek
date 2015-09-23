
var vCont = 0;
var tripulantes = 3;
function controle(num, k) {
    k = k - 1;
    if(num == -1){
        var valor = document.getElementsByTagName("input");
        valor[k].getAttribute("id");
        valor[k].setAttribute("value", 'X');
        alert("Voce encontrou um tripulante");
        tripulantes = tripulantes - 1;
        resgate(tripulantes);
        if(tripulantes == 0) {
            alert("Todos os Tripulantes foram encontrados com " +vCont+ " sinalizadores");
            parent.window.document.location.href = '';
            //location.reload();
        }
    }else{
        var valor = document.getElementsByTagName("input");
        valor[k].getAttribute("id");
        valor[k].setAttribute("value", "*");

        verificaAdjacencias(k);
    }
}

function verificaAdjacencias(k) {
    var valor = document.getElementsByTagName("input");

    if(valor[k].getAttribute("id") % 10 == 0  && valor[k].getAttribute("id") != 10) {
        //verifica da direita para esquerda
        //adjacencia acima
        valor[k - 10].getAttribute("id");
        if (valor[k - 10].getAttribute("id") == 12 || valor[k - 10].getAttribute("id") == 74 || valor[k - 10].getAttribute("id") == 38) {
            if(valor[k - 10].value != 'X') {
                valor[k - 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 10);
            }
        } else {
            if ((valor[k - 10].value != 'X') && (valor[k - 10].value != "!")) {
                valor[k - 10].setAttribute('value', '*');
            }
        }
        valor[k - 11].getAttribute("id");
        if (valor[k - 11].getAttribute("id") == 12 || valor[k - 11].getAttribute("id") == 74 || valor[k - 11].getAttribute("id") == 38) {
            if(valor[k - 11].value != 'X') {
                valor[k - 11].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 11);
            }
        } else {
            if ((valor[k - 11].value != 'X') && (valor[k - 11].value != "!")) {
                valor[k - 11].setAttribute('value', '*');
            }
        }
        // adjacencia do lado
       if( valor[k - 1].getAttribute("id") == 12 || valor[k + 1].getAttribute("id") == 74 || valor[k +1].getAttribute("id") == 38) {
           if(valor[k - 1].value() != 'X') {
               valor[k - 1].setAttribute('value', '!');

               adjacenciaDosTripulantes(k - 1);
           }
       } else {
           if((valor[k - 1].value != 'X') && (valor[k+1].value != '!')) {
               valor[k - 1].setAttribute('value', "*");
           }
       }
        // ajdacencia de baixo
        valor[k + 9].getAttribute("id");
        if (valor[k + 9].getAttribute("id") == 12 || valor[k + 9].getAttribute("id") == 74 || valor[k + 9].getAttribute("id") == 38) {
            if(valor[k + 9].value != 'X') {
                valor[k + 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 9);
            }
        } else {
            if ((valor[k + 9].value != 'X') && (valor[k + 9].value != "!")) {
                valor[k + 9].setAttribute('value', '*');
            }
        }
        valor[k + 10].getAttribute("id");
        if (valor[k + 10].getAttribute("id") == 12 || valor[k + 10].getAttribute("id") == 74 || valor[k + 10].getAttribute("id") == 38) {
            if(valor[k + 10].value != 'X') {
                valor[k + 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 10);
            }
        } else {
            if ((valor[k + 10].value != 'X') && (valor[k + 10].value != "!")) {
                valor[k + 10].setAttribute('value', '*');
            }
        }

    } else if (valor[k].getAttribute("id") == 91){
        valor[k - 10].getAttribute("id");
        if (valor[k - 10].getAttribute("id") == 12 || valor[k - 10].getAttribute("id") == 74 || valor[k - 10].getAttribute("id") == 38) {
            if(valor[k - 10].value != 'X') {
                valor[k - 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 10);
            }
        } else {
            if ((valor[k - 10].value != 'X') && (valor[k - 10].value != "!")) {
                valor[k - 10].setAttribute('value', '*');
            }
        }

        valor[k + 1].getAttribute("id");
        if (valor[k + 1].getAttribute("id") == 12 || valor[k + 1].getAttribute("id") == 74 || valor[k + 1].getAttribute("id") == 38) {
            if (valor[k + 1].value != 'X') {
                valor[k + 1].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 1);
            }
        } else {
            if ((valor[k + 1].value != 'X') && (valor[k + 1].value != "!")) {
                valor[k + 1].setAttribute('value', '*');
            }
        }

        valor[k - 9].getAttribute("id");
        if (valor[k - 9].getAttribute("id") == 12 || valor[k - 9].getAttribute("id") == 74 || valor[k - 9].getAttribute("id") == 38) {
            if(valor[k - 9].value != 'X') {
                valor[k - 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 9);
            }
        } else {
            if ((valor[k - 9].value != 'X') && (valor[k - 9].value != "!")) {
                valor[k - 9].setAttribute('value', '*');
            }
        }

    } else if(valor[k].getAttribute("id") == 10) {
        if( valor[k - 1].getAttribute("id") == 12 || valor[k + 1].getAttribute("id") == 74 || valor[k +1].getAttribute("id") == 38) {
            if(valor[k - 1].value() != 'X') {
                valor[k - 1].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 1);
            }
        } else {
            if((valor[k - 1].value != 'X') && (valor[k+1].value != '!')) {
                valor[k - 1].setAttribute('value', "*");
            }
        }

        valor[k + 10].getAttribute("id");
        if (valor[k + 10].getAttribute("id") == 12 || valor[k + 10].getAttribute("id") == 74 || valor[k + 10].getAttribute("id") == 38) {
            if(valor[k + 10].value != 'X') {
                valor[k + 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 10);
            }
        } else {
            if ((valor[k + 10].value != 'X') && (valor[k + 10].value != "!")) {
                valor[k + 10].setAttribute('value', '*');
            }
        }

        valor[k + 9].getAttribute("id");
        if (valor[k + 9].getAttribute("id") == 12 || valor[k + 9].getAttribute("id") == 74 || valor[k + 9].getAttribute("id") == 38) {
            if(valor[k + 9].value != 'X') {
                valor[k + 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 9);
            }
        } else {
            if ((valor[k + 9].value != 'X') && (valor[k + 9].value != "!")) {
                valor[k + 9].setAttribute('value', '*');
            }
        }



    } else if(valor[k].getAttribute("id") % 10 == 1) {
        //verifica da esquerda para direita

        valor[k + 1].getAttribute("id");
        if (valor[k + 1].getAttribute("id") == 12 || valor[k + 1].getAttribute("id") == 74 || valor[k + 1].getAttribute("id") == 38) {
            if(valor[k + 1].value != 'X') {
                valor[k + 1].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 1);
            }
        } else {
            if ((valor[k + 1].value != 'X') && (valor[k + 1].value != "!")) {
                valor[k + 1].setAttribute('value', '*');
            }
        }

        valor[k + 10].getAttribute("id");
        if (valor[k + 10].getAttribute("id") == 12 || valor[k + 10].getAttribute("id") == 74 || valor[k + 10].getAttribute("id") == 38) {
            if(valor[k + 10].value != 'X') {
                valor[k + 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 10);
            }
        } else {
            if ((valor[k + 10].value != 'X') && (valor[k + 10].value != "!")) {
                valor[k + 10].setAttribute('value', '*');
            }
        }

        valor[k + 11].getAttribute("id");
        if (valor[k + 11].getAttribute("id") == 12 || valor[k + 11].getAttribute("id") == 74 || valor[k + 11].getAttribute("id") == 38) {
            if(valor[k + 11].value != 'X') {
                valor[k + 11].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 11);
            }
        } else {
            if ((valor[k + 11].value != 'X') && (valor[k + 11].value != "!")) {
                valor[k + 11].setAttribute('value', '*');
            }
        }

        valor[k - 10].getAttribute("id");
        if (valor[k - 10].getAttribute("id") == 12 || valor[k - 10].getAttribute("id") == 74 || valor[k - 10].getAttribute("id") == 38) {
            if(valor[k - 10].value != 'X') {
                valor[k - 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 10);
            }
        } else {
            if ((valor[k - 10].value != 'X') && (valor[k - 10].value != "!")) {
                valor[k - 10].setAttribute('value', '*');
            }
        }

        valor[k - 9].getAttribute("id");
        if (valor[k - 9].getAttribute("id") == 12 || valor[k - 9].getAttribute("id") == 74 || valor[k - 9].getAttribute("id") == 38) {
            if(valor[k - 9].value != 'X') {
                valor[k - 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 9);
            }
        } else {
            if ((valor[k - 9].value != 'X') && (valor[k - 9].value != "!")) {
                valor[k - 9].setAttribute('value', '*');
            }
        }


    } else { // se o resto da divisão não for 0 ou 1;
        valor[k + 1].getAttribute("id");
        if (valor[k + 1].getAttribute("id") == 12 || valor[k + 1].getAttribute("id") == 74 || valor[k + 1].getAttribute("id") == 38) {
            if (valor[k + 1].value != 'X') {
                valor[k + 1].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 1);
            }
        } else {
            if ((valor[k + 1].value != 'X') && (valor[k + 1].value != "!")) {
                valor[k + 1].setAttribute('value', '*');
            }
        }

        valor[k - 1].getAttribute("id");
        if (valor[k - 1].getAttribute("id") == 12 || valor[k - 1].getAttribute("id") == 74 || valor[k - 1].getAttribute("id") == 38) {
            if (valor[k - 1].value != 'X') {
                valor[k - 1].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 1);
            }
        } else {
            if ((valor[k - 1].value != 'X') && (valor[k - 1].value != "!")) {
                valor[k - 1].setAttribute('value', '*');
            }
        }

        valor[k + 10].getAttribute("id");
        if (valor[k + 10].getAttribute("id") == 12 || valor[k + 10].getAttribute("id") == 74 || valor[k + 10].getAttribute("id") == 38) {
            if (valor[k + 10].value != 'X') {
                valor[k + 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 10);
            }
        } else {
            if ((valor[k + 10].value != 'X') && (valor[k + 10].value != "!")) {
                valor[k + 10].setAttribute('value', '*');
            }
        }
        valor[k + 11].getAttribute("id");
        if (valor[k + 11].getAttribute("id") == 12 || valor[k + 11].getAttribute("id") == 74 || valor[k + 11].getAttribute("id") == 38) {
            if (valor[k + 11].value != 'X') {
                valor[k + 11].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 11);
            }
        } else {
            if ((valor[k + 11].value != 'X') && (valor[k + 11].value != "!")) {
                valor[k + 11].setAttribute('value', '*');
            }
        }

        valor[k + 9].getAttribute("id");
        if (valor[k + 9].getAttribute("id") == 12 || valor[k + 9].getAttribute("id") == 74 || valor[k + 9].getAttribute("id") == 38) {
            if (valor[k + 9].value != 'X') {
                valor[k + 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k + 9);
            }
        } else {
            if ((valor[k + 9].value != 'X') && (valor[k + 9].value != "!")) {
                valor[k + 9].setAttribute('value', '*');
            }
        }


        valor[k - 10].getAttribute("id");
        if (valor[k - 10].getAttribute("id") == 12 || valor[k - 10].getAttribute("id") == 74 || valor[k - 10].getAttribute("id") == 38) {
            if (valor[k - 10].value != 'X') {
                valor[k - 10].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 10);
            }
        } else {
            if ((valor[k - 10].value != 'X') && (valor[k - 10].value != "!")) {
                valor[k - 10].setAttribute('value', '*');
            }
        }

        valor[k - 9].getAttribute("id");
        if (valor[k - 9].getAttribute("id") == 12 || valor[k - 9].getAttribute("id") == 74 || valor[k - 9].getAttribute("id") == 38) {
            if (valor[k - 9].value != 'X') {
                valor[k - 9].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 9);
            }
        } else {
            if ((valor[k - 9].value != 'X') && (valor[k - 9].value != "!")) {
                valor[k - 9].setAttribute('value', '*');
            }
        }

        valor[k - 11].getAttribute("id");
        if (valor[k - 11].getAttribute("id") == 12 || valor[k - 11].getAttribute("id") == 74 || valor[k - 11].getAttribute("id") == 38) {
            if (valor[k - 11].value != 'X') {
                valor[k - 11].setAttribute('value', '!');

                adjacenciaDosTripulantes(k - 11);
            }
        } else {
            if ((valor[k - 11].value != 'X') && (valor[k - 11].value != "!")) {
                valor[k - 11].setAttribute('value', '*');
            }
        }
    }
}

function adjacenciaDosTripulantes(k) {

    var valor = document.getElementsByTagName("input");
    valor[k].getAttribute("id");
    k = k+1;
    if(valor[k].value != 'X') {
        valor[k].getAttribute('id');
        valor[k].setAttribute('value', "!");
    }

    if(k == 12) {
        var valor = document.getElementsByTagName("input");
        valor[k+10].getAttribute("id");
        if(valor[k+10] != "X") {
            valor[k+10].setAttribute('value', '!');
        }

        valor[k+9].getAttribute("id");
        if(valor[k+9] != "X") {
            valor[k+9].setAttribute('value', '!');
        }
    }
    if(k == 74) {
        var valor = document.getElementsByTagName("input");
        valor[k-1].getAttribute("id");
        if(valor[k-1].value != "X") {
            valor[k-1].setAttribute('value', '!');
        }

        valor[k-10].getAttribute("id");
        if(valor[k-10].value != "X") {
            valor[k-10].setAttribute('value', '!');
        }

        valor[k-11].getAttribute("id");
        if(valor[k-11].value != "X") {
            valor[k-11].setAttribute('value', '!');
        }

    }
    if(k == 38) {
        var valor = document.getElementsByTagName("input");
        valor[k-1].getAttribute("id");
        if(valor[k-1].value != "X") {
            valor[k-1].setAttribute('value', '!');
        }

        valor[k-9].getAttribute("id");
        if(valor[k+9].value != "X") {
            valor[k+9].setAttribute('value', '!');
        }
        if(valor[k+10].value != "X") {
            valor[k+10].setAttribute('value', '!');
        }

    }
}

function conta() {
    vCont = vCont + 1;
    document.getElementById('count').value = vCont;
}

function resgate(tripulantes) {
    vTrip = tripulantes;
    document.getElementById('resg').value = vTrip;
}
