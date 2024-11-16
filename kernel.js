const pi = 3.141592

function factorial(num) {
    let resolt = 1;
    for (let i = 1; i <= num; i++) {
          resolt =  resolt * i;
    }
    return resolt;
}

function potencia(base, exponente) {
    let resolt = 1;
    for (let i = 1; i <= exponente; i++) {
          resolt =  resolt * base;
    }
    return resolt;
}

function menos_uno_elevado_a_la_n (n){
    if(n % 2 == 0){
        return 1
    } else {
        return -1
    }


}

function EU(n) {
    console.log("valor de n")
    console.log(n)
    let E = []

    E[0] = 1;
    E[2] = -1;
    E[4] = 5;
    E[6] = -61;
    E[8] = 1385;
    E[10] = -50521;
    E[12] = 2702765;
    E[14] = -199360981;
    E[16] = 19391512145;
    E[18] = -2404879675441;
    E[20] = 370371188237525;
    E[22] = 1854181890501157775056;
    E[24] = -261531900416614372014464;
    E[26] = 14920897042867658789644449000;
    E[28] = -116554239191158504057906046950128;
    E[30] = 382024550631004810780135023059048;
    E[32] = -4364276912061545393103841468039781000000;
    E[34] = 137467883820018298383412290197149679170400;
    E[36] = -374668571733532504270090736412885719206249082000;
    E[38] = 219430763792174898517374547087947532086105285327;
    E[40] = -2415110982119932637669881594244624534689115074961600;
    E[42] = 11448773170601865590947690462351472171794922825525277500;
    E[44] = -2695600782297982203785531667331442529531463182496770107453600;
    E[46] = 209840783335197095718240400978650098474569298319201111604660000000;
    E[48] = -3458804072921101727219752880709401430630401849612558928474057695200;
    E[50] = 1785109278531776014939537632328560795922048691202112977404066688480000;
    E[52] = -6012269090256026467288183913708329789423586769691572433502302182000;
    E[54] = 828866678547508215043295991322588310731686790911234407949760703484634200;
    E[56] = -409583501626885005559169069916993966505365038710427319719617267233820000;
    E[58] = 6888204874700279856407199908808530479602711685250757555357379818463785000;
    E[60] = -617646194774021576689908511492866450485372690882307384826401779233133920000000;

    if (n <= 60 ) {
        if ((n == 0) || (n == 1) || (n % 2 == 0)) {
            return E[n]
        } else {
            
        }
    } else {
        return 0
    }

}

function BN(n) {
    console.log("valor de n")
    console.log(n)
    let B = []

    B[0] = 1
    B[1] = 1 / 2
    B[2] = 1 / 6
    B[4] = -1 / 30
    B[6] = 1 / 42
    B[8] = -1 / 30
    B[10] = 5 / 66
    B[12] = -691 / 2730
    B[14] = 7 / 6
    B[16] = -3617 / 510
    B[18] = 43867 / 798
    B[20] = -174611 / 330
    B[22] = 854513 / 138
    B[24] = -236364091 / 2730
    B[26] = 8553103 / 6
    B[28]= -23749461029 / 870
    B[30] = 8615841276005 / 14322
    B[32] = -7709321041217 / 510
    B[34] = 2577687858367 / 6
    B[36] = -26315271553053477373 / 1919190
    B[38] = 2929993913841559 / 6
    B[40] = -261082718496449122051 / 13530
    B[42] = 1520097643918070802691 / 1806
    B[44] = -27833269579301024235023 / 690
    B[46] = 596451111593912163277961 / 282
    B[48] = -5609403368997817686249127547 / 46410
    B[50] = 495057205241079648212477525 / 66
    B[52] = -801165718135489957347924991853 / 1590
    B[54] = 29149963634884862421418123812691 / 798
    B[56] = -2479392929313226753685415739663229 / 870
    B[58] = 84483613348880041862046775994036021 / 354
    B[60] = -1215233140483755572040304994079820246041491 / 56786730

    if (n <= 60 ) {
        if ((n == 0) || (n == 1) || (n % 2 == 0)) {
            //console.log("devuelve n")
            //console.log(B[n])
            return B[n]
        } else {
            //console.log("devuelve n else")
            //console.log(0)
            return 0
        }
    } else {
        //console.log("devuelve n else else")
        //console.log(0)
        return 0
    }
}

