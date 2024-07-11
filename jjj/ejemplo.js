let nombres = ['matias','juan','jose','pedro'];

//matriz para sus habilidades
let habilidades = [
     [70,75,80],
     [65,80,60],  
     [80,60,90],
     [90,50,70] 
];

function calcularpromedios(habilidades){
    let promedio = [];
    
    for (let i=0;1<habilidades.length;i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedio[i] = suma/fila.length;
      
    }
  
    return promedio;
}


function evaluaraptitudes (nombres, promedio) {
   
  for (let i=0;i<promedio.length;i++){
        if (promedio[i]>70) {
          console.log("el colaborador " + nombres [i] +
            "supera el promedio con : " + promedio [i]);
          }
          else{
            console.log("el colaborador " +  nombres [i]   +
                "No supera el promedio con: " + promedio[i] );
                alert("el colaborador " + nombres [i]+
                    "NO supera el promedio con: " + promedio[i]);

          }  



        }

        


     }


let promedio1 = calcularpromedios(habilidades)
evaluaraptitudes(nombres, promedio1);




