var minutoInicio = document.getElementById("minutos").innerHTML;
var segundoInicio = document.getElementById("segundos").innerHTML;
var minutooriginal=document.getElementById("minutos").innerHTML;
var segundooriginal=document.getElementById("segundos").innerHTML;
minDescanso=1;
segDescanso=30;

function actualizar(contador,bandera) {

    if(bandera==1){
        document.getElementById("minutos").innerHTML = minDescanso;
        document.getElementById("segundos").innerHTML = segDescanso;
        
        if(segDescanso==0){
            if(minDescanso==0 && segDescanso==0){
                minDescanso=1;
                segDescanso=30;
                setTimeout(()=>{
                    document.getElementById("numSerie").innerHTML =contador;
                },1000)
                var time = setTimeout(actualizar,1000,contador)
            }else{
                minDescanso-=1;
                segDescanso=59;
                var time = setTimeout(actualizar,1000,contador,1)
            }
        }else{
            document.getElementById("numSerie").innerHTML ="Descanso";
            segDescanso-=1;
            var time = setTimeout(actualizar,1000,contador,1)
        }
    }else{

    document.getElementById("minutos").innerHTML = minutoInicio;
    document.getElementById("segundos").innerHTML = segundoInicio;

    if (segundoInicio == 0) {
        if (minutoInicio == 0 && segundoInicio == 0) {
            if(contador<document.getElementById("series").innerHTML){
              minutoInicio=minutooriginal
              segundoInicio=segundooriginal
                setTimeout(()=>{
                    document.getElementById("numSerie").innerHTML =contador+1;
                },1000)
             var time= setTimeout(actualizar, 1000,contador+1,1);
            }
          else{
            document.getElementById("serref").classList.add("no_mostrar");
            document.getElementById("numSerie").innerHTML ="Finalizado";
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
}
var cont=1;
actualizar(cont)

