import $ from 'jquery'


class EfectoHoverBorde {
    iniciar(
        {contexto = "vacio", posicion="izquierda",color= "fd-rojo"}
    ){
        if(contexto === "vacio"){
            console.error("El contexto es erroneo")
            return
        }
        var borde = $("<span></span>")
        $(contexto).append(borde)
        $(borde).addClass(color)
        
        switch(posicion){
            case "izquierda":
                $(borde).addClass("borde-izq")
            break;
            case "derecha":
                $(borde).addClass("borde-der")
            break;
            case "arriba":
                $(borde).addClass("borde-arr")
            break;
            case "abajo":
                $(borde).addClass("borde-aba")
            break;

        }
    }
}


export default EfectoHoverBorde