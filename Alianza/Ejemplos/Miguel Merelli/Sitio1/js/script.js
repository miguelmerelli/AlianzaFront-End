function ejercicio1() {
    //TODOS LOS MULTIPLOS DE N QUE ESTËN ENTRE A Y B
    console.log("\n\n\n\n >>> TODOS LOS MULTIPLOS DE N QUE ESTËN ENTRE A Y B <<<")

    do {
        var a = prompt('Ingrese el número A del 1 al 1000:', ''); //Pide ingresar un valor desde el navegador y lo guarda en a
    } while (isNaN(a) || a < 1 || a > 1000);   // isNaN(a) es true cuando a no es un número 



    do {                                                                //Cada uno de estos bloques pide que se ingrese un valor
        var b = prompt('Ingrese el número B del 1 al 1000:', '');       //y verifica que cada valor sea un número entre 1 y 1000
    } while (isNaN(b) || b < 1 || b > 1000);                            //



    do {
        var n = prompt('Ingrese el número N del 1 al 1000:', '');
    } while (isNaN(n) || n < 1 || n > 1000);


    var resultado = "";


    //Se recorre desde el punto a al punto b
    for (i = a; i <= b; i++) {
        if (i % n == 0) {
            resultado = resultado + " " + i
        }
    }

    // Verifica si resultado es vacio (no hay número que sean multiplos) guarda en la variable resultado que no existen multiplos
    if (resultado == "") {
        resultado = "No existe ningún multiplo de " + n + " entre el " + a + " y el " + b;
    } else {
        resultado = "Los números multiplos de " + n + ": " + resultado;
    }

    console.log(resultado);
    $("#ventana").text(resultado);     // JQuery Inserta resultado en la div con id "#ventana"

    //$("#id").text("Hola Mundo"); 
    //Escribe "Hola Mundo" dentro del elemento con la id "#id"
}


function ejercicio2() {
    //MAYOR Y MENOR
    console.log("\n\n\n\n >>> MAYOR Y MENOR <<<")


    var mayor = -9999999999999999999999;
    var menor = 99999999999999999999999;


    do {                                                                    //Pide que se ingrese un valor
        var n = prompt('Ingrese un número del 1 al 1000:', '');             //y verifica que cada valor sea un número entre 1 y 1000
    } while (isNaN(n) || n < 1 || n > 1000);                                //de lo contrario se volverá a pedir


    //Itera tantas veces como el número que se ingresó
    for (i = 1; i <= n; i++) {


        do {
            var v = prompt("Ingrese el número " + i + ": ", "");
        } while (v == "" || v < -99999999999999999999999 || v > 99999999999999999999999);


        if (v > mayor) {
            mayor = v;
        }

        if (v < menor) {
            menor = v;
        }


    }

    var resultado = "mayor: " + mayor + " - menor: " + menor;   //Declara y setea la cadena de texto en la variable "resultado"

    console.log(resultado);         //Muestra por consola del navegador el resultado
    $("#ventana").text(resultado);  // JQuery  Inserta el resultado dentro de una div con id "#ventana"

    //$("#id").text("Hola Mundo"); 
    //Escribe "Hola Mundo" dentro del elemento con la id "#id"
}


function ejercicio3() {
    // GRAFICA
    console.log("\n\n\n\n >>> GRAFICA <<<");

    var contador = 1;
    var resultado = "";

    //Itera 5 veces
    for (i = 1; i <= 5; i++) {
        var n = prompt(contador + " Ingrese el número positivo menor a 60: ", "");
        contador++;

        if (n > 60) {
            n = 60;
        }

        //Se coloca el numero de linea y un espacio
        resultado = resultado + "\n" + (contador - 1) + "  ";   //  \n es un salto de linea, lo que esta a la derecha del \n se coloca un regnlón abajo

        //Se coloca la cantidad de asteriscos como el número indique
        for (j = 1; j <= n; j++) {
            resultado = resultado + "*";
        }
    }
    console.log(resultado);
    alert(resultado);
}


