var minutoInicio = document.getElementById("minutos").innerHTML;
var segundoInicio = document.getElementById("segundos").innerHTML;
var minutooriginal=document.getElementById("minutos").innerHTML;
var segundooriginal=document.getElementById("segundos").innerHTML;


function actualizar(contador) {
    document.getElementById("minutos").innerHTML = minutoInicio;
    document.getElementById("segundos").innerHTML = segundoInicio;

    if (segundoInicio == 0) {
        if (minutoInicio == 0 && segundoInicio == 0) {
            if(contador<2){
              minutoInicio=minutooriginal
              segundoInicio=segundooriginal
             var time= setTimeout(actualizar, 1000,contador+1);
            }
          else{
              clearTimeout(time)
          }
        } else {
            contador=contador
            minutoInicio = minutoInicio - 1;
            segundoInicio = 59;
            var time=setTimeout(actualizar, 1000,contador);
        }
    }
    else {
        contador=contador
        segundoInicio -= 1;
        var time= setTimeout(actualizar, 1000,contador);
    }

}
var cont=1;
actualizar(cont)
// for(var contador=1;contador<=series;contador++){
//     if(contador==1){
//         actualizar();
//     }else{
//         descanso()
//         actualizar()
//     }
//
