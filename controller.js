import { potencia } from './kernel.js';
import { factorial } from "./kernel.js";
import { BN } from './kernel.js';
import { EU } from './kernel.js';
import { exponencial } from './kernel.js';
import { exponencial_it } from './kernel.js';
import { seno } from './kernel.js';
import { seno_it } from './kernel.js';
import { coseno } from './kernel.js';
import { coseno_it } from './kernel.js';
import { tan } from './kernel.js';
import { tan_it } from './kernel.js';
import { arcseno } from './kernel.js';
import { arcseno_it } from './kernel.js';
import { arcoseno } from './kernel.js';
import { arctan } from './kernel.js';
import { arctan_it } from './kernel.js';
import { secante } from './kernel.js';
import { secante_it } from './kernel.js';
import { logaritmo } from './kernel.js';
import { logaritmo_it } from './kernel.js';
import { logaritmo_menos} from './kernel.js';
import { logaritmo_menos_it } from './kernel.js';
import { Senh } from './kernel.js';
import { Senh_it } from './kernel.js';
import { Cosh } from './kernel.js';
import { Cosh_it } from './kernel.js';
import { Tanh } from './kernel.js';
import { Tanh_it } from './kernel.js';
import { Arcsh } from './kernel.js';
import { Arcsh_it } from './kernel.js';
import { Arctanh } from './kernel.js';
import { Arctanh_it } from './kernel.js';
import { LambertW } from './kernel.js';
import { LambertW_it } from './kernel.js';
import { binominal } from './kernel.js';
import { binominal_it } from './kernel.js';
import { Cosecante } from './kernel.js';
import { cosecante_it } from './kernel.js';

function calcularSerie() {
    const x = parseFloat(document.getElementById('inputX').value);
    const n = parseInt(document.getElementById('inputN').value);
    let resultado = 0;
    resultado = exponencial(x, n);
    document.getElementById('inputexp').value = resultado;
    let exp_detalle = {}
    exp_detalle = exponencial_it(x, n)
    console.log(exp_detalle)

    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle")
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "No."
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of exp_detalle.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.operacion 

    }


}


function calcularSeno() {
    const x = parseInt(document.getElementById('inputX_seno').value);
    const n = parseInt(document.getElementById('inputN_seno').value);
    let resultado = 0 ;
    resultado = seno(x, n);
    document.getElementById('inputexsen').value = resultado;
    let detalle = {}
    detalle = seno_it(x, n)
    console.log(detalle)

    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Menos 1 a la n"
    celda = fila.insertCell(4)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.menos_uno_a_la_n 
        celda = fila.insertCell(4)
        celda.innerHTML = iteracion.operacion 
    }

}


function calcularCoseno() {
    const x = parseInt(document.getElementById('inputX_seno').value);
    const n = parseInt(document.getElementById('inputN_seno').value);
    let resultado = 0 ;
    resultado = coseno(x, n);
    document.getElementById('inputexcos').value = resultado;
    let detalle_coseno = {}
    detalle_coseno = coseno_it(x, n)
    console.log(detalle_coseno)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Menos 1 a la n"
    celda = fila.insertCell(4)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_coseno.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.menos_uno_a_la_n 
        celda = fila.insertCell(4)
        celda.innerHTML = iteracion.operacion 
    }

}

function calculartan() {
    const x = parseInt(document.getElementById('inputX_seno').value);
    const n = parseInt(document.getElementById('inputN_seno').value);
    
    let resultado = 0 ;
    resultado = tan(x, n);

    document.getElementById("inputextan").value = resultado;

    let detalle_tan = {}
    detalle_tan = tan_it(x, n)
    console.log(detalle_tan)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(2)
    celda.innerHTML = "Bernoulli"
    celda = fila.insertCell(3)
    celda.innerHTML = "potencia1"
    celda = fila.insertCell(4)
    celda.innerHTML = "potencia2"
    celda = fila.insertCell(5)
    celda.innerHTML = "potencia3"
     celda = fila.insertCell(6)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_tan.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.factorial
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.BN 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.potencia1
        celda = fila.insertCell(4)
        celda.innerHTML = iteracion.potencia2 
        celda = fila.insertCell(5)
        celda.innerHTML = iteracion.potencia3
        celda = fila.insertCell(6)
        celda.innerHTML = iteracion.operacion 
    }

}

function calcularArcseno() {
    const x = parseFloat(document.getElementById('inputX_inversas').value);
    const n = parseFloat(document.getElementById('inputN_inversas').value);
    let resultado = 0 ;
    resultado = arcseno(x, n);
    document.getElementById('inputexarcs').value = resultado;
    let detalle_arcseno = {}
    detalle_arcseno = arcseno_it(x, n)
    console.log(detalle_arcseno)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_arcseno.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.operacion 
    }

}