function ejercicio4() {
    //APROBADO / NO APROBADO
    console.log("\n\n\n\n >>> APROBADO / NO APROBADO <<<");

    var entrada = [1, 2, 3, 4, 5, 6, 7, 8];

    for (var i = 0; i < entrada.length; i++) {
        if (entrada[i] > 5) {
            alert(entrada[i] + " - Aprobado");
            console.log(entrada[i] + " - Aprobado");
        } else {
            alert(entrada[i] + " - No aprobado");
            console.log(entrada[i] + " - No aprobado");
        }
    }

}
function ejercicio5(inicio, fin) {
    // TABLAS
    console.log("\n\n\n\n >>> TABLAS <<<");
    var resultado = "";

    for (i = inicio; i <= fin; i++) {
        resultado = resultado + "\n\n\nTABLA DEL " + i;
        for (j = 0; j <= 10; j++) {
            resultado = resultado + "\n" + i + "*" + j + "=" + (i * j);
        }
    }

    console.log(resultado);
    alert(resultado);
}


function ejercicio6() {

    //EJEMPLO DE SWITCH
    console.log("\n\n\n\n >>> SWITCH <<<");

    var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    var verificador = false;
    var indice;

    do {
        var dia = prompt('Ingrese un día de la semana: ', '');

        //***** OPCION 1 *****
        /*
        for (var i = 0; i < semana.length; i++) {
            if (dia == semana[i]  ||  dia == "") {
                verificador = true;
                break;
            }
        }*/

        //***** OPCION 2 ******
        /*
        var contador = 0;
        while (contador < semana.length && !verificador){
            if (dia == semana[contador] || dia == ""){
                verificador = true;
            }
            contador = contador + 1;
        }
        */

        //***** OPCION 3 ******

        if ((semana.indexOf(dia) != -1) || dia == "") {
            verificador = true;
            indice = semana.indexOf(dia);
        }


        if (verificador) {
            var resultado = "";
            switch (dia) {
                case "Lunes": resultado = "Día Lunes"; break;
                case "Martes": resultado = "Día Martes"; break;
                case "Miércoles": resultado = "Día Miércoles"; break;
                case "Miercoles": resultado = "Día Miércoles"; break;
                case "Jueves": resultado = "Día Jueves"; break;
                case "Viernes": resultado = "Día Viernes"; break;
                case "Sábado": resultado = "Día Sábado"; break;
                case "Sabado": resultado = "Día Sábado"; break;
                case "Domingo": resultado = "Día Domingo"; break;
                case "": resultado = "No ha ingresado ningún dato"; break;
            }


            //Convierte a los de indice par en minuscula e impar en mayusculas
            if (indice % 2 == 0) {
                resultado = resultado.toLowerCase();
            } else {
                resultado = resultado.toUpperCase();
            }


        } else {
            resultado = "El valor ingresado no es correcto";
        }
        alert(resultado);
        console.log("Resultado: " + resultado);

    } while (!verificador);

}


function ejercicio7() {
    //COMIDA RAPIDA

    do {
        var v = prompt("Comandos: \n\nAgua $40  \nJugo $50 \nPapas $40    \nAros de Cebolla $50 \n Hamburguesa $110 \n\nSalir \n\n\nIngrese el pedido: ", "");
        alert(v);
    } while (v != "Salir");




}


function ejercicio8() {
    //HASHTAG
    var linea = "Estos son todos los hashtag:<Hola>y<Mundo>y<Chau>";

    var a = linea.indexOf("<");
    var b = linea.indexOf(">");
    var c = linea.lastIndexOf("<");
    var d = linea.lastIndexOf(">");


    var nuevaLinea = linea.substring(a, d + 1);

    var lineafin = "";
    var e;
    var separadorY = nuevaLinea.split("y");

    for (var i = 0; i < separadorY.length; i++) {
        e = separadorY[i].indexOf(">");
        //alert("palabra " + separadorY[i].substring(1, e));
        lineafin = lineafin + separadorY[i].substring(1, e) + " ";
    }
    alert("Linea: '" + linea + "'" + "\nNuevaLinea: '" + lineafin + "'");
}


function ejercicio9() {
    //HASHTAG 2

    var linea = linea = "#Este# conjunto caracteres tiene un mensaje oculto, que #si se ve# desde cierta perspectiva podrá ver el #mensaje oculto#"
    var array = linea.split("#");
    var linea2 = "";

    for (var i = 1; i < array.length - 1; i++) {

        if (i % 2 != 0) {
            linea2 = linea2 + array[i] + " ";
        }
    }
    alert("Linea: " + linea + "\n Linea2: " + linea2);
}