function exponencial(x, n) {
    let resultado = 0;
    let operacion = 0;

    for (let i = 0; i <= n; i++) {
        operacion = potencia(x, i) / factorial(i)
        resultado = resultado + operacion 
    }
    return resultado;
}

function exponencial_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    }

    let resumen = {
        valor: 0,
        iteraciones: []
    }

    for (let i = 0; i <= n; i++) {
        data.i = i
        data.potencia = potencia(x, i)
        data.factorial = factorial(i)
        operacion = potencia(x, i) / factorial(i)
        data.operacion = operacion
        resultado = resultado + operacion 
        resumen.iteraciones.push(data)
        data = {}
    }

    resumen.valor = resultado 
    return resumen;
}

function seno (x, n){
    let resultado = 0
    let operacion = 0
    let m = 0

    for (let i = 0; i<= n; i++) {
        m = parseInt((2 * i) + 1)
        operacion = menos_uno_elevado_a_la_n(i) *  potencia(x, m) / factorial(m)  
        resultado = resultado + operacion          
    }
    return resultado;      
}

function seno_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
        menos_uno_a_la_n: 0
    };
    let m = 0
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i) + 1)
        console.log(m)
        data.i = i;
        data.n = parseInt((2 * i) + 1);
        data.menos_uno_a_la_n = menos_uno_elevado_a_la_n(i)
        data.potencia = potencia(x, m);
        data.factorial = factorial(m);
        operacion = potencia(x, m) / factorial(m) * menos_uno_elevado_a_la_n(i); 
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }

    resumen.valor = resultado;
    return resumen;
}

function coseno (x, n){
    let resultado = 0
    let operacion = 0
    let m = 0

    for (let i = 0; i<= n; i++) {
        m = 2 * i
        operacion = menos_uno_elevado_a_la_n(i) *  potencia(x, m) / (factorial(m))  
        resultado = resultado + operacion          
    }
    return resultado;      
}

function coseno_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
        menos_uno_a_la_n: 0
    };
    let m = 0
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        m = 2 * i
        console.log(m)
        data.i = i;
        data.n = 2 * i;
        data.menos_uno_a_la_n = menos_uno_elevado_a_la_n(i)
        data.potencia = potencia(x, m);
        data.factorial = factorial(m);
        operacion = potencia(x, m) / factorial(m) * menos_uno_elevado_a_la_n(i); 
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }

    resumen.valor = resultado;
    return resumen;
}

function tan (x, n){
    let resultado = 0
    let operacion = 0
    let m = 0
    let P = 0
    
    for (let i = 0; i<= n; i++) {
        m = parseInt((2 * i))
        let B = BN(m);
        
        P = parseInt((2 * i) + 1)
        
        operacion = B * potencia(-4, i) * (1 - potencia(4, i)) * potencia(i, P) / factorial(m);
        resultado = resultado + operacion          

    }
    return resultado;
}
    
function tan_it (x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        BN: 0 ,
        potencia1: 0 ,
        potencia2: 0 ,
        potencia3: 0,
        factorial: 0,
        operacion: 0,

    };
    let B = 0;
    let m = 0;
    let P = 0;
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        P = parseInt((2 * i) + 1)
        m = parseInt((2 * i) )
        B = BN(m);

        console.log(m)
        data.i = i;
        data.n = parseInt((2 * i)+1);
        
        data.BN = B
        data.potencia1 = potencia(-4, i)
        data.potencia2 = (1 - potencia(-4, i))
        data.potencia3 = potencia(i, P)
        data.factorial = factorial(m);

        operacion =  B * potencia(-4, i) * (1 - potencia(-4, i)) * potencia(i, P) / factorial(m);
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }


    resumen.valor = resultado;
    return resumen;
}


    function arcseno(x, n) {
        let operacion = 0 
        let resultado = 0 ;

        for (let i = 0; i <= n; i++) {
            operacion = (factorial(2 * i) * potencia(x, 2 * i + 1)) / (potencia(4, i) * potencia(factorial(i), 2) * (2 * i + 1));

            resultado = operacion + resultado
        }
        
        return resultado;
    }


    
