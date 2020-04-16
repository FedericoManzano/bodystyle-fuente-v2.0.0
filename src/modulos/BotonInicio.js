import $ from 'jquery'

(function(){
    var boton = null;
    var inicializar = ()=> {
        boton = $("<div class='boton-inicio'></div>")
        $(boton).hide()
        $("body").append(boton)
    }

    var scroll = () => {
        $(window).scroll(function(){
            if($(this).scrollTop() > 100){
                $(boton).show() 
            }else {
                $(boton).hide()
            }
        })
    }


    var activar = () => {
        $(boton).click(function(){
            $(window).scrollTop(0)
        })
    }
    var BotonInicio =  {
        iniciar: ()=> {
            inicializar()
            scroll()
            activar()
        }
    }
    window.BotonInicio = BotonInicio
})()

export default BotonInicio