function ejercicio10() {
    //HASHTAG 3
    var linea = "Estos son todos los hashtag:<Hola>yrtasfask<fasifuahsifu h <sape>sadasfas   <Mundo>ytttttttttttttt<Chau>";
    var palabra = "";
    var separador2 = linea.split(">");
    var lineaFinal = "";

    for (var i = 0; i < separador2.length; i++) {
        var a = separador2[i].indexOf("<") + 1;
        var b = separador2[i].length;
        palabra = separador2[i].substring(a, b);
        lineaFinal = lineaFinal + palabra + " ";
    }
    alert(lineaFinal);
}


function ejercicio11() {
    //HASHTAG 3
    var linea = "<hola>xy<<mundo>xy><rtx<chau>0";
    var lineaFIn = "";
    var temp = "";
    var pos = 0;

    for (var i = 0; i < linea.length; i++) {
        if (linea[i] == "<" || linea[i] == ">") {
            temp = linea[i];
            pos = i;
            if (linea[i] == ">") {
                if (temp == "<") {
                    alert("palabra: ");
                }
            }
        }
    }
}


function ejercicio12() {
    var labcedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
    var lvocales = ["a", "e", "i", "o", "u"];
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]



    var abecedario = [];
    for (var a = 0; a < labcedario.length; a++) {
        abecedario[labcedario[a]] = 0;
    }

    for (var i = 0; i < dias.length; i++) {
        for (var j = 0; j < dias[i].length; j++) {
            var letra = dias[i][j];
            abecedario[letra] = abecedario[letra] + 1;
        }
    }

    console.log("Letras...");
    for (var l = 0; l < labcedario.length; l++) {
        console.log(labcedario[l] + ": " + abecedario[labcedario[l]])
    }

    console.log("Vocales...");
    for (var d = 0; d < lvocales.length; d++) {
        var letra = lvocales[d];


        console.log(letra + ": " + abecedario[labcedario[d]])
    }

}