function arcseno_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    };
    let m = 0
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i)+1)
        console.log(m)
        data.i = i;
        data.n = parseInt((2 * i)+1);
        
        data.potencia = potencia(x, m);
        data.factorial = factorial(m);
        operacion =  (factorial(2 * i) * potencia(x, 2 * i + 1)) / (potencia(4, i) * potencia(factorial(i), 2) * (2 * i + 1));
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }


    resumen.valor = resultado;
    return resumen;
}

function arcoseno(x, n) {
    let operacion = 0 ;
    let resultado = 0;
    for (let i = 0; i <= n; i++) {
        operacion = (factorial(2 * i) * potencia(x, 2 * i) * (-1) * i) / (potencia(4, i) * potencia(factorial(i), 2) * (2 * i + 1)) ;
    
        resultado = operacion
    }
    
    return pi / 2 - resultado; 
}

function arctan (x, n){
    let resultado = 0
    let operacion = 0
    let m = 0
    
        for (let i = 0; i<= n; i++) {
            m = parseInt((2 * i)+1)
            operacion =  menos_uno_elevado_a_la_n(i) * potencia(x, m) / m;
            resultado = resultado + operacion          
        }
        return resultado;
        
    }

    
function arctan_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    };
    let m = 0
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i)+1)
        console.log(m)
        data.i = i;
        data.n = parseInt((2 * i)+1);
        
        data.potencia = potencia(x, m);
        data.factorial = factorial(m);
        operacion =  menos_uno_elevado_a_la_n(i) * potencia(x, m) / m;
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }


    resumen.valor = resultado;
    return resumen;
}

function secante (x, n){
    let resultado = 0
    let operacion = 0
    let m = 0
    let P = 0
    
    for (let i = 0; i<= n; i++) {
        m = parseInt((2 * i))
        let E = EU(m);
        
        
        operacion = menos_uno_elevado_a_la_n(i) * E * potencia(i, m) / factorial(m);
        resultado = resultado + operacion          

    }
    return resultado;
}
    
function secante_it (x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        Eu: 0 ,
        potencia: 0 ,
        operacion: 0,
        menos_uno_elevado_a_la_n: 0,
        factorial: 0 ,

    };
    let E = 0;
    let m = 0;
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i) )
        E = EU(m);

        console.log(m)
        data.i = i;
        data.n = parseInt((2 * i));
        
        data.EU = E
        data.potencia = potencia(i, m) ; 
        data.factorial = factorial(m);
        operacion =  menos_uno_elevado_a_la_n(i) * E * potencia(i, m) / factorial(m);
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data); 
        data = {}
    }


    resumen.valor = resultado;
    return resumen;
}

function logaritmo(x, n) {
    let resultado = 0;
    let operacion = 0;
    let term = (x - 1) / (x + 1); // Calcula el término base

    for (let i = 0; i <= n; i++) {
        operacion = (1 / (2 * i + 1)) * potencia(term, 2 * i + 1);
        resultado = resultado + operacion;
    }
    return 2 * resultado; 
}

function logaritmo_it(x, n) {

    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        operacion: 0,
    };
    let term = (x - 1) / (x + 1); 
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        operacion = (1 / (2 * i + 1)) * potencia(term, 2 * i + 1);
        data.i = i;
        data.n = 2 * i + 1;
        data.potencia = potencia(term, 2 * i + 1);
        data.operacion = operacion;
        resumen.iteraciones.push(data);
        data = {};
    }

    resumen.valor = 2 * resultado;
    return resumen;
}

function logaritmo_menos(x, n) {

    let resultado = 0;
    let operacion = 0;
    let term = (x - 1) ; // Calcula el término base

    for (let i = 1; i <= n; i++) {
        operacion = (1 / i) * potencia(term, i);
        resultado = resultado + operacion;

        
        
    }

        return resultado ;

}

function logaritmo_menos_it(x, n) {

    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        n: 0,
        potencia: 0,
        operacion: 0,
    };
    let term = (x - 1);
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        operacion = (1 / i) * potencia(term, i);
        data.i = i;
        data.n = 2 * i + 1;
        data.potencia = potencia(term, 2 * i + 1);
        data.operacion = operacion;
        resumen.iteraciones.push(data);
        data = {};
    }

    resumen.valor = 2 * resultado;
    return resumen;
}