function calcularArcoseno() {
    const x = parseFloat(document.getElementById('inputX_inversas').value);
    const n = parseFloat(document.getElementById('inputN_inversas').value);
    let resultado = 0 ;
    resultado = arcoseno(x, n);
    document.getElementById("inputexarcos").value = resultado;
    let detalle_arcoseno = {}
    detalle_arcoseno = arcseno_it(x, n)
    console.log(detalle_arcoseno)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_arcoseno.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.operacion 
    }

}

function calcularArctan() {
    const x = parseFloat(document.getElementById('inputX_inversas').value);
    const n = parseFloat(document.getElementById('inputN_inversas').value);
    let resultado = 0 ;
    resultado = arctan(x, n);
    document.getElementById("inputexarctan").value = resultado;
    let detalle_arctan = {}
    detalle_arctan = arctan_it(x, n)
    console.log(detalle_arctan)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_arctan.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.operacion 
    }

}


function calcularsecante() {
    const x = parseFloat(document.getElementById('inputX_inversas').value);
    const n = parseFloat(document.getElementById('inputN_inversas').value);
    
    let resultado = 0 ;
    resultado = secante(x, n);

    document.getElementById("inputexsec").value = resultado;

    let detalle_secante = {}
    detalle_secante = secante_it(x, n)
    console.log(detalle_secante)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(2)
    celda.innerHTML = "Euler"
    celda = fila.insertCell(3)
    celda.innerHTML = "potencia"
     celda = fila.insertCell(4)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_secante.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.factorial
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.EU
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(4)
        celda.innerHTML = iteracion.operacion 
    }

}

function calcularCosecante() {
    const x = parseFloat(document.getElementById('inputX_inversas').value);
    const n = parseInt(document.getElementById('inputN_inversas').value);
    let resultado = 0;
    resultado = Cosecante(x, n);
    document.getElementById('inputexcosec').value = resultado;
    let detalle_cosecante = {};
    detalle_cosecante = cosecante_it(x, n);
    console.log(detalle_cosecante);

    // Se llena la tabla detalle con las iteraciones del cálculo
    document.getElementById("detalle").remove();

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");

    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "Iteración";
    celda = fila.insertCell(1);
    celda.innerHTML = "Seno";
    celda = fila.insertCell(2);
    celda.innerHTML = "Cosecante";

    for (let iteracion of detalle_cosecante.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.seno;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.operacion !== undefined ? iteracion.operacion : "Indefinido";
    }
}


function calcularlogaritmo() {
    const x = parseFloat(document.getElementById('inputX_log').value);
    const n = parseFloat(document.getElementById('inputN_log').value);
    let resultado = 0 ;
    resultado = logaritmo(x, n);
    document.getElementById("inputexlogaritmo").value = resultado;
    let detalle_logaritmo = {}
    detalle_logaritmo = logaritmo_it(x, n)
    console.log(detalle_logaritmo)


    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_logaritmo.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.operacion 
    }

}


function calcularlogaritmo_menos() {
    const x = parseFloat(document.getElementById('inputX_log').value);
    const n = parseFloat(document.getElementById('inputN_log').value);
    let resultado = 0 ;
    resultado = logaritmo_menos(x, n,);
    document.getElementById("inputexlogaritmo_menos").value = resultado;
    let detalle_logaritmo_menos = {}
    detalle_logaritmo_menos = logaritmo_menos_it(x, n)
    console.log(detalle_logaritmo_menos)


    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_logaritmo_menos.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.operacion 
    }

}