function ejercicio13() {
    //MUESTRA 2,4,5,11,10
    console.log("\t\t\t\t----- TRUCO -----");


    var cartas = new Array(
        { palo: "espada", numero: "1", usada: "false" }, { palo: "basto", numero: "1", usada: "false" }, { palo: "copa", numero: "1", usada: "false" }, { palo: "oro", numero: "1", usada: "false" },
        { palo: "espada", numero: "2", usada: "false" }, { palo: "basto", numero: "2", usada: "false" }, { palo: "copa", numero: "2", usada: "false" }, { palo: "oro", numero: "2", usada: "false" },
        { palo: "espada", numero: "3", usada: "false" }, { palo: "basto", numero: "3", usada: "false" }, { palo: "copa", numero: "3", usada: "false" }, { palo: "oro", numero: "3", usada: "false" },
        { palo: "espada", numero: "4", usada: "false" }, { palo: "basto", numero: "4", usada: "false" }, { palo: "copa", numero: "4", usada: "false" }, { palo: "oro", numero: "4", usada: "false" },
        { palo: "espada", numero: "5", usada: "false" }, { palo: "basto", numero: "5", usada: "false" }, { palo: "copa", numero: "5", usada: "false" }, { palo: "oro", numero: "5", usada: "false" },
        { palo: "espada", numero: "6", usada: "false" }, { palo: "basto", numero: "6", usada: "false" }, { palo: "copa", numero: "6", usada: "false" }, { palo: "oro", numero: "6", usada: "false" },
        { palo: "espada", numero: "7", usada: "false" }, { palo: "basto", numero: "7", usada: "false" }, { palo: "copa", numero: "7", usada: "false" }, { palo: "oro", numero: "7", usada: "false" },
        { palo: "espada", numero: "10", usada: "false" }, { palo: "basto", numero: "10", usada: "false" }, { palo: "copa", numero: "10", usada: "false" }, { palo: "oro", numero: "10", usada: "false" },
        { palo: "espada", numero: "11", usada: "false" }, { palo: "basto", numero: "11", usada: "false" }, { palo: "copa", numero: "11", usada: "false" }, { palo: "oro", numero: "11", usada: "false" },
        { palo: "espada", numero: "12", usada: "false" }, { palo: "basto", numero: "12", usada: "false" }, { palo: "copa", numero: "12", usada: "false" }, { palo: "oro", numero: "12", usada: "false" }
    );
    var contadorUsadas = 0;

    function tomarCarta() {
        var max = cartas.length -1 - contadorUsadas;
        var min = 0;
        var rnd = parseInt(Math.random() * (max - min) + min);

        while (cartas[rnd].usada == true) {
            rnd = parseInt(Math.random() * (max - min) + min);
            contadorUsadas = contadorUsadas + 1;
        }
        cartas[rnd].usada = true;
        return rnd;
    }


    var idMuestra = tomarCarta();
    var cartaMuestra = cartas[idMuestra];

    console.log("MUESTRA 2,4,5,11,10");
    console.log("Carta de muestra: " + cartaMuestra.numero + " de " + cartaMuestra.palo + "\n\n");

    var jugadores = ["Sergio", "Juan"];

    var Sergio = [cartas[tomarCarta()], cartas[tomarCarta()], cartas[tomarCarta()]];
    var Juan = [cartas[tomarCarta()], cartas[tomarCarta()], cartas[tomarCarta()]];

    var cartasP1 = "Cartas de Sergio: ";
    cartasP1 = cartasP1 + Sergio[0].numero + " de " + Sergio[0].palo + ", ";
    cartasP1 = cartasP1 + Sergio[1].numero + " de " + Sergio[1].palo + ", ";
    cartasP1 = cartasP1 + Sergio[2].numero + " de " + Sergio[2].palo;
    console.log(cartasP1);


    var cartasP2 = "Cartas de Juan: ";
    cartasP2 = cartasP2 + Juan[0].numero + " de " + Juan[0].palo + ", ";
    cartasP2 = cartasP2 + Juan[1].numero + " de " + Juan[1].palo + ", ";
    cartasP2 = cartasP2 + Juan[2].numero + " de " + Juan[2].palo;
    console.log(cartasP2);


    function esPieza(muestra, carta) {
        var paloMuestra = muestra.palo;
        //console.log("paloMuestra: " + paloMuestra)

        var nc = carta.numero;
        var pc = carta.palo;

        if (pc == paloMuestra) {
            if (nc == 2 || nc == 4 || nc == 5 || nc == 11 || nc == 10) {
                return true;
            }
        }
        return false;
    }

    /*
    3 de de la muestra
    2 de la muestra
    1 de la muestra + 2 iguales
    3 del mismo palo
    */



    var cantMismoPalo = 0;
    var dosIguales = false;



    function mano(jugador) {
        var weaDePalo = "";
        if (jugador[0].palo == jugador[1].palo) {
            //  console.log("carta 0 y carta 1 son del mismo palo _ " + Sergio[0].palo)
            weaDePalo = "0-1-" + jugador[0].palo;
            if (jugador[0].numero == jugador[1].numero) {
                dosIguales = true;
            }
        } else if (jugador[0].palo == jugador[2].palo) {
            //  console.log("carta 0 y carta 2 son del mismo palo _ " + Sergio[0].palo)
            weaDePalo = "0-2-" + jugador[0].palo;
            if (jugador[0].numero == jugador[2].numero) {
                dosIguales = true;
            }
        } else if (jugador[1].palo == jugador[2].palo) {
            //  console.log("carta 1 y carta 2 son del mismo palo _ " + Sergio[1].palo)
            weaDePalo = "1-2-" + jugador[1].palo;
            if (jugador[1].numero == jugador[2].numero) {
                dosIguales = true;
            }
        } else if (jugador[0].palo == jugador[1].palo == jugador[2].palo) {
            //  console.log("las tres cartas son del mismo palo _ " + Sergio[1].palo)
            weaDePalo = "F-" + jugador[0].palo;
        } else {
            // console.log("todas las cartas son de DIFERENTE palo")
            weaDePalo = "--";
        }
        return weaDePalo;
    }


    function esFlor(res, jugador) {
        var flor = "NO hay flor :(";
        if (res.includes("F")) {
            flor = "FLOR _ 3 cartas iguales de la mano";
        } else {
            var contadorPiezas = 0;
            for (var i = 0; i < 3; i++) {
                if (esPieza(cartaMuestra, jugador[i])) {
                    contadorPiezas = contadorPiezas + 1;
                }
            }
            if (contadorPiezas == 3 || contadorPiezas == 2) {
                flor = "FLOR _ 3 o 2 piezas con la muestra";
            } else if (contadorPiezas == 1 && dosIguales) {
                flor = "FLOR _ 1 pieza y 2 cartas de la mano iguales";
            }
        }
        return flor;
    }





    //console.log("return: " + weaDePalo);


    var res = mano(Sergio);
    console.log("Sergio: " + esFlor(res, Sergio));

    var res = mano(Juan);
    console.log("Juan: " + esFlor(res, Juan));

} 