function Senh(x, n) {
    let resultado = 0;
    let operacion = 0;
    let m = 0 ;

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i) + 1)
        operacion = potencia(m)/ factorial(m)
        resultado = resultado + operacion
    }
    return resultado;
}

function Senh_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    }
    let i = 0;
    let  m = parseInt((2 * i) + 1)
    let resumen = {
        valor: 0,
        iteraciones: []
    }

    for (let i = 0; i <= n; i++) {
        data.i = i
        data.potencia = potencia(x, i)
        data.factorial = factorial(i)
        operacion = potencia(m)/ factorial(m)
        data.operacion = operacion
        resultado = resultado + operacion 
        resumen.iteraciones.push(data)
        data = {}
    }

    resumen.valor = resultado 
    return resumen;
}

function Cosh(x, n) {
    let resultado = 0;
    let operacion = 0;
    let m = 0 ;

    for (let i = 0; i <= n; i++) {
        m = parseInt (2 * i)
        operacion = potencia(m)/ factorial(m)
        resultado = resultado + operacion 
    }
    return resultado;
}

function Cosh_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    }
    let i = 0;
    let  m = parseInt(2 * i) 
    let resumen = {
        valor: 0,
        iteraciones: []
    }

    for (let i = 0; i <= n; i++) {
        data.i = i
        data.potencia = potencia(x, i)
        data.factorial = factorial(i)
        operacion = potencia(m)/ factorial(m)
        data.operacion = operacion
        resultado = resultado + operacion 
        resumen.iteraciones.push(data)
        data = {}
    }

    resumen.valor = resultado 
    return resumen;
}

function Tanh(x, n) {
    let resultado = 0;
    let operacion = 0;
    let m = 0;
    let B;

    for (let i = 0; i <= n; i++) {
        m = parseInt((2 * i) - 1);
        B = BN(m); 

        operacion = B * potencia(4) * potencia(4 - 1) * potencia(m) / factorial(i);
        resultado += operacion; 
    }
    return resultado;
}

function Tanh_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    };
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        let m = parseInt((2 * i) - 1);
        let B = BN(m);

        data.i = i;
        data.potencia = potencia(x, i);
        data.factorial = factorial(i);
        operacion = B * potencia(4) * potencia(4 - 1) * potencia(m) / factorial(i);
        data.operacion = operacion;
        resultado += operacion;
        resumen.iteraciones.push({ ...data });
    }

    resumen.valor = resultado;
    return resumen;
}



function Arcsh(x, n) {
    let resultado = 0;
    let operacion = 0;
    let m = 0 ;
    let p = 0 ;

    for (let i = 0; i <= n; i++) {
         m = 2 * i + 1;
         p = 2 * i;

        operacion = (factorial(p) * potencia(x, m)) / (potencia(4, i) * potencia(factorial(i), 2) * m);
        resultado = resultado + operacion;
    }
    return resultado;
}

function Arcsh_it(x, n) {
    let resultado = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    };
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    for (let i = 0; i <= n; i++) {
        let m = 2 * i + 1;
        let p = 2 * i;
        data.i = i;
        data.potencia = potencia(x, m);
        data.factorial = factorial(p);
        
        let operacion = (factorial(p) * potencia(x, m)) / (potencia(4, i) * potencia(factorial(i), 2) * m);
        data.operacion = operacion;
        resultado = resultado + operacion;
        resumen.iteraciones.push(data);
    }

    resumen.valor = resultado;
    return resumen;
}


function Arctanh(x, n) {
    let resultado = 0;
    let m = 0 ;

    for (let i = 0; i < n; i++) {
        let m = parseInt((2 * i) + 1);
        let operacion = potencia(m) / m
                resultado =  resultado + operacion

    }
    return resultado;
}