function calcularSenh() {
    const x = parseFloat(document.getElementById('inputX_hiperbolica').value);
    const n = parseFloat(document.getElementById('inputN_hiperbolica').value);
    let resultado = 0;
    resultado = Senh(x, n);
    document.getElementById('inputexSenh').value = resultado;
    let detalle_Senh = {};
    detalle_Senh = Senh_it(x, n);
    console.log(detalle_Senh);

    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");
    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "n";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operacion";

    for (let iteracion of detalle_Senh.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}

function calcularCosh() {
    const x = parseFloat(document.getElementById('inputX_hiperbolica').value);
    const n = parseFloat(document.getElementById('inputN_hiperbolica').value);
    let resultado = 0;
    resultado = Cosh(x, n);
    document.getElementById('inputexCosh').value = resultado;
    let detalle_Cosh = {};
    detalle_Cosh = Cosh_it(x, n);
    console.log(detalle_Cosh);

    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");
    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "n";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operacion";

    for (let iteracion of detalle_Cosh.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}

function calcularTanh() {
    const x = parseFloat(document.getElementById('inputX_hiperbolica').value);
    const n = parseFloat(document.getElementById('inputN_hiperbolica').value);
    let resultado = 0;
    resultado = Tanh(x, n);
    document.getElementById('inputexTanh').value = resultado;
    let detalle_Tanh = {};
    detalle_Tanh = Tanh_it(x, n);
    console.log(detalle_Tanh);

    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");
    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "n";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operacion";

    for (let iteracion of detalle_Tanh.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}


function calcularArctanh() {
    const x = parseFloat(document.getElementById('inputX_hiperbolica').value);
    const n = parseFloat(document.getElementById('inputN_hiperbolica').value);
    let resultado = 0 ;
    resultado = Arctanh(x, n);
    document.getElementById("inputexarctanh").value = resultado;
    let detalle_arctanh = {}
    detalle_arctanh = Arctanh_it(x, n)
    console.log(detalle_arctanh)
    
    //se llena la tabla detalle con las iteraciones del calculo
    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose") 
    let mitabla = document.createElement("table")

    mitabla.setAttribute("id", "detalle",)
    mipagina.appendChild(mitabla)

    let encabezado = mitabla.createTHead()
    let fila = encabezado.insertRow()

    let celda = fila.insertCell(0)
    celda.innerHTML = "n"
    celda = fila.insertCell(1)
    celda.innerHTML = "Potencia"
    celda = fila.insertCell(2)
    celda.innerHTML = "Factorial"
    celda = fila.insertCell(3)
    celda.innerHTML = "Operacion"
    
    for(let iteracion of detalle_arctanh.iteraciones){
        fila = mitabla.insertRow()
    
        celda = fila.insertCell(0)
        celda.innerHTML = iteracion.i 
        celda = fila.insertCell(1)
        celda.innerHTML = iteracion.potencia
        celda = fila.insertCell(2)
        celda.innerHTML = iteracion.factorial 
        celda = fila.insertCell(3)
        celda.innerHTML = iteracion.operacion 
    }

}


function calcularArcsh() {
    const x = parseFloat(document.getElementById('inputX_hiperbolica').value);
    const n = parseFloat(document.getElementById('inputN_hiperbolica').value);
    let resultado = 0;
    resultado = Arcsh(x, n);
    document.getElementById('inputexarcsh').value = resultado;
    let detalle_Arcsh = {};
    detalle_Arcsh = Arcsh_it(x, n);
    console.log(detalle_Arcsh);

    document.getElementById("detalle").remove()

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");
    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "n";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operacion";

    for (let iteracion of detalle_Arcsh.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}

function calcularLambertW() {
    const x = parseFloat(document.getElementById('inputX_LambertW').value);
    const n = parseInt(document.getElementById('inputN_LambertW').value); 
    let resultado = 0;
    resultado = LambertW(x, n);
    document.getElementById('inputex_lambert').value = resultado;
    let detalle_LambertW = {};
    detalle_LambertW = LambertW_it(x, n);
    console.log(detalle_LambertW);

    const tablaAnterior = document.getElementById("detalle");
    if (tablaAnterior) {
        tablaAnterior.remove();
    }

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");
    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "n";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operacion";

    for (let iteracion of detalle_LambertW.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.i;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}

function calcularBinomio() {
    const x = parseInt(document.getElementById('inputX_Binominal').value);
    const n = parseInt(document.getElementById('inputN_Binominal').value);
    let resultado = 0;
    resultado = binominal(x, n);
    document.getElementById('inputex_Binominal').value = resultado;
    let detalle_binominal = {};
    detalle_binominal = binominal_it(x, n);
    console.log(detalle_binominal);

    // Se llena la tabla detalle con las iteraciones del cálculo
    document.getElementById("detalle").remove();

    let mipagina = document.getElementById("desglose");
    let mitabla = document.createElement("table");

    mitabla.setAttribute("id", "detalle");
    mipagina.appendChild(mitabla);

    let encabezado = mitabla.createTHead();
    let fila = encabezado.insertRow();

    let celda = fila.insertCell(0);
    celda.innerHTML = "k";
    celda = fila.insertCell(1);
    celda.innerHTML = "Potencia";
    celda = fila.insertCell(2);
    celda.innerHTML = "Factorial";
    celda = fila.insertCell(3);
    celda.innerHTML = "Operación";

    for (let iteracion of detalle_binominal.iteraciones) {
        fila = mitabla.insertRow();

        celda = fila.insertCell(0);
        celda.innerHTML = iteracion.k;
        celda = fila.insertCell(1);
        celda.innerHTML = iteracion.potencia;
        celda = fila.insertCell(2);
        celda.innerHTML = iteracion.factorial;
        celda = fila.insertCell(3);
        celda.innerHTML = iteracion.operacion;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const buttonsTables = [
        { buttonId: "toggleButton", divId: "exponencial_div", tableId: "detalle" },
        { buttonId: "toggleButton1", divId: "Trigonometricas_div", tableId: "detalle1" },
        { buttonId: "toggleButton2", divId: "Inversas_div", tableId: "detalle2" },
        { buttonId: "toggleButton3", divId: "Logaritmo_div", tableId: "detalle3" },
        { buttonId: "toggleButton4", divId: "Hiperbolica_div", tableId: "detalle4" },
        { buttonId: "toggleButton5", divId: "Lambert_div", tableId: "detalle5" },
        { buttonId: "toggleButton6", divId: "Binominal_div", tableId: "detalle6" }
    ];

    buttonsTables.forEach(({ buttonId, divId, tableId }) => {
        const button = document.getElementById(buttonId);
        const div = document.getElementById(divId);
        const table = document.getElementById(tableId);

        button.addEventListener("click", function() {
            // Ocultar todos los divs y tablas
            buttonsTables.forEach(({ divId: id, tableId: tid }) => {
                const otherDiv = document.getElementById(id);
                const otherTable = document.getElementById(tid);

                if (otherDiv !== div) {
                    otherDiv.classList.remove('visible');
                    otherDiv.classList.add('transition');
                    setTimeout(() => {
                        otherDiv.classList.add('hidden'); // Oculta otros divs después de la animación
                    }, 500); // Espera el tiempo de la animación
                }

                if (otherTable) {
                    otherTable.classList.remove('visible');
                    otherTable.classList.add('transition');
                    setTimeout(() => {
                        otherTable.classList.add('hidden'); // Oculta otras tablas después de la animación
                    }, 500); // Espera el tiempo de la animación
                }
            });

            // Mostrar u ocultar el div y la tabla correspondiente
            if (div.classList.contains('hidden')) {
                div.classList.remove('hidden');
                div.classList.add('transition');
                setTimeout(() => {
                    div.classList.add('visible'); // Aplica la clase visible
                }, 10); // Pequeño retraso para permitir que el display se aplique

                if (table) {
                    table.classList.remove('hidden'); // Muestra la tabla
                    table.classList.add('transition');
                    setTimeout(() => {
                        table.classList.add('visible'); // Aplica la clase visible
                    }, 10); // Pequeño retraso
                }
            } else {
                div.classList.remove('visible');
                div.classList.add('transition');
                setTimeout(() => {
                    div.classList.add('hidden'); // Oculta el div después de la animación
                }, 500); // Espera el tiempo de la animación

                if (table) {
                    table.classList.remove('visible');
                    table.classList.add('transition');
                    setTimeout(() => {
                        table.classList.add('hidden'); // Oculta la tabla después de la animación
                    }, 500); // Espera el tiempo de la animación
                }
            }
        });
    });
});


document.getElementById("calcularBtn").addEventListener("click", calcularSerie);


document.getElementById("calcularBtnsen").addEventListener("click", calcularSeno);

document.getElementById("calcularBtnscos").addEventListener("click", calcularCoseno);

document.getElementById("calcularBtntan").addEventListener("click", calculartan);

document.getElementById("calcularBtnarcs").addEventListener("click", calcularArcseno);

document.getElementById("calcularBtnarcos").addEventListener("click", calcularArcoseno);

document.getElementById("calcularBtnarctan").addEventListener("click", calcularArctan);

document.getElementById("calcularBtnlogaritmo").addEventListener("click", calcularlogaritmo);

document.getElementById("calcularBtnlogaritmo_menos").addEventListener("click", calcularlogaritmo_menos);

document.getElementById("calcularBtnsec").addEventListener("click", calcularsecante);

document.getElementById("calcularBtnSenh").addEventListener("click", calcularSenh);

document.getElementById("calcularBtnCosh").addEventListener("click", calcularCosh);

document.getElementById("calcularBtnTanh").addEventListener("click", calcularTanh);

document.getElementById("calcularBtnarcsh").addEventListener("click", calcularArcsh);

document.getElementById("calcularBtnarctanh").addEventListener("click", calcularArctanh);

document.getElementById("calcularBtnLambertW").addEventListener("click", calcularLambertW);

document.getElementById("calcularBtnBinominal").addEventListener("click", calcularBinomio);

document.getElementById("calcularBtncosec").addEventListener("click", calcularCosecante);
