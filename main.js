
let cadena = "Hola a todos bienvenidos al curso de Javascript";


// Verificadar en la cadena concidencias

// let resultado = cadena.startsWith("hola");         //Busca al inicio de la cadena si exite la palabrea y devuelve un boleano como respuesta (true/flase)
// let resultado = cadena.endsWith("Javascript");     //Busca al final de la cadena si exite la palabrea y devuelve un boleano como respuesta (true/flase)
// let resultado = cadena.includes("bienvenidos");    //Busca dentro de toda la cadena si exite la palabra y devuelve un boleano como respuesta (true/flase)
// let resultado = cadena.indexOf("e");               //Busca dentro de toda la cadena la concidencia en la palabra de izquier a deracha y nos devuelvela primera concidencia con su pocicion
// let resultado = cadena.lastIndexOf("e");           //Busca dentro de toda la cadena la concidencia en la palabra de deracha a izquierda y nos devuelvela primera concidencia con su pocicion

// Modificamos la cadena 
// let resultado = cadena.repeat(5);                  //Nos repite la cadena de la cantidad de veces que ingresemos


//Modificamos pero nos devuelven diferentes tipos de datos (array,numbre,onject)
// Modificamos la cadena 
// let resultado = cadena.repeat(5);                  //Nos repite la cadena de la cantidad de veces que ingresemos

//Modificamos pero nos devuelven diferentes tipos de datos (array,numbre,onject)
// let resultado = cadena.split(" ", 6);                 //Nos devuelve un array dependiendo del separador y el limit de resultados que deseemos ver este ejemplos son lo 6 primeros          
// let resultado = cadena.substring(0, 12);              //Capturamos una parte de la cadena por medio de las posisicones de cada uno de los caracteres
// let resultado =  cadena.toUpperCase();                //Transformamos la cadena de texto a mayusculas
// let resultado =  cadena.toLowerCase();               //Transformamos la cadena de texto a minusculas





//console.log(resultado);

let dat1 = cadena.toUpperCase();
console.log(dat1);
let dat3 = dat1.split(" ");
console.log(dat3);
let dat2 = dat3.join('-');
console.log(dat2);
let dat4 = dat2.toLowerCase();
console.log(dat4);
let dat5 = dat4.split("-");
console.log(dat5);
let dat6 = dat5.join(' ');
console.log(dat6);