function Arctanh_it(x, n) {
    let resultado = 0;
    let operacion = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    }
    let i = 0;
    let  m = parseInt((2 * i)+1)
    let resumen = {
        valor: 0,
        iteraciones: []
    }

    for (let i = 0; i <= n; i++) {
        data.i = i
        data.potencia = potencia(x, i)
        data.factorial = factorial(i)
        operacion = potencia(m)/ m
        data.operacion = operacion
        resultado = resultado + operacion
        resumen.iteraciones.push(data)
        data = {}
    }

    resumen.valor = resultado 
    return resumen;
}

function LambertW(x, n) {
    let resultado = 0;
    let factorial = 1;
    let potencia = x;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
        resultado = resultado + potencia / factorial;
        potencia = potencia * x;
    }
    return resultado;
}

function LambertW_it(x, n) {
    let resultado = 0;
    let data = {
        i: 0,
        potencia: 0,
        factorial: 0,
        operacion: 0,
    };
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    let factorial = 1; 
    let potencia = x; 

    
    for (let i = 1; i <= n; i++) {
        data.i = i;
        factorial = factorial * i;
        data.potencia = potencia;
        data.operacion = potencia / factorial; 
        resultado = resultado + data.operacion;
        data.resultadoActual = resultado;
        resumen.iteraciones.push(data); 
        
        potencia = potencia * x;
    }

    resumen.valor = resultado;
    return resumen;
}

function Cosecante(x, n) {
    let resultado = 0;
    let operacion = 0;

    for (let i = 0; i <= n; i++) {
        let senoValue = seno(x, i);
        if (senoValue !== 0) {
            operacion = 1 / senoValue;
            resultado = resultado + operacion;
        } else {
            console.warn(`Seno de ${x} para n=${i} es cero, no se puede calcular cosecante.`);
        }
    }
    return resultado;
}

function cosecante_it(x, n) {
    let resultado = 0;
    let data = {
        i: 0,
        seno: 0,
        operacion: 0,
    };
    let resumen = {
        valor: 0,
        iteraciones: [],
    };

    for (let i = 0; i <= n; i++) {
        data.i = i;
        data.seno = seno(x, i);
        
        if (data.seno !== 0) {
            data.operacion = 1 / data.seno;
            resultado += data.operacion;
        } else {
            console.warn(`Seno de ${x} para n=${i} es cero, no se puede calcular cosecante.`);
            data.operacion = undefined; 
        }
        
        resumen.iteraciones.push(data);
        data = {};
    }

    resumen.valor = resultado;
    return resumen;
}


function binominal(x, n) {
    let resultado = 0;
    let factorial = 1;
    let potencia = 1; 

    for (let k = 0; k <= n; k++) {
        if (k > 0) {
            factorial = factorial * k; 
            potencia = potencia * x; 
        }
        resultado = resultado + (factorial / factorial) * potencia; 
    }
    return resultado;
}

function binominal_it(x, n) {
    let resultado = 0;
    let resumen = {
        valor: 0,
        iteraciones: []
    };

    let factorial = 1; 
    let potencia = 1; 

    for (let k = 0; k <= n; k++) {
        let data = {
            k: k,
            potencia: potencia,
            factorial: factorial,
            operacion: (factorial / factorial) * potencia, 
            resultadoActual: resultado 
        };

        resultado = resultado + data.operacion; 
        data.resultadoActual = resultado; 
        resumen.iteraciones.push(data); 

        if (k > 0) {
            factorial = factorial * k; 
            potencia = potencia * x; 
        }
    }

    resumen.valor = resultado; 
    return resumen; 
}


export {potencia}
export {factorial}
export {BN}
export {EU}
export {exponencial}
export {exponencial_it}
export {seno}
export {seno_it}
export {coseno}
export {coseno_it}
export {tan}
export {tan_it}
export {arcseno}
export {arcseno_it}
export {arcoseno}
export {arctan}
export {arctan_it}
export {secante}
export {secante_it}
export {Senh}
export {Senh_it}
export {Cosh}
export {Cosh_it}
export {Tanh}
export {Tanh_it}
export {Arcsh}
export {Arcsh_it}
export {Arctanh}
export {Arctanh_it}
export {LambertW}
export {LambertW_it}
export {logaritmo}
export {logaritmo_it}
export {logaritmo_menos}
export {logaritmo_menos_it}
export {binominal}
export {binominal_it}
export {Cosecante}
export {cosecante_it}


